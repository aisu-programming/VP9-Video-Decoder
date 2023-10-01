import os

directory = "src\encoded_data\_2023_09_22\camera\mithrandir"
start_num = 59

json_files = os.listdir(directory)
json_files = sorted(json_files, key=lambda f: int(f.split('_')[0]))
for fid, json_old_filename in enumerate(json_files):
    if ".json" not in json_old_filename: continue
    json_new_filename = str((start_num+fid)*10000) + '_' + '_'.join(json_old_filename.split('_')[1:])
    print(json_old_filename, '->', json_new_filename)
    os.rename(f"{directory}/{json_old_filename}", f"{directory}/{json_new_filename}")