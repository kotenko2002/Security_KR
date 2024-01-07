const CryptoJS = require("crypto-js");
const NodeRSA = require("node-rsa");

let studentNumber = "0210";
let name = "Dmytro Kotenko";
let email = "kotenko2002@gmail.com";
let data = `${studentNumber}, ${name}, ${email}`;

// Вільне кодування/декодування інформації
let encodedData = Buffer.from(data).toString("base64");
console.log(`Вільне кодування: ${encodedData}`);
let decodedData = Buffer.from(encodedData, "base64").toString("utf8");
console.log(`Вільне декодування: ${decodedData}\n\n`);

// Симетричні алгоритми шифрування
let symmetricKey = "Secret Passphrase";
let encryptedDataSymmetric = CryptoJS.AES.encrypt(data, symmetricKey);
console.log(`Симетричне шифрування: ${encryptedDataSymmetric}`);
let decryptedDataSymmetric = CryptoJS.AES.decrypt(
    encryptedDataSymmetric,
    symmetricKey
).toString(CryptoJS.enc.Utf8);
console.log(`Симетричне дешифрування: ${decryptedDataSymmetric}\n\n`);

// Асиметричні алгоритми шифрування
let key = new NodeRSA({ b: 512 });
let encryptedDataAsymmetric = key.encryptPrivate(data, "base64");
console.log(`Асиметричне шифрування: ${encryptedDataAsymmetric}`);
let decryptedDataAsymmetric = key.decryptPublic(
    encryptedDataAsymmetric,
    "utf8"
);
console.log(`Асиметричне дешифрування: ${decryptedDataAsymmetric}`);
console.log(`${key.exportKey("public")}`);
console.log(`${key.exportKey("private")}\n\n`);

// Односторонні хеш-функції
let hashedData = CryptoJS.SHA256(data);
console.log(`Хеш: ${hashedData}`);
