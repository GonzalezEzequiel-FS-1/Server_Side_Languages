const express = require("express");
const router = express.Router();
const gymLeaderRoutes = require("./gymLeaders")
const pokedexRoutes = require("./pokedexRoutes")

router.get("/", (req, res)=>{
    res
        .status(200)
        .json({
            success:true,
            message:`${req.method} made from routes/index.js`
        })
})
router.use("/gymleaders", gymLeaderRoutes);
router.use("/genone", pokedexRoutes);

module.exports = router;