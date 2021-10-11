const express = require('express')
const port = 3000;
const app = express()
app.get('/',(req,res)=>{
    res.send('hello world is working')
})
app.listen(port,()=>{
    console.log('port is listening now')
})