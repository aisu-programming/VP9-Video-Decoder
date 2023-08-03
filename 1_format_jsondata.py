DATE = "2023_08_02"



import os
import json
from tqdm import tqdm



def repair_jsonfile(filepath):
    with open(filepath, 'r') as file:
        content = file.read()

        if content[-1:] == ',':
            content = content[:-1]
        elif content[-2:] == ',\n':
            content = content[:-2]
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
    for root, _, files in os.walk(f"src/encoded_data/_{DATE}"):
        root = root.replace('\\', '/')
        files = list(filter(lambda f: f.endswith("_decoded_video.json"), files))
        if len(files) == 0:
            print(f"Directory {root} have no json files.")
        else:
            pbar = tqdm(files, desc=root)
            for file in pbar:
                pbar.set_description(f"{root}/{file}")
                if "_decoded_video.json" in file:
                    filepath = f"{root}/{file}"
                    repair_jsonfile(filepath)



if __name__ == "__main__":
    # test()
    main()