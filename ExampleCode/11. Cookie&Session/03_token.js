// Import 
var jwt = require('jsonwebtoken');

// Set Token
// let token = jwt.sign({userData}, "encryptString", {config});
const encryptString = "yucyuc";
let token = jwt.sign({
    userName: "yucpeng17",
}, encryptString, {
    expiresIn: 60, // Unit: Second
});
console.log(token);

// Check token
let t = token;

jwt.verify(t, encryptString, (err, data)=>{
    if(err){
        console.log(err);
        console.log("Failed Token Verification");
    }
    console.log(data);
})