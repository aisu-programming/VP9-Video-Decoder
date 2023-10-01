DATE = "_2023_09_22"



with open(f"src/encoded_data/{DATE}/{DATE}_groups.txt", 'r') as txt_file:
    content = txt_file.read()
    content = content.replace('\n', ", ")
    with open(f"src/encoded_data/{DATE}/{DATE}_groups.py", 'w') as py_file:
        py_file.write("import datetime\n\n")
        py_file.write("utime_interval_list = ")
        py_file.write(content)