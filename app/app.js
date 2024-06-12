const express = require("express");
const morgan = require("morgan");
const app = express();
const routes = require("./routes");

app.use(morgan("dev"));
app.use(express.json());

app.use("/pokedex", routes);

app.use("/", async (req, res)=>{
    try{
        res
        .status(200)
        .send({
            success:true,
            message:"Connected to the Pokedex Server V2"
        });
    }catch (error) {
        console.error(error)
    }
});

//module.exports = app;