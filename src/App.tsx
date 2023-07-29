import React from 'react';
import './App.css';
import { may as May } from './types';



function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function createVideoDecoder(car: string, camera: string, targetsJson: Array<any>): VideoDecoder {
    return new VideoDecoder({
        output: (videoFrame: VideoFrame) => {

            // Filter and send only the images we want to the Back-End
            const utime = videoFrame.timestamp;
            targetsJson.forEach((targetDetail) => {
                const utimeStart = targetDetail["utime_start"];
                const utimeEnd = targetDetail["utime_end"];
                const carList = targetDetail["cars"];
                if (utimeStart <= utime && utime <= utimeEnd && car in carList) {
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
                                utime: utime,
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
                }
            })
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

async function loadJSON(filepath: string) {
    try {
      const response = await fetch(filepath);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status} - ${response.statusText}`);
      }
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error('Error loading JSON:', error);
      throw error;
    }
  }
  

async function main(metaJson: Array<any>, targetsJson: Array<any>) {
    const cameraToVideoDecoder: Record<string, any> = {};
    let post_counter = 0;

    for (let metaIndex = 0; metaIndex < metaJson.length; metaIndex++) {
        const metaItem = metaJson[metaIndex];
        const car = metaItem["car"];
        const filepath = metaItem["filepath"];
        const dataList: Array<any> = await loadJSON(filepath);
        // const dataList: Array<any> = require(`${filepath}`);

        for (let dataIndex = 0; dataIndex < dataList.length; dataIndex++) {
            const data = dataList[dataIndex];

            if (data === undefined) { console.log(data); }

            // // Ignore data can't be decoded
            // if (data.camera != "EG") {
            if (true) {

                const VideoDecoderId = car + data.camera;

                // Create new VideoDecoder for new car-camera
                if (!(VideoDecoderId in cameraToVideoDecoder)) {
                    var newVideoDecoder = createVideoDecoder(car, data.camera, targetsJson);
                    newVideoDecoder = configureDecoder(newVideoDecoder, {
                        codec: "vp09.00.10.08",
                        optimizeForLatency: true,
                        hardwareAcceleration: "prefer-software",
                    });
                    cameraToVideoDecoder[VideoDecoderId] = newVideoDecoder;
                }

                const decoder: VideoDecoder = cameraToVideoDecoder[VideoDecoderId];
                const image: May.image_t = new May.image_t();
                Object.assign(image, data);
                decodeImage(decoder, image);

                const utime = Number(image.utime);
                targetsJson.forEach(async (targetDetail) => {
                    const utimeStart = targetDetail["utime_start"];
                    const utimeEnd = targetDetail["utime_end"];
                    const carList = targetDetail["cars"];
                    if (utimeStart <= utime && utime <= utimeEnd && car in carList) {
                        post_counter++;
                        if (post_counter >= 50) {
                            // On my computer: approximately cost 1 seconds for Back-End to process 50 pakages
                            console.log(metaIndex, filepath, dataIndex, "Sleep for 1 seconds!");
                            await sleep(1000);
                            post_counter = 0;
                        }
                    }
                })
            }
        }
        console.log(metaIndex, filepath, dataList.length, "Finished!");
    }
}

const metaJson: Array<any> = [
    {
        "car": "makeba",
        "filepath": "./sample_data/_2023_07_26/makeba/0_decoded_video.json"
    },
    {
        "car": "makeba",
        "filepath": "./sample_data/_2023_07_26/makeba/10000_decoded_video.json"
    },
    {
        "car": "makeba",
        "filepath": "./sample_data/_2023_07_26/makeba/20000_decoded_video.json"
    },
    {
        "car": "makeba",
        "filepath": "./sample_data/_2023_07_26/makeba/30000_decoded_video.json"
    },
    {
        "car": "makeba",
        "filepath": "./sample_data/_2023_07_26/makeba/40000_decoded_video.json"
    },
    {
        "car": "makeba",
        "filepath": "./sample_data/_2023_07_26/makeba/50000_decoded_video.json"
    },
    {
        "car": "makeba",
        "filepath": "./sample_data/_2023_07_26/makeba/60000_decoded_video.json"
    },
    {
        "car": "marinara",
        "filepath": "./sample_data/_2023_07_26/marinara/0_decoded_video.json"
    },
    {
        "car": "marinara",
        "filepath": "./sample_data/_2023_07_26/marinara/10000_decoded_video.json"
    },
    {
        "car": "marinara",
        "filepath": "./sample_data/_2023_07_26/marinara/20000_decoded_video.json"
    },
    {
        "car": "marinara",
        "filepath": "./sample_data/_2023_07_26/marinara/30000_decoded_video.json"
    },
    {
        "car": "marinara",
        "filepath": "./sample_data/_2023_07_26/marinara/40000_decoded_video.json"
    },
    {
        "car": "marinara",
        "filepath": "./sample_data/_2023_07_26/marinara/50000_decoded_video.json"
    },
    {
        "car": "metheven",
        "filepath": "./sample_data/_2023_07_26/metheven/0_decoded_video.json"
    },
    {
        "car": "momo",
        "filepath": "./sample_data/_2023_07_26/momo/0_decoded_video.json"
    },
    {
        "car": "momo",
        "filepath": "./sample_data/_2023_07_26/momo/10000_decoded_video.json"
    },
    {
        "car": "momo",
        "filepath": "./sample_data/_2023_07_26/momo/20000_decoded_video.json"
    },
    {
        "car": "momo",
        "filepath": "./sample_data/_2023_07_26/momo/30000_decoded_video.json"
    },
    {
        "car": "momo",
        "filepath": "./sample_data/_2023_07_26/momo/40000_decoded_video.json"
    },
    {
        "car": "momo",
        "filepath": "./sample_data/_2023_07_26/momo/50000_decoded_video.json"
    }
];
const targetsJson: Array<any> = require("./sample_data/_2023_07_26/_2023_07_26_groups.json");
console.log("Start decoding...");
main(metaJson, targetsJson);



function App() {
    return (
        <div className="App" />
    );
}

export default App;