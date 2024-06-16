require("dotenv").config();
const express = require("express");
const path = require("path");
const connectDB = require("./app/db/config");
const cors = require('cors')


const app = express();
const PORT = process.env.PORT || 6969;

app.use(cors());
connectDB();

app.use(express.static(path.join(__dirname, 'public')));

// Route to serve your JavaScript file
app.get('/js/apiCall', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/js/apiCall.js'));
});
app.use(express.static(path.join(__dirname, "public")));


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
