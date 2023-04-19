const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/', (req, res) => {
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var total = n1 + n2;
    res.send("The total sum of number is " + total)
})

app.listen(3000, (req, res) => {
    console.log("Server is listening on port 3000")
})