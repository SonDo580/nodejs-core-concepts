const { Buffer, constants } = require("buffer");

const b = Buffer.alloc(1e9); // 1 GB (not GiB)

console.log("Buffer max size:", constants.MAX_LENGTH); // 4GiB

// Fill the buffer
// (b.length is the size of the buffer in bytes)

for (let i = 0; i < b.length; i++) {
  // console.log(i);
  b[i] = 0x10;
}

// Inspecting the node process =====
// - With the console.log, the memory occupied is significantly less
//   than 1 GB (about tens of MB)
// - Without the console.log, an almost-1-GB block of memory
//   is allocated right away

// More efficient way to fill the buffer
b.fill(0x10);
