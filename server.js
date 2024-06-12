require("dotenv").config();
const app = require('./app')
const connectDB = require("./app/db/config")

connectDB();
const PORT = process.env.PORT || 6969;



app.listen(PORT, ()=>{
    console.log(`Server Running on Port${PORT}`)
})