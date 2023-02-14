const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/home",function (req,res) {
    res.sendFile(`${__dirname}/views/index.html`)
})
app.get("/picture",function (req,res) {
    res.sendFile(`${__dirname}/views/laptop.jpg`)
})

app.listen(5005);