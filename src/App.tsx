import React from 'react';
import './App.css';
import { may as May } from './types';


function createVideoDecoder(label: string): VideoDecoder {
  return new VideoDecoder({
    output: (videoFrame: VideoFrame) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = videoFrame.displayWidth;
        canvas.height = videoFrame.displayHeight;
        // 將 VideoFrame 的像素數據繪製到 canvas 上
        ctx.drawImage(videoFrame, 0, 0);
        // 使用 Fetch API 將 base64Image 傳送到後端伺服器
        fetch('http://127.0.0.1:5000/upload', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            image: canvas.toDataURL('image/jpeg'),
            label: label,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            // console.log(data.message);
          })
          .catch((error) => {
            console.error('圖片上傳失敗：', error);
          });
      }
      videoFrame.close();
    },
    error: (error: Error) => {
      console.log(error.name, error.message);
    }
  })
}

function configureDecoder(decoder: VideoDecoder, config: VideoDecoderConfig): VideoDecoder {
  decoder.configure(config);
  return decoder;
}

function decodeImage(decoder: VideoDecoder, image: May.image_t) {
  if (image.data !== undefined) {
    const uint8array = Uint8Array.from(atob(image.data.toString()), c => c.charCodeAt(0));
    const encodedVideoChunk = new EncodedVideoChunk({
      type: "key",
      timestamp: Number(image.timestamp),
      duration: Number(image.duration),
      data: uint8array,
    })
    try {
      decoder.decode(encodedVideoChunk);
    } catch (error) {
      console.log("Error!!!", decoder, image);
    }
  }
}

const cameraToVideoDecoder: Record<string, any> = {};
// const jsonDataListPaths = [
//   './sample_data/metheven/0_decoded_video.json',
//   // './sample_data/metheven/10000_decoded_video.json',
//   // './sample_data/metheven/20000_decoded_video.json',
//   // './sample_data/metheven/30000_decoded_video.json',
//   // './sample_data/metheven/40000_decoded_video.json',
//   // './sample_data/metheven/50000_decoded_video.json',
//   // './sample_data/metheven/60000_decoded_video.json',
//   // './sample_data/metheven/70000_decoded_video.json',
//   // './sample_data/metheven/80000_decoded_video.json',
// ]

// jsonDataListPaths.forEach((path: string) => {
for (let jsonDataListIndex = 0; jsonDataListIndex <= 8; jsonDataListIndex++) {
  let jsonDataList: Array<any> = [];
  switch (jsonDataListIndex) {
    case 0:
      jsonDataList = require('./sample_data/metheven/0_decoded_video.json');
      break;
    case 1:
      jsonDataList = require('./sample_data/metheven/10000_decoded_video.json');
      break;
    // case 2:
    //   jsonDataList = require('./sample_data/metheven/20000_decoded_video.json');
    //   break;
    // case 3:
    //   jsonDataList = require('./sample_data/metheven/30000_decoded_video.json');
    //   break;
    // case 4:
    //   jsonDataList = require('./sample_data/metheven/40000_decoded_video.json');
    //   break;
    // case 5:
    //   jsonDataList = require('./sample_data/metheven/50000_decoded_video.json');
    //   break;
    // case 6:
    //   jsonDataList = require('./sample_data/metheven/60000_decoded_video.json');
    //   break;
    // case 7:
    //   jsonDataList = require('./sample_data/metheven/70000_decoded_video.json');
    //   break;
    // case 8:
    //   jsonDataList = require('./sample_data/metheven/80000_decoded_video.json');
    //   break;
    default:
      jsonDataList = [];
      break;
  }
  let counter = 0;
  jsonDataList.forEach((jsonData: any) => {

    if (counter >= 0) {
      console.log(jsonDataListIndex, counter);

      if (!(jsonData.camera in cameraToVideoDecoder)) {
        var newVideoDecoder = createVideoDecoder("metheven/" + jsonData.camera);
        newVideoDecoder = configureDecoder(newVideoDecoder, {
          // codec: image.webCodec,
          codec: "vp09.00.10.08",
          optimizeForLatency: true,
          hardwareAcceleration: "prefer-software",
        });
        cameraToVideoDecoder[jsonData.camera] = newVideoDecoder;
      }

      const decoder: VideoDecoder = cameraToVideoDecoder[jsonData.camera];
      const image: May.image_t = new May.image_t();
      Object.assign(image, jsonData);
      decodeImage(decoder, image);

      counter++;
    }

    return;
  })
}



function App() {
  return (
    <div className="App" />
  );
}

export default App;