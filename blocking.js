const crypto = require("node:crypto")

console.log("code started")

const firstKey = crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512")
console.log("first key generated", firstKey);

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, derivedKey)=>{
    console.log("second key generated", derivedKey);
})

console.log("code ended")