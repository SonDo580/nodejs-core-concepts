const { Buffer } = require("buffer");

// Buffer.alloc
const buffer = Buffer.alloc(10000); // fill with 0 by default

// Buffer.allocUnsafe
//
// faster:
// - allocate without filling ->
// - use the Buffer pool if the size is small enough
//   + Buffer pool is a pre-allocated block of memory that Node.js
//     maintains for managing small buffer allocations
//   + Buffer.poolSize = 8 KiB (default)
//
// unsafe:
// - may contain existing, possibly sensitive data
const unsafeBuffer = Buffer.allocUnsafe(10000);

for (let i = 0; i < unsafeBuffer.length; i++) {
  if (unsafeBuffer[i] !== 0) {
    console.log(`Element at ${i} has value ${unsafeBuffer[i].toString()}`);
  }
}

// Buffer.allocUnsafeSlow
// - almost same as allocUnsafe, but doesn't use the Buffer pool
const unsafeBuffer2 = Buffer.allocUnsafeSlow(10000);

// Buffer.from()

// Buffer.concat()
