require("dotenv").config();
const express = require("express");
var path = require('path');
const app = express();
const numberReverseRouter = require("./api/reverse-number.router");

app.use(express.json());
app.use("/api/rapid", numberReverseRouter);
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log("server up and running on PORT :", port);
});