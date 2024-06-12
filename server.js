const http = require("http");
const app = require("./app/app");
require("dotenv").config();

const PORT = process.env.PORT || 6969;

http.createServer(app).listen(PORT, ()=>{
    console.log(`Server Running on port ${PORT}`)
});