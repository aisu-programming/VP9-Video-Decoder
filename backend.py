import os
import cv2
import json
import base64
import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
SAVE_FOLDER_LIST = []


def save_image_from_base64(base64_image, filepath):
    # 移除 base64 字串前的標頭，例如 "data:image/jpeg;base64,"
    image_data = base64_image.split(',')[1]
    # 將 base64 字串解碼成二進位數組
    binary_data = base64.b64decode(image_data)
    # 儲存影像檔案
    with open(filepath, "wb") as f:
        f.write(binary_data)
    return


@app.route("/upload/success", methods=["POST"])
def upload_successfully_decoded_image():
    data = request.get_json()
    base64_image = data["image"]
    date         = data["date"]
    camera       = data["camera"]
    car          = data["car"]
    utime        = data["utime"]
    
    save_dir = f"{date}/{camera}/{car}"
    if save_dir not in SAVE_FOLDER_LIST:
        os.makedirs(f"decoded_images/{save_dir}", exist_ok=True)
        SAVE_FOLDER_LIST.append(save_dir)
    filename = str(utime) + ".jpg"
    save_path = f"decoded_images/{save_dir}/{filename}"
    save_image_from_base64(base64_image, save_path)
    return jsonify({"message": "File uploaded successfully"})


@app.route("/upload/failed", methods=["POST"])
def create_black_image():
    data = request.get_json()
    date   = data["date"]
    camera = data["camera"]
    car    = data["car"]
    utime  = data["utime"]
    width  = data["width"]
    height = data["height"]
    
    save_dir = f"{date}/{camera}/{car}"
    if save_dir not in SAVE_FOLDER_LIST:
        os.makedirs(f"decoded_images/{save_dir}", exist_ok=True)
        SAVE_FOLDER_LIST.append(save_dir)
    filename = str(utime) + ".jpg"
    save_path = f"decoded_images/{save_dir}/{filename}"
    cv2.imwrite(save_path, np.zeros((height, width, 1), dtype=np.uint8))
    return jsonify({"message": "File uploaded successfully"})


# @app.route("/data/info", methods=["GET"])
# def get_data_info():
#     date = request.args.get("date")
#     car  = request.args.get("car")
#     if car is not None:
#         data = { "data": [1, 2, 3, 4, 5] }
#     else:
#         data = { "error": "Parameter loss: \"car\"。" }
#     return jsonify(data)


# @app.route("/data/item", methods=["GET"])
# def get_data_item():
#     date = request.args.get("date")
#     car  = request.args.get("car")
#     if car is not None:
#         data = { "data": [1, 2, 3, 4, 5] }
#     else:
#         data = { "error": "Parameter loss: \"car\"。" }
#     return jsonify(data)


@app.route("/data", methods=["GET"])
def get_data():
    date = request.args.get("date")
    car  = request.args.get("car")
    if None not in [ date, car ]:
        return_data = []
        directory = f"src/sample_data/_{date}/{car}"
        json_files = list(os.listdir(directory))
        for json_file in json_files:
            data_list = json.load(open(f"{directory}/{json_file}", 'r'))
            return_data += data_list
        data = { "data": return_data }
    else:
        data = { "error": "Parameter loss: \"car\"。" }
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)