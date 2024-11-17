const { Buffer } = require("buffer");

const memoryContainer = Buffer.alloc(4); // 4 bytes

console.log(memoryContainer); // <Buffer 00 00 00 00>
console.log(memoryContainer[0]); // 0

memoryContainer[0] = 0xf4; // = 244 = 0b11110100
console.log(memoryContainer); // <Buffer f4 00 00 00>
console.log(memoryContainer[0]); // 244

memoryContainer[1] = -34;
console.log(memoryContainer); // <Buffer f4 de 00 00>
console.log(memoryContainer[1]); // 222
// (-34 + 256) % 256 = 222

memoryContainer[2] = 260;
console.log(memoryContainer); // <Buffer f4 de 04 00>
console.log(memoryContainer[2]); // 4
// 260 % 256 = 4

memoryContainer.writeInt8(-40, 1);
console.log(memoryContainer.readInt8(1)); // -40

console.log(memoryContainer.toString("hex")); // f4d80400

const memoryContainer1 = Buffer.alloc(3);
memoryContainer1[0] = 0b01001000;
memoryContainer1[1] = 0b01101001;
memoryContainer1[2] = 0b00100001;
console.log(memoryContainer1.toString('utf8')); // Hi!

const buff = Buffer.from([0x48, 0x69, 0x21]);
console.log(buff.toString("utf8")); // Hi!

const buff1 = Buffer.from("486921", "hex");
console.log(buff1.toString("utf8")); // Hi!

const buff2 = Buffer.from("string", "utf8");
console.log(buff2.toString("utf8")); // string