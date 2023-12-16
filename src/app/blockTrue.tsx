"use client";
import { useState, useEffect } from "react";
import Image from "next/image"
import upiqrcode from "upiqrcode";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import jso from "../data.json"
export default function BlockTrue() {
    const [qrCode, setQrCode] = useState("");
    useEffect(() => {
        upiqrcode({
            payeeVPA: jso.UPI || "",
            payeeName: jso.NAME || "",
        })
            .then((upi: { qr: string, intent: string }) => {
                setQrCode(upi.qr);
            })
            .catch((err: Error) => {
                console.log(err);
            });
    }, []);
    const copy = () => {
        navigator.clipboard.writeText(jso.UPI).then(async function () {
            const copyId = document.getElementById('copy-id');
            if (copyId) {
                copyId.innerHTML = "Copied !!!";
                await new Promise(r => setTimeout(r, 2000));
                copyId.innerHTML = "Copy";
            }
        });
    };
    return (
        <>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap justify-center whitespace-break-spaces">
                    <div className="p-4">
                        <div className="qr-container items-center justify-center place-content-center bg1">
                            <div className="border border-zinc-950">
                                <Image
                                    src={qrCode}
                                    alt="QR Code"
                                    width={300}
                                    height={300}
                                />
                            </div>
                            <div className="text-center justify-center place-content-center items-center mt-5 text-xl/2">
                                <p>Scan the QR code</p>
                                <p> or use the UPI ID:</p>
                                <div className="upi-id-content">
                                    <div className="text-red-700 text-xl">
                                        <strong id="upi-id">{jso.UPI}</strong>
                                    </div>
                                    <div className="justify-center items-center mb-5 mt-5">
                                        <div className="text-center items-center justify-center backdrop-blur-30 text-white">
                                            <button onClick={copy} className="inline-flex items-center justify-center mb-2 mr-2 rounded-lg bg-blue-500">
                                                <span className="relative px-5 py-2.5" id='copy-id'>Copy</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="text-center justify-center items-center">
                                        <Player
                                            autoplay
                                            loop
                                            className="bg1 w-10 h-10"
                                            src="https://lottie.host/2b51d7af-7099-49f5-93df-f8190dde11bb/WU9eejAueC.json">
                                        </Player>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
;