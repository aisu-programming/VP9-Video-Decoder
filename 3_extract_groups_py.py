from src.encoded_data._2023_09_22._2023_09_22_groups import utime_interval_list
DATE = "_2023_09_22"



import json

json_list = []
for item in utime_interval_list:
    json_list.append({
        "utime_start": item[0][0],
        "utime_end"  : item[0][1],
        "cars"       : item[-1],
    })
with open(f"src/encoded_data/{DATE}/{DATE}_groups.json", 'w') as json_file:
    json.dump(json_list, json_file, indent=4)