import React from 'react';
import './App.css';
import { may as May } from './types';



function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function postSuccessfullyDecodedImage(videoFrame: VideoFrame, date: string, camera: string, car: string, utime: number) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
        canvas.width = videoFrame.displayWidth;
        canvas.height = videoFrame.displayHeight;
        // 將 VideoFrame 的像素數據繪製到 canvas 上
        ctx.drawImage(videoFrame, 0, 0);
        // 使用 Fetch API 將 base64Image 傳送到後端伺服器
        fetch("http://127.0.0.1:5000/upload/success", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                image: canvas.toDataURL("image/jpeg"),
                date: date,
                camera: camera,
                car: car,
                utime: utime,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log("Image successfully uploaded: ", data);
            })
            .catch((error) => {
                console.error("Image upload failed:", error);
            });
    }
}

function postDecodeErrorImage(image: May.image_t, date:string, camera: string, car: string) {
    fetch("http://127.0.0.1:5000/upload/failed", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            date: date,
            camera: camera,
            car: car,
            utime: image.utime,
            width: image.width,
            height: image.height,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            // console.log("Successfully reported decoding failure: ", image);
        })
        .catch((error) => {
            console.error("Failed to report decoding failure: ", error);
        });
}

async function fetchData(url: string) {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        if (!response.ok) {
            throw new Error("Network response was not ok (?)");
        }
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.error("Unknown error: ", error);
        return null;
    }
}

function createVideoDecoder(date: string, camera: string, car: string, targetsJson: Array<any>): VideoDecoder {
    return new VideoDecoder({
        output: (videoFrame: VideoFrame) => {
            // Filter and send only the images we want to the Back-End
            const utime = videoFrame.timestamp;
            targetsJson.forEach((target) => {
                const utimeStart = Number(target["utime_start"]);
                const utimeEnd = Number(target["utime_end"]);
                const carList: Array<string> = target["cars"];
                if (utimeStart <= utime && utime <= utimeEnd && carList.includes(car)) {
                    postSuccessfullyDecodedImage(videoFrame, date, camera, car, utime);
                }
            })
            videoFrame.close();
        },
        error: (error: Error) => {
            console.error("Unknown error:", error.name, error.message);
        }
    })
}

function configureDecoder(decoder: VideoDecoder, config: VideoDecoderConfig): VideoDecoder {
    decoder.configure(config);
    return decoder;
}

function decodeImage(decoder: VideoDecoder, image: May.image_t, date: string, camera: string, car: string, targetsJson: Array<Record<string, any>>) {
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
            if (error instanceof DOMException) {
                const utime = Number(image.utime);
                targetsJson.forEach((target) => {
                    const utimeStart = Number(target["utime_start"]);
                    const utimeEnd = Number(target["utime_end"]);
                    const carList: Array<string> = target["cars"];
                    if (utimeStart <= utime && utime <= utimeEnd && carList.includes(car)) {
                        postDecodeErrorImage(image, date, camera, car);
                    }
                })
            }
            else { console.error("Unknown error: ", error, decoder, image); }
        }
    }
    else {
        console.error("Error: image.data is undefined: ", image);
    }
}

async function main(date: string, targetsJson: Array<Record<string, any>>) {
    console.log("Start decoding...");

    const carSet: Set<string> = new Set();
    targetsJson.forEach((target) => {
        const cars: Array<string> = target["cars"];
        cars.forEach((car) => { carSet.add(car); });
    })

    const carData: Record<string, Array<any>> = {};
    const carList = Array.from(carSet);
    for (const car of carList) {
        // 定義要傳遞的參數
        const params = new URLSearchParams();
        params.append("date", date);
        params.append("car", car);

        // 組合完整的 URL，包含參數
        const url = "http://127.0.0.1:5000/data?" + params.toString();
        console.log("GET", url);
        const data = await fetchData(url);
        carData[car] = data.data;
    }

    let postCounter = 0;
    const VideoDecoders: Record<string, any> = {};
    for (const car of carList) {
        const dataList: Array<any> = carData[car];
        console.log(car, dataList.length, "Start decoding...");

        for (let dataIndex = 0; dataIndex < dataList.length; dataIndex++) {
            const data = dataList[dataIndex];
            if (data === undefined) { console.error("Error: data is undefined: ", data); }

            // // Ignore data can't be decoded
            // if (data.camera != "EG") {
            if (true) {
                const VideoDecoderId = date + data.camera + car;

                // Create new VideoDecoder for new car-camera
                if (!(VideoDecoderId in VideoDecoders)) {
                    var newVideoDecoder = createVideoDecoder(date, data.camera, car, targetsJson);
                    newVideoDecoder = configureDecoder(newVideoDecoder, {
                        codec: "vp09.00.10.08",
                        optimizeForLatency: true,
                        hardwareAcceleration: "prefer-software",
                    });
                    VideoDecoders[VideoDecoderId] = newVideoDecoder;
                }

                const decoder: VideoDecoder = VideoDecoders[VideoDecoderId];
                const image: May.image_t = new May.image_t();
                Object.assign(image, data);
                const utime = Number(image.utime);
                decodeImage(decoder, image, date, data.camera, car, targetsJson);

                for (let targetIndex = 0; targetIndex < targetsJson.length; targetIndex++) {
                    const target = targetsJson[targetIndex];
                    const utimeStart = Number(target["utime_start"]);
                    const utimeEnd = Number(target["utime_end"]);
                    const carList: Array<string> = target["cars"];
                    if (utimeStart <= utime && utime <= utimeEnd && carList.includes(car)) {
                        postCounter++;
                        // On my computer: approximately cost 1 seconds for Back-End to process 50 pakages
                        if (postCounter >= 50) {
                            // console.log(car, dataIndex, "Sleep for 1 seconds!");
                            await sleep(1000);
                            postCounter = 0;
                        }
                    }
                }
            }
        }
        console.log(car, dataList.length, "Finished decoding!");
    }

    console.log("All finished!");
}

const date = "2023_07_26"
const targetsJson: Array<any> = require(`./sample_data/_${date}/_${date}_groups.json`);
main(date, targetsJson);



function App() {
    return (
        <div className="App" />
    );
}

export default App;