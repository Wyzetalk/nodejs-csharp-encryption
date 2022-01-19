const CryptoJS = require("crypto-js");

const key = process.argv[2];
const data = process.argv[3];

var encrypted = Encryption(data, key);

console.log ("dotnet run", key, encrypted)

function Encryption(hexString, enckey) {

    var key = CryptoJS.enc.Utf8.parse(enckey);
    var iv = CryptoJS.enc.Utf8.parse(enckey);
    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(hexString), key,
        {
            keySize: 128, // / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
    return encrypted.toString();
}


