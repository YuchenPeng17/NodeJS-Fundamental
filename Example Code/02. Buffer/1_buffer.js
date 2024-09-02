// 1. alloc
//  会对分配的数据清零 00
let buf_1 = Buffer.alloc(10);
console.log(buf_1)

// 2. allocUnsafe
//  Unsafe: 包含旧的内存数据，速度快
let buf_2 = Buffer.allocUnsafe(10);
console.log(buf_2)

// 3. from
//  字符 -> Unicode/ASCII -> 2进制 -> 16进制
let buf_3 = Buffer.from('hello');
console.log(buf_3)