var express = require('express');
var router = express.Router();
const bodyParser= require('body-parser');
const fs = require('fs');
const path = require("path");

router.get('/putdata', (req,res) => {
    res.sendFile(path.resolve('public/html/putdata.html'))
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true}));

router.post('/putdata', (req,res) => {
    fs.appendFile(req.body.filename+'.txt', req.body.content,(err) => {
        if(err) throw err;
        res.send(req.body.filename +'<br>' + req.body.content + "<br /><a href='/'>Home</a>")
        
    } )
    
});


module.exports=router