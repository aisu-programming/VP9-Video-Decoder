# VP9-Video-Decoder

## Download
`git clone https://github.com/aisu-programming/VP9-Video-Decoder.git`

## Installation
`npm i`

Though I have checked but may have dependency issues.

## Preprocess
Download the zipped data file under [src/encoded_data](https://github.com/aisu-programming/VP9-Video-Decoder/tree/master/src/encoded_data).

Unzip the file and add an underscore (_) before the directory and the groups txt file.

Your files should look like this:
> ![image](https://github.com/aisu-programming/VP9-Video-Decoder/assets/66176726/abcabbe9-7e91-431c-b9f1-391166a4470c)
> ![image](https://github.com/aisu-programming/VP9-Video-Decoder/assets/66176726/2d705469-7d9e-4756-9d37-9c9f77b767ea)

If the JSON files are not well formatted:
1. Edit the DATE variable to target date in [src/1_format_jsondata.py](https://github.com/aisu-programming/VP9-Video-Decoder/blob/master/1_format_jsondata.py#L1)
2. Execute it: `python 1_format_jsondata.py`

Next, to change the groups txt file to JSON format:
1. Edit the DATE variable to target date in [src/2_convert_groups_txt.py](https://github.com/aisu-programming/VP9-Video-Decoder/blob/master/2_convert_groups_txt.py#L1)
2. Edit the import source and the DATE variable to target date in [src/3_extract_groups_py.py](https://github.com/aisu-programming/VP9-Video-Decoder/blob/master/3_extract_groups_py.py#L1:L2)
3. Execute them: `python 2_convert_groups_txt.py` `python 3_extract_groups_py.py`

## Usage
The main part of the codes are in [src/App.tsx](https://github.com/aisu-programming/VP9-Video-Decoder/blob/master/src/App.tsx).

Simply edit the date at [line 200](https://github.com/aisu-programming/VP9-Video-Decoder/blob/master/src/App.tsx#L200) to the target date.

Run the Back-End App, then run the Front-End App:
1. `python backend.py`
2. `npm start`
3. You should see logs in both the console of the browser and the Back-End App.

## Verification
To check that the total of decoded files is correct:
1. Edit the DATE variable to target date in [src/4_check_jsondata.py](https://github.com/aisu-programming/VP9-Video-Decoder/blob/master/4_check_jsondata.py#L1)
2. Execute it: `python 4_check_jsondata.py`
3. You should see results like:

   > ![image](https://github.com/aisu-programming/VP9-Video-Decoder/assets/66176726/4921e668-e4ae-4284-a634-c36d5e4ed53c)
4. Check that the number in the resulting dictionary are same to the total in the output directory - "decoded_images".
