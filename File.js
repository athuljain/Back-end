const fs= require('fs')

// write file

// fs.writeFile('example.txt', 'Hello, Node.js!', 'utf8', (err) => {
//     if (err) throw err;
//     console.log('File has been written.');
//   });


// ReadFile

// fs.readFile('example.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });

//append File

// fs.appendFile('example.txt', '\n Appended text.', 'utf8', (err) => {
//     if (err) throw err;
//     console.log('Data has been appended to the file.');
//   });


//Delete file
fs.unlink('example.txt', (err) => {
    if (err) throw err;
    console.log('File has been deleted.');
  });