const express = require("express");
const app = express();

 app.get("/home",function (req,res) {
    res.send("home route")
})
app.get("/about",function (req,res) {
    res.send("About route")
})
app.get("/contact",function (req,res) {
    res.send("Contact route")
})
app.get("/",function (req,res) {
    res.send("root route")
})
// app.get("/*",function (req,res) {
//     res.sendFile(`${__dirname}/views/page5.html`)
// })

const notFoundController = (req, res) => {
    res.status(404).send("not found.");
};
app.use(notFoundController);

app.listen(5005);