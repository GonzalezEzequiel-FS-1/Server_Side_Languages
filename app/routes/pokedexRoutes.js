const express = require("express");
const router = express.Router();

const {
    getAllPkmn,
    getPkmnbyID,
    getPkmnbyName,
    delPkmn,
    createPkmn,
    editPkmn,
    uploadAll,
    getPkmnByWk,
    delAll,
    fltr
} = require("../controller/pokedexController")


//Get all
router.get("/", getAllPkmn);

//Get by ID
router.get("/search/id/:id", getPkmnbyID);

//Get by Name
router.get("/search/name/:name", getPkmnbyName);

//Get by Weakness
router.get("/search/weakness/:weak", getPkmnByWk)

//Delete by ID
router.delete("/delete/:id", delPkmn);

//Create new
router.post("/create", createPkmn);

//Edit existing searching by ID
router.put("/edit/:id", editPkmn);

//Upload the complete pokedex (Initial Dump)
router.post("/dump", uploadAll)

//Delete All entries
router.delete("/deleteall", delAll)

//filter:
router.get("/filter", fltr)

module.exports = router;