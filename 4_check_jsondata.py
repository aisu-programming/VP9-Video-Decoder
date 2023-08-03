DATE = "2023_08_02"



import os
import json
from tqdm import tqdm



def check(car, item, target_list):
    utime = int(item["utime"])
    for target in target_list:
        utime_start = int(target["utime_start"])
        utime_end   = int(target["utime_end"])
        cars = target["cars"]
        if utime_start <= utime <= utime_end and car in cars:
            return f"{utime_start}_{utime_end}"
    return None


def process_json_file(car, json_filepath, target_list):
    return_static = {}
    with open(json_filepath, "r") as json_file:
        json_data = json.load(json_file)
        json_data = list(filter(lambda d: d["camera"] != "EG", json_data))
        for data in json_data:
            scene = check(car, data, target_list)
            if scene is not None:
                camera = data['camera']
                if scene not in return_static.keys():
                    return_static[scene] = {}
                if camera not in return_static[scene].keys():
                    return_static[scene][camera] = {}
                if car not in return_static[scene][camera].keys():
                    return_static[scene][camera][car] = []
                return_static[scene][camera][car] += [ data["utime"] ]
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
                    for scene in return_static.keys():
                        for camera in return_static[scene].keys():
                            for car in return_static[scene][camera].keys():
                                if scene not in static.keys():
                                    static[scene] = {}
                                if camera not in static[scene].keys():
                                    static[scene][camera] = {}
                                if car not in static[scene][camera].keys():
                                    static[scene][camera][car] = []
                                static[scene][camera][car] += return_static[scene][camera][car]
    
    for scene in static.keys():
        for camera in static[scene].keys():
            for car in static[scene][camera].keys():
                static[scene][camera][car] = len(list(set(static[scene][camera][car])))
            static[scene][camera] = dict(sorted(static[scene][camera].items(), key=lambda i: i[0]))
        static[scene] = dict(sorted(static[scene].items(), key=lambda i: i[0]))
    static = dict(sorted(static.items(), key=lambda i: i[0]))
    print(static)
    with open(f"decoded_images/{DATE}/verification.json", 'w') as json_file:
        json.dump(static, json_file, indent=2)



if __name__ == "__main__":
    main()
