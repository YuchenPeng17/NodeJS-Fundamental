// buffer 和 sting 的转换
let buf_1 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);

console.log(buf_1.toString())           // utf-8

// []
let buf_2 = Buffer.from('hello');

console.log(buf_2)                      // 16

console.log(buf_2[0])

console.log(buf_2[0].toString(2))       // 转 2 进制 01101000
console.log(buf_2[0].toString(16))      // 转 16 进制

buf_2[0] = 95;
console.log(buf_2)

// 溢出
buf_2[0] = 361;                         // 001 0110 1001 => 0110 1001 舍弃溢出的最高位

// 中文
// utf-8 每个中文3个字节
