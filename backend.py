import os
import base64
from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

COUNTER = 1
SAVE_FOLDER_DICT = {}


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

    global COUNTER
    print(COUNTER)
    COUNTER += 1

    data = request.get_json()
    base64_image = data['image']
    
    if data['label'] not in SAVE_FOLDER_DICT.keys():
        SAVE_FOLDER_DICT[data['label']] = 1
        os.makedirs(f"decoded_images/{data['label']}", exist_ok=True)

    # 產生唯一的檔案名稱，例如 image_1.jpg、image_2.jpg，以時間戳記為名稱
    filename = f"image_{SAVE_FOLDER_DICT[data['label']]:05}.jpg"
    SAVE_FOLDER_DICT[data['label']] += 1
    filepath = f"decoded_images/{data['label']}/{filename}"

    # 儲存影像檔案到本地硬碟中
    save_image_from_base64(base64_image, filepath)

    return jsonify({'message': 'File uploaded successfully'})


if __name__ == '__main__':
    app.run(debug=True)