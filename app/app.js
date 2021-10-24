"ues strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const home = require("./src/routes/index");
app.use("/", home);

module.exports = app;