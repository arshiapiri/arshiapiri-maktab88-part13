const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/root", function (req, res) {
  res.send("Hello World!");
});
app.listen(5005)