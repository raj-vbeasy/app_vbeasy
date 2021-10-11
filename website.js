const fs = require('fs');
const http = require('http');
const port = process.env.port|| 3000;
const server = http.createServer((req,res)=>{
    
//import html pages
const homepage = fs.readFileSync('public/index.html');
const about = fs.readFileSync('public/about.html');    
res.setHeader('content-type','text/html');
        
    if(req.url=='/'){
        res.statusCode = 200; //ok
        res.end(homepage);
    }
    else if(req.url=='/about'){
        res.statusCode = 200; //ok
        res.setHeader('content-type','text/html');
        res.end(about);
    }
    else{
        res.statusCode = 404; //ok
        res.setHeader('content-type','text/html');
        res.end('<h2><font color="red">Error ! Page not found in Database 404</font></h2>');
    }
});
server.listen(port,()=>{
    console.log('port is listening now');
});