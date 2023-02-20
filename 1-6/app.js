const express = require("express");
const app = express()

app.get(
    ['/page1', '/page2', '/page3', '/page4', "/page5"].forEach((path) => {
        
            app.get(path, function (req, res) {
                if (path == "/page1") {
                    res.sendFile(`${__dirname}/views/page1.html`)
                }
                if (path == "/page2") {
                    res.sendFile(`${__dirname}/views/page2.html`)
                }
                if (path == "/page3") {
                    res.sendFile(`${__dirname}/views/page3.html`)
                }
                if (path == "/page4") {
                    res.sendFile(`${__dirname}/views/page4.html`)
                }
                if (path == "/page5") {
                    res.sendFile(`${__dirname}/views/page5.html`)
                }
         })
    })
)
app.listen(5005);