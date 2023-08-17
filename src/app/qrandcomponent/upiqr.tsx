import QRCode from 'qrcode'
interface UpiqrParams {
    payeeVPA?: string;
    payeeName?: string;
    payeeMerchantCode?: string;
    transactionId?: string;
    transactionRef?: string;
    transactionNote?: string;
    amount?: string;
    minimumAmount?: string;
    currency?: string;
    transactionRefUrl?: string;
}

interface UpiqrResult {
    qr: string;
    intent: string;
}

function validateParams({ payeeVPA: pa, payeeName: pn }: UpiqrParams) {
        let error = "";
        if (!pa || !pn) error = "Virtual Payee's Address/Payee's Name is compulsory";
        if (pa && pa.length < 5 || pn && pn.length < 4)
                error = "Virtual Payee's Address/Payee's Name is too short.";
        return error;
}

function buildUrl(this: string, params: Record<string, string>) {
    let url = this,
        qs = "";
    for (const [key, value] of Object.entries(params))
        qs += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
    if (qs.length > 0) url = url + qs;
    return url;
}

async function upiqr({
    payeeVPA: pa,
    payeeName: pn,
    payeeMerchantCode: me,
    transactionId: tid,
    transactionRef: tr,
    transactionNote: tn,
    amount: am,
    minimumAmount: mam,
    currency: cu,
    transactionRefUrl: url,
}: UpiqrParams): Promise<UpiqrResult> {
return new Promise<UpiqrResult>((resolve, reject) => {
    const error = validateParams({ payeeVPA: pa, payeeName: pn });
    if (error) reject(new Error(error));

    let intent = "upi://pay?";
    if (pa !== undefined) intent = buildUrl.call(intent, { pa, pn: pn! });
    if (am !== undefined) intent = buildUrl.call(intent, { am });
    if (mam !== undefined) intent = buildUrl.call(intent, { mam });
    if (cu !== undefined) intent = buildUrl.call(intent, { cu });
    if (me !== undefined) intent = buildUrl.call(intent, { me });
    if (tid !== undefined) intent = buildUrl.call(intent, { tid });
    if (tr !== undefined) intent = buildUrl.call(intent, { tr });
    if (tn !== undefined) intent = buildUrl.call(intent, { tn });
    if (intent !== undefined) intent = intent.substring(0, intent.length - 1);

    var opts ={
        quality: 1.0,
        margin: 3,
        scale:10,
    }


    QRCode.toDataURL(intent, opts, (err:any , qr:any) => {
        if (err) reject(new Error("Unable to generate UPI QR Code."));
        resolve({ qr, intent });
    });
});
}

export default upiqr;