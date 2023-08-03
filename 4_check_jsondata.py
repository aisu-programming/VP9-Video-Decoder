DATE = "2023_08_02"



import os
import json
from tqdm import tqdm

def check(car, item, target_list):
    utime = int(item["utime"])
    for target in target_list:
        utime_start = int(target["utime_start"])
        utime_end = int(target["utime_end"])
        cars = target["cars"]
        if utime_start <= utime <= utime_end and car in cars:
            return True
    return False

def process_json_file(car, json_filepath, target_list):
    return_static = {}
    with open(json_filepath, "r") as json_file:
        json_data = json.load(json_file)
        for data in json_data:
            if check(car, data, target_list):
                cameracar = data["camera"]+'/'+car
                if cameracar not in return_static.keys():
                    return_static[cameracar] = 1
                else:
                    return_static[cameracar] += 1
    return return_static

def main():
    target_file = f"src/encoded_data/_{DATE}/_{DATE}_groups.json"
    with open(target_file, "r") as file:
        target_list = json.load(file)

    static = {}
    root_directory = f"src/encoded_data/_{DATE}"
    for root, _, files in os.walk(root_directory):
        files = list(filter(lambda f: f.endswith("_decoded_video.json"), files))
        if len(files) > 0:
            for file in tqdm(files, desc=root):
                if file.endswith("_decoded_video.json"):
                    car = root.split('\\')[-1]
                    json_filepath = os.path.join(root, file)
                    return_static = process_json_file(car, json_filepath, target_list)
                    for key in return_static.keys():
                        if key not in static.keys():
                            static[key] = return_static[key]
                        else:
                            static[key] += return_static[key]
    static = dict(sorted(static.items(), key=lambda i: i[0]))
    print(static)

if __name__ == "__main__":
    main()
