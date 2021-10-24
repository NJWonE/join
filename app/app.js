"ues strict";

const express = require("express");
const app = express();

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src`));

const home = require("./src/routes/index");
app.use("/", home);

module.exports = app;