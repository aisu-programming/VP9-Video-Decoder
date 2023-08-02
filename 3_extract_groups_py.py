import json
from src.sample_data._2023_07_31._2023_07_31_groups import utime_interval_list

filename = "_2023_07_31"

# print(utime_interval_list)
json_list = []
for item in utime_interval_list:
    json_list.append({
        "utime_start": item[0][0],
        "utime_end"  : item[0][1],
        "cars"       : item[-1],
    })
with open(f"src/sample_data/{filename}/{filename}_groups.json", 'w') as json_file:
    json.dump(json_list, json_file, indent=4)