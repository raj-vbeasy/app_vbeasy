const fs = require('fs');
fs.readFile('Textfiles/text.txt','utf8',(err,data)=>{
    if(err){ console.log(err);}
    else{console.log(data);}
});