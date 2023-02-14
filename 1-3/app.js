
const { json } = require("express");
const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/get-all-users",function (req,res) {
    res.sendFile(`${__dirname}/user-data.json`)
})

app.get("/admins",function (req,res) {
    let userData =JSON.parse(fs.readFileSync("./user-data.json"))
    res.send(userData.filter((user) => user.role == "admin"))
})

app.listen(5005)