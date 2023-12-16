import { Player, Controls } from '@lottiefiles/react-lottie-player';
export default function BlockElse() {
    return (
        <>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap justify-center whitespace-break-spaces">
                    <div className="p-4">
                        <div className="qr-container items-center justify-center place-content-center bg1">
                            <h1 className="text-3xl font-bold text-center text-red-900">Please enter your UPI ID and Name Correctly</h1>
                            <a href="/">
                                <button className="px-4 py-2 mt-4 text-lg font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Go Back</button>
                            </a>
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
        </>
    )
}