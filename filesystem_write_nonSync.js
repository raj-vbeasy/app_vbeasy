const fs = require('fs');
let data = '';
const  da = fs.writeFile('Textfiles/text1.txt','this is data to be loaded into file',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('file written successfully');
    }
});