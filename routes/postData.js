var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
const path = require("path");


router.get('/postdata', (req,res) => {
    res.sendFile(path.resolve('public/html/postdata.html'))
});

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true}));



router.post('/postdata', (req,res) => {
    filename= req.body.filename
    content=req.body.content
    fs.writeFile(filename+'.txt', content, (err) => {
        if(err) throw err;
        res.send(req.body.filename +'<br>' + req.body.content + "<br/> <a href='/'>Home</a>")
    } )
    
});

module.exports=router