var express = require('express');
var router = express.Router();
const bodyParser= require('body-parser');
const fs = require('fs');
const path = require("path");

router.get('/deletedata', (req,res) => {
    res.sendFile(path.resolve('public/html/deletedata.html'))
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true}));


router.post('/deletedata', (req,res) => {
    fs.unlink(req.body.filename+'.txt', (err) => {
        if(err) throw err;
        res.send("File has been Deleted" + "<a href='/'>Home</a>")

    } );
    
});

module.exports=router