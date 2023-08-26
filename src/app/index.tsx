import Qr from './qr';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { block } from "million/react"
import data from '../data.json';
const qr = block(function Body() {
    const copy = () => {
        navigator.clipboard.writeText(data.UPI).then(async function () {
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
            <script>
                console.log(`
                \n ██╗░░░██╗██████╗░██╗
                \n ██║░░░██║██╔══██╗██║
                \n ██║░░░██║██████╔╝██║
                \n ██║░░░██║██╔═══╝░██║
                \n ╚██████╔╝██║░░░░░██║
                \n ░╚═════╝░╚═╝░░░░░╚═╝
                `);
            </script>


            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap justify-center whitespace-break-spaces">
                    <div className="p-4">
                        <div className="qr-container items-center justify-center place-content-center bg1">
                            <div className="border border-zinc-950">
                                <Qr />
                            </div>
                            <div className="text-center justify-center place-content-center items-center mt-5 text-xl/2">
                                <p>Scan the QR code</p>
                                <p> or use the UPI ID:</p>
                                <div className="upi-id-content">
                                    <div className="text-red-700 text-xl">
                                        <strong id="upi-id">{data.UPI}</strong>
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
});
export default qr;