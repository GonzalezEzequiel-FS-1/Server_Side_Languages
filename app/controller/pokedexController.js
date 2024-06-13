const Pokedex = require("../models/pokedexModel")
const capFirst = require("../misc/modules/capitalizeFirstLetter");
// Get All Pokemon
const getAllPkmn = async (req, res) => {
    try {
        const pokedexData = await Pokedex.find({});
        if (pokedexData.length === 0) {
            res.status(400).json({
                success: false,
                message: `Failed retrieving Pokémons`
            });
        } else {
            res.status(200).json({
                success: true,
                message: `${req.method} - All Pokémons Listed`,
                data: pokedexData
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `An error has occurred >>> ${error}`
        });
    }
};

// Get Pokémon by ID
const getPkmnbyID = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        if (!id) {
            res.status(400).json({
                success: false,
                message: `${req.method}, no ID Provided`
            });
            return;
        }
        const findById = await Pokedex.findById(id);
        if (!findById) {
            res.status(400).json({
                success: false,
                message: `${req.method}, Pokémon with ID ${id} not found`
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: `${req.method} - Specific Pokémon Queried`,
            data: findById
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: `${req.method}, failed ${error.message}`
        });
    }
};

// Get Pokémon By Name
const getPkmnbyName = async (req, res) => {
    try {
        const {
            name
        } = req.params;

        if (!name) {
            return res.status(400).json({
                success: false,
                message: `${req.method}, no name provided`
            });
        }

        const capName = capFirst(name);
        const selectedByName = await Pokedex.find({
            name: capName
        });

        if (!selectedByName || selectedByName.length === 0) {
            return res.status(404).json({
                success: false,
                message: `${req.method}, Pokémon with the name ${capName} not found`
            });
        }

        res.status(200).json({
            success: true,
            message: `${req.method} - Specific Pokémon Queried`,
            data: selectedByName
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: `${req.method}, failed ${error.message}`
        });
    }
};

// Delete Pokémon
const delPkmn = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        if (!id) {
            res.status(400).json({
                success: false,
                message: `${req.method}, no ID Provided`
            });
            return;
        }
        const pokemonToDelete = await Pokedex.findByIdAndDelete(id);
        if (!pokemonToDelete) {
            res.status(400).json({
                success: false,
                message: `${req.method}, Pokémon with ID ${id} not found`
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: `${req.method} - Pokémon Deleted`,
            data: pokemonToDelete
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: `${req.method}, failed ${error.message}`
        });
    }
};

// Create Pokémon
const createPkmn = async (req, res) => {
    try {
        const {
            num,
            name,
            img,
            type,
            height,
            weight,
            weaknesses,
            next_evolution,
            prev_evolution
        } = req.body;

        if (!num || !name || !img || !type || !height || !weight) {
            return res.status(400).json({
                success: false,
                message: "All fields are required to create a Pokémon"
            });
        }

        const newPokemon = await Pokedex.create({
            num,
            name,
            img,
            type,
            height,
            weight,
            weaknesses,
            next_evolution,
            prev_evolution
        });

        res.status(200).json({
            success: true,
            message: `${req.method} - Created new Pokémon`,
            data: newPokemon
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `${req.method}, failed ${error.message}`
        });
    }
};

// Edit Pokémon
const editPkmn = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        if (!id) {
            res.status(400).json({
                success: false,
                message: `${req.method}, no ID Provided`
            });
            return;
        }
        const editedPkmn = await Pokedex.findByIdAndUpdate(id, req.body, {
            new: true
        });
        if (!editedPkmn) {
            res.status(400).json({
                success: false,
                message: `Pokémon with ID ${id} not found`
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: `${req.method} - Pokémon with the ID of ${id} updated`,
            data: editedPkmn
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: `${req.method}, failed ${error.message}`
        });
    }
};

const uploadAll = async (req, res) => {
            try {
                //Requesting the data from the user
                const pokemonArray = req.body;
                //Check if the data is valid, or if its there at all
                if (!pokemonArray || pokemonArray.length === 0) {
                    res.status(500).json({
                        success: false,
                        message: `${req.method} - No data or incomplete data provided`
                    })
                    return;
                };
                //"Pack the data and send it to the DB using insertMany"
                const arrayToUpload = await Pokedex.insertMany(pokemonArray)
                    res.status(200).json({
                        success: true,
                        message:`Created ${arrayToUpload.length} Pokémon Successfully`
                    });
                //Finnaly catch any errors and display the code and message.
            } catch (error) {
                res.status(400).json({
                    success:false,
                    message:`Failed to create Pokémons ${error.message}`
                })
            }
        }

            module.exports = {
                getAllPkmn,
                getPkmnbyID,
                getPkmnbyName,
                delPkmn,
                createPkmn,
                editPkmn,
                uploadAll
            };