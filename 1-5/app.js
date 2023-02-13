const express = require("express");
const app = express()

    app.get("/page1",function (req,res) {
        res.sendFile(`${__dirname}/views/page1.html`)
        console.log(__dirname);
    })
    app.get("/page2",function (req,res) {
        res.sendFile(`${__dirname}/views/page2.html`)
    })
    app.get("/page3",function (req,res) {
        res.sendFile(`${__dirname}/views/page3.html`)
    })
    app.get("/page4",function (req,res) {
        res.sendFile(`${__dirname}/views/page4.html`)
    })
    app.get("/page5",function (req,res) {
        res.sendFile(`${__dirname}/views/page5.html`)
    })

app.listen(5000)