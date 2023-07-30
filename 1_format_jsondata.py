import os
import json
from tqdm import tqdm



def repair_jsonfile(filepath):
    with open(filepath, 'r') as file:
        content = file.read()
        if '[' not in content[:5]:
            content = '[' + content + ']'
        content = "},\n{".join(content.split("}{"))
    with open(filepath, 'w') as file:
        file.write(content)
    with open(filepath, 'r') as file:
        json_data = json.load(file)
    with open(filepath, 'w') as file:
        json.dump(json_data, file, indent=2)


def test():
    repair_jsonfile("test.json")


def main():
    for root, _, files in os.walk("src/sample_data"):
        root = root.replace('\\', '/')
        for file in tqdm(files, desc=root):
            if "_decoded_video.json" in file:
                filepath = f"{root}/{file}"
                repair_jsonfile(filepath)



if __name__ == "__main__":
    # test()
    main()