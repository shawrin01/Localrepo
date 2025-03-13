const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,"Files");
// for(i=0;i<3;i++)
// {
//   const filePath = path.join(dirPath, `newFile${i}.txt`);

//   fs.writeFileSync(filePath,"these are the new files");
// }

fs.appendFile(dirPath, 'This is the second line.\n', (err) => {
  if (err) {
    console.log('Error appending to file:', err);
  } else {
    console.log('Content appended successfully!');
  }
});