const express = require("express");
const router = express.Router();
const {
    getAllGL,
    getGLbyID,
    getGLbyName,
    delGL,
    createGL,
    editGL
} = require("../controller/gmldController")


//Get all
router.get("/", getAllGL);

//Get by ID
router.get("/search/id/:id", getGLbyID);

//Get by Name
router.get("/search/name/:name", getGLbyName);

//Delete by ID
router.delete("/delete/:id", delGL);

//Create new
router.post("/create", createGL);

//Edit existing searching by ID
router.put("/edit/:id", editGL);

module.exports = router;