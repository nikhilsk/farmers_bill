const express = require('express');
const app = express();

app.use('/',(req,res)=>{
    res.send('<h1>Hello from hereee??!!</h1>');
})

exports.app = app;