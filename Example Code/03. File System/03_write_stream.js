// 1) Import fs
const fs = require('fs');

// 2) Create write stream | createWriteStream(path)
const ws = fs.createWriteStream('./poem.txt');

// 3) write
ws.write("I saw new Worlds beneath the Waterly,\r\n");
ws.write("New Peeple; yea, another Sky\r\n");
ws.write("And Sun, which seen by Day\r\n");
ws.write("Might things more clear display.\r\n");

// 4) Close the stream
ws.close();

// 适合写入频次较高的场景