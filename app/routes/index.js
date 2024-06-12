const express = require("express");
const app = express();
const routes = require("./routes");

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server Works!!!"
    });
});

app.use("/", routes);

module.exports = app;