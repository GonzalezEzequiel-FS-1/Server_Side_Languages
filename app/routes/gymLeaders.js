const express = require("express");
const router = express.Router();
const {
    getAllGL,
    getGLbyID,
    getGLbyName,
    delGLbyName,
    createGL,
    editGL
} = require("../controller/gmldController")


//Get all
router.get("/", getAllGL);

//Get by ID
router.get("/search/id/:id", getGLbyID);

//Get by Name
router.get("/search/name/:name", getGLbyName);

//Delete by name
router.delete("/delete/:name", delGLbyName);

//Create new
router.post("/create/:name", createGL);

//Edit existing searching by name
router.put("/edit/:name", editGL);

module.exports = router;