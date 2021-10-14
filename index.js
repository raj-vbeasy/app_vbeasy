const http = require('https');
const fs = require('fs');
const  port = process.env.port || 8080;
const server = http.createServer((req,res)=>{
  const home = fs.readFileSync('/public/index.html');
  if(req.url == '/home')
  {
    res.statusCode = 200;
    res.setHeader('content-type','text/html');
    res.end(home);
  }
  else
  {
    res.statusCode = 404;
    res.end('404  error data not found');
  }
});
