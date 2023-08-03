DATES = [ "_2023_08_02" ]



for date in DATES:
    with open(f"src/sample_data/{date}/{date}_groups.txt", 'r') as txt_file:
        content = txt_file.read()
        content = content.split("EST_tp: ")[1]
        with open(f"src/sample_data/{date}/{date}_groups.py", 'w') as py_file:
            py_file.write("import datetime\n\n")
            py_file.write("utime_interval_list = ")
            py_file.write(content)