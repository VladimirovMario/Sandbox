// https://nodejs.org/learn/manipulating-files/reading-files-with-nodejs
// const fs = require('node:fs');
const fsPromises = require('node:fs/promises');
const path = require('node:path');

const osOperations = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, 'files', 'starter.txt'),
      'utf8',
    );

    await fsPromises.unlink(
      path.join(__dirname, 'files', 'starter.txt'),
      (err) => {
        if (err) {
          throw err;
        }
        console.log(
          `${path.join(__dirname, 'files', 'starter.txt')} was deleted.`,
        );
      },
    );

    await fsPromises.writeFile(
      path.join(__dirname, 'files', 'promiseWrite.txt'),
      data,
    );

    await fsPromises.appendFile(
      path.join(__dirname, 'files', 'promiseWrite.txt'),
      '\nNice to meet you.',
    );

    await fsPromises.rename(
      path.join(__dirname, 'files', 'promiseWrite.txt'),
      path.join(__dirname, 'files', 'promiseComplete.txt'),
    );

    const newData = await fsPromises.readFile(
      path.join(__dirname, 'files', 'promiseComplete.txt'),
      'utf-8',
    );

    console.log(newData);
  } catch (error) {
    throw error;
  }
};
osOperations();

// fs.readFile(
//   path.join(__dirname, 'files', 'starter.txt'),
//   'utf8',
//   (err, data) => {
//     if (err) {
//       throw err;
//     }
//     console.log(data);
//   },
// );

// // By default, writeFile API will replace the contents of the file if it does already exist.
// const writeContent = 'Write content!\n';
// fs.writeFile(
//   path.join(__dirname, 'files', 'reply.txt'),
//   writeContent,
//   (err) => {
//     if (err) {
//       throw err;
//     } else {
//       console.log('File written successfully');
//     }

//     const appendContent = 'Append content!\n';
//     fs.appendFile(
//       path.join(__dirname, 'files', 'reply.txt'),
//       appendContent,
//       (err) => {
//         if (err) {
//           console.error(err);
//         } else {
//           console.log('Append file done');
//         }

//         fs.rename(
//           path.join(__dirname, 'files', 'reply.txt'),
//           path.join(__dirname, 'files', 'rename.txt'),
//           (err) => {
//             if (err) {
//               console.error(err);
//             } else {
//               console.log('Rename file done');
//             }
//           },
//         );
//       },
//     );
//   },
// );

// exit on uncaught exception
process.on('uncaughtException', (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
