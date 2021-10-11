const fs = require('fs');
const http = require('http');
const port = process.env.port || 3000;
const server = http.createServer((req,res)=>{
    const data = fs.readFileSync('public/index.html');
    res.statusCode = 200; //ok
    res.setHeader('content-type','text/html');
    res.end(data.toString());

});

server.listen(port,()=>{
    console.log('port is listening on port');
});