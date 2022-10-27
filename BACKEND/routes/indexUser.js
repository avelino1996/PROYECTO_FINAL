const express = require("express");
const app = express();

app.use("/users", require("./users"));
app.use("/login", require("./login"));
app.use("/logOut", require("./logOut"));

module.exports = app;
