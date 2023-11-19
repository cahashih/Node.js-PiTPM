const express = require("express");

const app = express();

let name = process.argv[2];
let age = process.argv[3];

console.log('name: ' + name);
console.log('age: ' + age);
app.get("/", (req, res) => {
    res.send("Hello, world!");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});