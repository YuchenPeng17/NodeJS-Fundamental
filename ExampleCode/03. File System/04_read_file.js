// 1. Import fs
const fs = require('fs')

// 2. Async Read
fs.readFile('./motto.txt', (err, data) => {
    if(err){
        console.log("Read Failed");
        return;
    }
    console.log(data.toString())            // return a buffer
})

// 3. Sync Read
let data = fs.readFileSync('./poem.txt')
console.log(data.toString())

// 4. Read Stream
const rs = fs.createReadStream('../../NodeJS.md')

// 4.1) Bind to an data event
rs.on('data', chunk => {
    console.log(chunk.toString());
})

rs.on('end', () => {
    console.log("Finished Reading")
})