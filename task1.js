const username = "Kotenko";
const password = "0210";

const authHeader =
    "Basic " + Buffer.from(`${username}:${password}`).toString("base64");
console.log(`CODED: ${authHeader}`);

const base64Credentials = authHeader.split(" ")[1];
const credentials = Buffer.from(base64Credentials, "base64").toString("utf8");
console.log(`DECODED: ${credentials}`);
