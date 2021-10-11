const path = require('path');
//filename
const filename = path.basename('c:\\temp\\myfile.html');
console.log(filename);
//directory name
const dirname = path.dirname('c:\\temp\\myfile.html');
console.log(dirname);
//extension
const extension = path.extname(filename);
console.log(extension);