var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
const path = require("path");

var fs = require('fs')
router.get('/getdata', (req,res) => {
    res.sendFile(path.resolve('public/html/getdata.html'))
})
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true}))

router.post('/getdata', (req,res) => {
    fs.readFile(req.body.filename+'.txt', (err, data) => {
        if(err) throw err;
        x=data.toString()
        res.send(x + "<br /><a href='/'>Home</a>")
    } )
    
})

module.exports=router