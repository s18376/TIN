const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/hello", (req, res) => {
    res.send("Hello World");
});

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, './', 'form.html'));
});

app.post("/formdata", (req, res) => {
    res.send({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
    });
});

app.post("/jsondata", (req, res) => {
    res.send(
        `Data taken from json: \n username: ${req.body.username}  \n password: ${req.body.password} \n email: ${req.body.email}`
    );
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));