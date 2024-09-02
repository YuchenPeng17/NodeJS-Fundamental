console.log(__dirname)

// path.resolve -> concatenate final absoult path
// para1: abs path; para2: rel path
const path = require('path')
let temp1 = path.resolve(__dirname, './index.html')
console.log(temp1)

// sep: path seperator
console.log(path.sep)

// parse: analysis path
console.log(__filename)         // file's abs path
let str = '/Users/yuchenpeng/Desktop/My Github Projects/NodeJS-Project/TEMP/4. Path/1_path.js'
console.log(path.parse(str))

// basename: get file name
console.log(path.basename(str))

// dirname: get directory name 
console.log(path.dirname(str))

// extname: extension name
console.log(path.extname(str))