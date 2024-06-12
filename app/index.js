const express = (require('express'));
const app = express();
const routeHandler = require("./routes");
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res)=>{
    res
        .status(200
        .json({
            success:true,
            message:`API running on port ${PORT}`
        })
        );
});

app.use("/api/pokedex", routeHandler)

module.exports = app;