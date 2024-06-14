const express = require("express");
const router = express.Router();
const {
    getAllGL,
    getGLbyID,
    getGLbyName,
    delGL,
    createGL,
    editGL,
    uploadAll,
    delAll
} = require("../controller/gmldController")

//Create Multiple
router.post("/dump", uploadAll);
//Get all
router.get("/", getAllGL);
// Delete all
router.delete("/deleteall", delAll)
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