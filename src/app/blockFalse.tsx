import React from "react";
import data from "../data.json";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
export default function BlockFalse() {
    const submit = () => {
        const upiId = (document.getElementById('upi-id') as HTMLInputElement).value;
        const name = (document.getElementById('name') as HTMLInputElement).value;
        if (upiId && name) {
            data.UPI = upiId;
            data.NAME = name;
            var r = document.getElementById("error") as HTMLHeadElement;
            var link = "upiid=" + data.UPI + "&name=" + data.NAME;
            r.innerHTML = '<a href="/?' + link + '"><h1>link</h1></a>';
            document.getElementById("error")?.click();
        }
        else {
            var r = document.getElementById("error") as HTMLHeadElement;
            r.innerHTML = "Please enter your UPI ID and Name Correctly";
        }
    };
    return (
        <>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap justify-center whitespace-break-spaces">
                    <div className="p-4">
                        <div className="qr-container items-center justify-center place-content-center bg1">
                            <p >Enter Upi Id :</p>
                            <input type="text" id="upi-id" placeholder="Enter your UPI ID" className="text-xl/2 text-center text-black bg-transparent border-b-2 border-white" />
                            <p className="mt-3">Enter Name :</p>
                            <input type="text" id="name" placeholder="Enter your Name" className="text-xl/2 text-center text-black bg-transparent border-b-2 border-white" />
                            <div className="text-center justify-center items-center">
                                <button onClick={submit} className="inline-flex items-center justify-center mb-2 mr-2 rounded-lg bg-blue-900 mt-5 text-white p-2">SUBMIT</button>
                                <h1 id="error" className="text-3xl font-bold text-center text-blue-700"></h1>
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
                        <div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}