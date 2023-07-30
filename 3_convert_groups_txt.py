filenames = [ "_2023_07_26", "_2023_07_27", "_2023_07_28" ]
for filename in filenames:
    with open(f"src/sample_data/{filename}/{filename}_groups.txt", 'r') as txt_file:
        content = txt_file.read()
        content = content.split("EST_tp: ")[1]
        with open(f"src/sample_data/{filename}/{filename}_groups.py", 'w') as py_file:
            py_file.write("import datetime\n\n")
            py_file.write("utime_interval_list = ")
            py_file.write(content)