const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get(
    ['/home', '/about', '/contact', '/'].forEach((path) => {
        try {
            app.get(path, function (req, res) {
                if (path == "/home") {
                    res.send("home route")
                }
                if (path == "/about") {
                    res.send("About route")
                }
                if (path == "/contact") {
                    res.send("Contact route")
                }
                if (path == "/") {
                    res.send("root route")
                }
                res.status(404).send("not found")
            })
        }
        catch (Error) {
            throw new Error("There is an Error Here")
        }
    })
)
app.listen(5005);