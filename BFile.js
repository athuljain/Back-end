const fs= require('fs')

// write file

// fs.writeFile('example1.txt', 'Hi, Node.js!', (err) => {
//     if (err) throw err;
//     console.log('File has been written.');
//   });


//  ReadFile

// fs.readFile('example1.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });

//append File

// fs.appendFile('example1.txt', '\n sdfghjkl.', 'utf8', (err) => {
//     if (err) throw err;
//     console.log('Data has been appended to the file.');
//   });


//Delete file
fs.unlink('example1.js', (err) => {
    if (err) throw err;
    console.log('File has been deleted.');
  });