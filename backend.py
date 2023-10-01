import os
import cv2
import json
import base64
import numpy as np
from tqdm import tqdm
from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
SAVE_FOLDER_LIST = []



#-------------------- Common    API --------------------#

def save_image_from_base64(base64_image, filepath):
    # 移除 base64 字串前的標頭，例如 "data:image/jpeg;base64,"
    image_data = base64_image.split(',')[1]
    # 將 base64 字串解碼成二進位數組
    binary_data = base64.b64decode(image_data)
    # 儲存影像檔案
    with open(filepath, "wb") as f:
        f.write(binary_data)
    return

# CACHE_DATA = {}
@app.route("/data", methods=["GET"])
def get_data():
    date        = request.args.get("date")
    car         = request.args.get("car")
    utime_start = request.args.get("utimeStart")
    utime_end   = request.args.get("utimeEnd")

    if None not in [ date, car, utime_start, utime_end ]:
        reference_data, response_data = [], []

        # if f"{car}" not in CACHE_DATA.keys():
        directory = f"src/encoded_data/_{date}/{car}"
        json_files = list(os.listdir(directory))
        json_files = sorted(json_files, key=lambda f: int(f.split('_')[0]))
        pbar = tqdm(json_files, desc="Loading data")
        for json_file in pbar:
            pbar.set_description(f'Loading data from "{json_file}"')
            with open(f"{directory}/{json_file}", 'r') as json_file:
                data_list = json.load(json_file)

                # Clean data: eliminate EG
                data_list = list(filter(lambda d: d["camera"] != "EG", data_list))

                response_data_tmp = list(filter(
                    lambda d: utime_start <= d["utime"] <= utime_end, data_list))
                reference_data_tmp = list(filter(
                    lambda d: d["utime"] < utime_start, data_list))
                if len(response_data_tmp) == 0 and len(reference_data_tmp) == 0: break
                response_data  += response_data_tmp
                reference_data += reference_data_tmp
        
        if len(response_data) == 0:
            print("No response_data.")
        else:
            cameras = list(set([ d["camera"] for d in response_data ]))
            pbar = tqdm(cameras, desc="Complement key frame data")
            for camera in pbar:
                pbar.set_description(f'Complement key frame data of "{camera}"')
                # response_camera_data = list(filter(lambda d: d["camera"]==camera, response_data))
                # response_camera_data = sorted(response_camera_data, key=lambda d: d["utime"])
                # if response_camera_data[0]["frameType"] == "KEY": continue
                reference_camera_data = list(filter(lambda d: d["camera"]==camera, reference_data))
                reference_camera_data = sorted(reference_camera_data, key=lambda d: d["utime"])
                for di in range(len(reference_camera_data)-1, -1, -1):
                    if reference_camera_data[di]["frameType"] == "KEY":
                        response_data += reference_camera_data[di:]
                        break
            response_data = sorted(response_data, key=lambda d: d["utime"])
        
        data = { "data": response_data }
    else:
        loss_parameters = []
        if date        is None: loss_parameters.append("date")
        if car         is None: loss_parameters.append("car")
        if utime_start is None: loss_parameters.append("utime_start")
        if utime_end   is None: loss_parameters.append("utime_end")
        data = { "error": "Parameter loss: " + ", ".join(loss_parameters) }
    return jsonify(data)

#-------------------- Common    API --------------------#



#-------------------- Group     API --------------------#

@app.route("/group/upload/success", methods=["POST"])
def group_upload_successfully_decoded_image():
    data = request.get_json()
    base64_image = data["image"]
    date         = data["date"]
    scene        = data["scene"]
    camera       = data["camera"]
    car          = data["car"]
    utime        = data["utime"]
    
    save_dir = f"{date}/{scene}/{camera}/{car}"
    if save_dir not in SAVE_FOLDER_LIST:
        os.makedirs(f"decoded_images/group/{save_dir}", exist_ok=True)
        SAVE_FOLDER_LIST.append(save_dir)
    filename = str(utime) + ".jpg"
    save_path = f"decoded_images/group/{save_dir}/{filename}"
    save_image_from_base64(base64_image, save_path)
    return jsonify({"message": "File uploaded successfully"})


@app.route("/group/upload/failed", methods=["POST"])
def group_create_black_image():
    data = request.get_json()
    date   = data["date"]
    scene  = data["scene"]
    camera = data["camera"]
    car    = data["car"]
    utime  = data["utime"]
    width  = data["width"]
    height = data["height"]
    
    save_dir = f"{date}/{scene}/{camera}/{car}"
    if save_dir not in SAVE_FOLDER_LIST:
        os.makedirs(f"decoded_images/group/{save_dir}", exist_ok=True)
        SAVE_FOLDER_LIST.append(save_dir)
    filename = str(utime) + ".jpg"
    save_path = f"decoded_images/group/{save_dir}/{filename}"
    cv2.imwrite(save_path, np.zeros((height, width, 1), dtype=np.uint8))
    return jsonify({"message": "File uploaded successfully"})

#-------------------- Group     API --------------------#



#-------------------- Traversal API --------------------#

@app.route("/traversal/upload/success", methods=["POST"])
def traversal_upload_successfully_decoded_image():
    data            = request.get_json()
    base64_image    = data["image"]
    date            = data["date"]
    intersection_id = data["intersectionId"]
    car             = data["car"]
    scene_count     = data["sceneCount"]
    camera          = data["camera"]
    utime           = data["utime"]
    
    save_dir = f"{date}/intersection_{intersection_id}/scene_{scene_count}_{car}/{camera}"
    if save_dir not in SAVE_FOLDER_LIST:
        os.makedirs(f"decoded_images/traversal/{save_dir}", exist_ok=True)
        SAVE_FOLDER_LIST.append(save_dir)
    filename = str(utime) + ".jpg"
    save_path = f"decoded_images/traversal/{save_dir}/{filename}"
    save_image_from_base64(base64_image, save_path)
    return jsonify({"message": "File uploaded successfully"})


@app.route("/traversal/upload/failed", methods=["POST"])
def traversal_create_black_image():
    data            = request.get_json()
    date            = data["date"]
    intersection_id = data["intersectionId"]
    car             = data["car"]
    scene_count     = data["sceneCount"]
    camera          = data["camera"]
    utime           = data["utime"]
    width           = data["width"]
    height          = data["height"]
    
    save_dir = f"{date}/intersection_{intersection_id}/scene_{scene_count}_{car}/{camera}"
    if save_dir not in SAVE_FOLDER_LIST:
        os.makedirs(f"decoded_images/traversal/{save_dir}", exist_ok=True)
        SAVE_FOLDER_LIST.append(save_dir)
    filename = str(utime) + ".jpg"
    save_path = f"decoded_images/traversal/{save_dir}/{filename}"
    cv2.imwrite(save_path, np.zeros((height, width, 1), dtype=np.uint8))
    return jsonify({"message": "File uploaded successfully"})

#-------------------- Traversal API --------------------#



#-------------------- Execution ------------------------#

if __name__ == "__main__":
    app.run(debug=True)