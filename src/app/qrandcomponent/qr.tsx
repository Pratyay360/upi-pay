import { useState, useEffect } from "react";
import Image from "next/image"
import data from "../../data.json"
import { upiqr } from "upiqr";

export default function Qr() {
    const [qrCode, setQrCode] = useState("");

    useEffect(() => {
        upiqr({
            payeeVPA: data.UPI,
            payeeName: data.NAME,
        })
            .then((upi: { qr: string, intent: string }) => {
                setQrCode(upi.qr);
            })
            .catch((err: Error) => {
                console.log(err);
            });
    }, []);

    return (
        <>

            <Image
                src={qrCode}
                alt="QR Code"
                width={300}
                height={300}
                />

        </>
    )
}