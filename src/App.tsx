import React from 'react';
import './App.css';
import { may as May } from './types';



function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function createVideoDecoder(car: string, camera: string): VideoDecoder {
    return new VideoDecoder({
        output: (videoFrame: VideoFrame) => {
            // console.log(videoFrame);
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            if (ctx) {
                canvas.width = videoFrame.displayWidth;
                canvas.height = videoFrame.displayHeight;
                // 將 VideoFrame 的像素數據繪製到 canvas 上
                ctx.drawImage(videoFrame, 0, 0);
                // 使用 Fetch API 將 base64Image 傳送到後端伺服器
                fetch("http://127.0.0.1:5000/upload", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        image: canvas.toDataURL("image/jpeg"),
                        car: car,
                        camera: camera,
                        utime: videoFrame.timestamp,
                    }),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        // console.log(data.message);
                    })
                    .catch((error) => {
                        console.warn("圖片上傳失敗：", error);
                    });
            }
            videoFrame.close();
        },
        error: (error: Error) => {
            console.error(error.name, error.message);
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
            timestamp: Number(image.utime),  // Number(image.timestamp),
            duration: Number(image.duration),
            data: uint8array,
        })
        try {
            decoder.decode(encodedVideoChunk);
        } catch (error) {
            console.error("Error!!!", decoder, image);
        }
    }
}

async function main() {
    const cameraToVideoDecoder: Record<string, any> = {};
    const jsonDataPathList = [
        "./sample_data/metheven/0_decoded_video.json",
        "./sample_data/metheven/10000_decoded_video.json",
        "./sample_data/metheven/20000_decoded_video.json",
        "./sample_data/metheven/30000_decoded_video.json",
        "./sample_data/metheven/40000_decoded_video.json",
        "./sample_data/metheven/50000_decoded_video.json",
        "./sample_data/metheven/60000_decoded_video.json",
        "./sample_data/metheven/70000_decoded_video.json",
        "./sample_data/metheven/80000_decoded_video.json",
    ]

    for (let jsonDataPathIndex = 0; jsonDataPathIndex < jsonDataPathList.length; jsonDataPathIndex++) {
        let jsonDataPath = jsonDataPathList[jsonDataPathIndex];
        let jsonDataList: Array<any> = require(`${jsonDataPath}`);

        for (let jsonDataIndex = 0; jsonDataIndex < jsonDataList.length; jsonDataIndex++) {
            const jsonData = jsonDataList[jsonDataIndex];

            if (jsonData === undefined) { console.log(jsonData); }

            // Ignore data can't be decoded
            if (jsonData.camera != "EG") {

                // Create new VideoDecoder for new car-camera
                if (!(jsonData.camera in cameraToVideoDecoder)) {
                    var newVideoDecoder = createVideoDecoder("metheven", jsonData.camera);
                    newVideoDecoder = configureDecoder(newVideoDecoder, {
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

                if ((jsonDataIndex+1) % 50 == 0) {
                    // On my computer: approximately cost 1 seconds for Back-End to process 50 pakages
                    console.log(jsonDataPathIndex, jsonDataPath, jsonDataIndex, "Sleep for 1 seconds!");
                    await sleep(1000);
                }
            }
        }
        console.log(jsonDataPathIndex, jsonDataPath, jsonDataList.length, "Finished!");
    }
}

main();



function App() {
    return (
        <div className="App" />
    );
}

export default App;