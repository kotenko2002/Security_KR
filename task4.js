const { v1: uuidv1 } = require("uuid");
console.log("v1: ", uuidv1());

const { v3: uuidv3 } = require("uuid");
const MY_NAMESPACE_4V3 = "1b671a64-40d5-491e-99b0-da01ff1f3341";
console.log("v3: ", uuidv3("UniversallyUniqueIdentifier", MY_NAMESPACE_4V3));

const { v4: uuidv4 } = require("uuid");
console.log("v4: ", uuidv4());

const { v5: uuidv5 } = require("uuid");
const MY_NAMESPACE_4V5 = "1b671a64-40d5-491e-99b0-da01ff1f3341";
console.log("v5: ", uuidv5("UniversallyUniqueIdentifier", MY_NAMESPACE_4V5));
