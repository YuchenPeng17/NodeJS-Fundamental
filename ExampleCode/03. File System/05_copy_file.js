const fs = require('fs');

// Option1: read file and write file
let data = fs.readFileSync('../../NodeJS.md')
fs.writeFileSync('./NodeJS-2.md', data)

// Option2: use read & write stream
const rs = fs.createReadStream('../../NodeJS.md')
const ws = fs.createWriteStream('./NodeJS-3.md')

rs.on('data', chunk => {
    ws.write(data);
})