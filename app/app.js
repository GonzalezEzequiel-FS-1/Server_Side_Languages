const express = require("express");
const morgan = require("morgan");
const app = express();
const routes = require("./routes");

app.use(morgan("dev"));
app.use(express.json());

app.use("/pokedex", routes);

// app.get('/home', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
//     console.log('Homepage accessed');
// });

app.use("/", async (req, res)=>{
    try{
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
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