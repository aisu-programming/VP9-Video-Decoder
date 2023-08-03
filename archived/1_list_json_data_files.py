import os
import json

filenames = [ "_2023_07_26", "_2023_07_27", "_2023_07_28" ]
for filename in filenames:
    json_list = []
    for root, dirs, files in os.walk(f"src/encoded_data/{filename}"):
        root = root.replace('src/', '')
        root = root.replace('\\', '/')
        for file in files:
            if "_decoded_video.json" in file:
                json_list.append({
                    "car"     : root.split('/')[-1],
                    "filepath": f"./{root}/{file}"
                })
    with open(f"src/encoded_data/{filename}/{filename}_meta.json", 'w') as json_file:
        json.dump(json_list, json_file, indent=4)