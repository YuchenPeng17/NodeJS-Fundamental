const fs = require('fs')

// 1) Async
fs.appendFile('./motto.txt', "\r\nLove your family, work super hard, live your passion.", err => {
    if(err){
        console.log("Append Failed");
        return;
    }
    console.log("Append Successfully");
})

// 2) Sync
fs.appendFileSync('./data.txt', "\r\nRandom Text");

// 3) writeFile
fs.writeFile('./motto.txt', "\r\nLove Love Love", {flag: "a"}, err => {
    if(err){
        console.log("Append Failed");
        return;
    }
    console.log("Append Successfully");
})