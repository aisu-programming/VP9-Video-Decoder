import os
import base64
from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
SAVE_FOLDER_LIST = []


def save_image_from_base64(base64_image, filepath):
    # 移除 base64 字串前的標頭，例如 'data:image/jpeg;base64,'
    image_data = base64_image.split(',')[1]

    # 將 base64 字串解碼成二進位數組
    binary_data = base64.b64decode(image_data)

    # 儲存影像檔案
    with open(filepath, 'wb') as f:
        f.write(binary_data)

@app.route('/upload', methods=['POST'])
def upload_image():

    data = request.get_json()
    base64_image = data["image"]
    car          = data["car"]
    camera       = data["camera"]
    utime        = data["utime"]
    
    save_dir = f"{car}/{camera}"
    if save_dir not in SAVE_FOLDER_LIST:
        os.makedirs(f"decoded_images/{save_dir}", exist_ok=True)
        SAVE_FOLDER_LIST.append(save_dir)

    # 產生唯一的檔案名稱，例如 image_1.jpg、image_2.jpg，以時間戳記為名稱
    filename = str(utime) + ".jpg"
    save_path = f"decoded_images/{save_dir}/{filename}"

    # 儲存影像檔案到本地硬碟中
    save_image_from_base64(base64_image, save_path)

    return jsonify({'message': 'File uploaded successfully'})


if __name__ == '__main__':
    app.run(debug=True)