import React from 'react';
import './App.css';
import { may as May } from './types';



const decoder = new VideoDecoder({
  output: (videoFrame: VideoFrame) => {
    console.log("5:", videoFrame);

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
      canvas.width = videoFrame.displayWidth;
      canvas.height = videoFrame.displayHeight;
      // 將 VideoFrame 的像素數據繪製到 canvas 上
      ctx.drawImage(videoFrame, 0, 0);
    }
    // 在網頁上顯示 canvas 元素
    document.body.appendChild(canvas);
  },
  error: (error: Error) => {
    console.log("5:", error.name, error.message);
  }
})

configureDecoder({
  // codec: image.webCodec,
  codec: "vp09.00.10.08",
  optimizeForLatency: true,
  hardwareAcceleration: "prefer-software",
});

function configureDecoder(config: VideoDecoderConfig): void {
  decoder.configure(config);
}

function decodeJsonData(jsonData: any) {
  console.log("1:", jsonData);

  const image: May.image_t = new May.image_t();
  Object.assign(image, jsonData);
  console.log("2:", image);

  if (image.data !== undefined) {
    const uint8array = Uint8Array.from(atob(image.data.toString()), c => c.charCodeAt(0));
    console.log("3:", uint8array);

    const encodedVideoChunk = new EncodedVideoChunk({
      type: "key",
      timestamp: Number(image.timestamp),
      duration: Number(image.duration),
      data: uint8array,
    })
    console.log("4:", encodedVideoChunk);
    decoder.decode(encodedVideoChunk);
  }
}

const jsonDataList = require('./sample_data/0_decoded_video_momo.json');
decodeJsonData(jsonDataList[1]);  // KEY   frame
decodeJsonData(jsonDataList[6]);  // DELTA frame (must be same in shape of previous KEY frame)

// jsonDataList.forEach((jsonData: any) => {
//   decodeJsonData(jsonData);
// })



function App() {
  return (
    <div className="App"/>
  );
}

export default App;