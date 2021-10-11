const fs = require('fs');
const file = require('./import/file.js');
console.log(sumit);
//writting file into json file 
fs.writeFileSync('exported.json',JSON.stringify(sumit),()=>{
    if(data){
        console.log('data write successfully');
    }
});
