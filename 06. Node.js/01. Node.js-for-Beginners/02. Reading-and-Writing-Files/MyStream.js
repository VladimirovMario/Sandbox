const { Readable } = require('node:stream');

class MyStream extends Readable {
  #count = 0;
  _read(size) {
    this.push(':-)');
    if (++this.#count === 5) {
      this.push(null);
    }
  }
}

// Basic Readable Stream
const stream = new MyStream();
stream.on('data', (chunk) => {
  console.log(chunk.toString());
});

// Advanced Control with the readable Event
const advancedControlStream = new MyStream({
  highWaterMark: 1,
});

advancedControlStream.on('readable', () => {
  console.count('>> readable event');
  let chunk;
  while ((chunk = advancedControlStream.read()) !== null) {
    console.log(chunk.toString()); // Process the chunk
  }
});
advancedControlStream.on('end', () => console.log('>> end event'));
