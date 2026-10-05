/*
All three of fs.readFile(), fs.readFileSync() and fsPromises.readFile() read the full content of the file in memory before returning the data.
This means that big files are going to have a major impact on your memory consumption and speed of execution of the program.
In this case, a better option is to read the file content using streams as it is more memory efficient.
*/

// https://nodejs.org/learn/manipulating-files/reading-files-with-nodejs
// https://nodejs.org/learn/modules/how-to-use-streams
// https://nodejs.org/learn/modules/how-to-use-streams#how-to-operate-with-streams

const fs = require('node:fs');
const path = require('path');

const fileOperations = async () => {
  const filePath = path.join(__dirname, 'files', 'lorem.txt');
  const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

  try {
    for await (const chunk of readStream) {
      console.log('--- File chunk start ---');
      console.log(chunk);
      console.log('--- File chunk end ---');
    }
    console.log('Finished reading the file.');
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
  }

  const outputPath = path.join(__dirname, 'files', 'new-lorem.txt');
  const writeStream = fs.createWriteStream(outputPath);
  // The .pipe() method concatenates one readable stream to a writable (or transform) stream.
  // Although this seems like a simple way to achieve our goal, it delegates all error handling to the programmer, making it difficult to get it right.
  readStream.pipe(writeStream);
};

fileOperations();
