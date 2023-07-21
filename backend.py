import os
import base64
from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

SAVE_FOLDER = ''
IMAGE_COUNTER = 1


def save_image_from_base64(base64_image, filename):
    # 移除 base64 字串前的標頭，例如 'data:image/jpeg;base64,'
    image_data = base64_image.split(',')[1]

    # 將 base64 字串解碼成二進位數組
    binary_data = base64.b64decode(image_data)

    # 儲存影像檔案
    with open(os.path.join(app.config['SAVE_FOLDER'], filename), 'wb') as f:
        f.write(binary_data)

@app.route('/upload', methods=['POST'])
def upload_image():
    data = request.get_json()
    base64_image = data['image']
    global SAVE_FOLDER
    if SAVE_FOLDER != data['label']:
        SAVE_FOLDER = data['label']
        app.config['SAVE_FOLDER'] = SAVE_FOLDER
        os.makedirs(SAVE_FOLDER, exist_ok=True)

    # 產生唯一的檔案名稱，例如 image_1.jpg、image_2.jpg，以時間戳記為名稱
    global IMAGE_COUNTER
    filename = f"image_{IMAGE_COUNTER:08}.jpg"
    IMAGE_COUNTER += 1

    # 儲存影像檔案到本地硬碟中
    save_image_from_base64(base64_image, filename)

    return jsonify({'message': 'File uploaded successfully'})


if __name__ == '__main__':
    app.run(debug=True)