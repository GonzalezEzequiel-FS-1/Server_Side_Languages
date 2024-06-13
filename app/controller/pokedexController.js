const pokedex = require("../models/pokedexModel")
const capFirst = require("../misc/modules/capitalizeFirstLetter");
//Get All Pokemon
const getAllPkmn = async (req, res) => {
    try {
        const pokedex = await pokedex.find({});
        //Find Returns an empty array if no data is found.
        if (pokedex.length === 0) {
            res
                .status(400)
                .json({
                    success: false,
                    send: `Failed Failed retrieving Pokémons`
                })
        } else {
            res
                .status(200)
                .json({
                    success: true,
                    message: `${req.method} - All Pokémons Listed`,
                    gymLeaders
                });
        }
    } catch (error) {
        res
            .status(500)
            .json({
                success: false,
                message: `An error has Occurred >>>${error}`
            })
    }

};
//Get Pokémon by ID
const getPkmnbyID = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        if (!id) {
            res
                .status(400)
                .json({
                    success: false,
                    send: `${req.method}, no ID Provided`
                })
        }
        const findById = await pokedex.findById(id)
        if (!findById) {
            res
                .status(400)
                .json({
                    success: false,
                    send: `${req.method}, Pokémon with ID ${id} not found`
                });
        }
        res
            .status(200)
            .json({
                success: true,
                message: `${req.method} - Specific Pokémon Queried`,
                findById
            });
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .json({
                success: false,
                message: `${req.method}, failed ${error.message}`
            });
    };
};
//Get Pokémon By Name
const getPkmnbyName = async (req, res) => {
    try {
        const {
            name
        } = req.params;

        if (!name) {
            return res
                .status(400)
                .json({
                    success: false,
                    message: `${req.method}, Pokémon with no name provided`
                });
        }

        const capName = capFirst(name);
        const selectedByName = await pokedex.find({
            name: capName
        });

        if (!selectedByName || selectedByName.length === 0) {
            return res
                .status(404)
                .json({
                    success: false,
                    message: `${req.method}, Pokémon with the name ${capName} not found`
                });
        }

        res.status(200).json({
            success: true,
            message: `${req.method} - Specific Pokémon Queried`,
            gymLeader: selectedByName
        });

    } catch (error) {
        console.error(error);
        res
            .status(500)
            .json({
                success: false,
                message: `${req.method}, failed ${error.message}`
            });
    }
};
//Delete Pokémon
const delPkmn = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        if (!id) {
            res
                .status(400)
                .json({
                    success: false,
                    send: `${req.method}, no ID Provided`
                })
        } else {
            const pokemonToDelete = await pokedex.findByIdAndDelete(id, {
                description: String
            })
            res
                .status(200)
                .json({
                    success: true,
                    message: `${req.method} - Pokémon Deleted`,
                    pokemonToDelete
                });
        }
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .json({
                success: false,
                message: `${req.method},failed ${error.message}`
            })
    }
};
//Create Pokémon
const createPkmn = async (req, res) => {
    try {
        //Deconstruct the pokemon and accept the parameters from req.body
        const {
            num,
            name,
            img,
            type,
            height,
            weight,
            next_evolution,
            prev_evolution
        } = req.body;
        //Create the Pokémon from the req.body
        const newPokemon = await pokedex.create({
            num,
            name,
            img,
            type,
            height,
            weight,
            next_evolution,
            prev_evolution
        });
        //Log the New Pokémon to the console
        // console.log(`Data >>> ${newLeader}`)
        res
            .status(200)
            .json({
                success: true,
                message: `${req.method} - Created new Pokémon`,
                //Present the new Leader on the response
                data: newPokemon
            });
    } catch (error) {
        res
            .status(500)
            .json({
                success: false,
                message: `${req.method}, failed ${error.message}`
            })
    }
};
const editPkmn = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        if (!id) {
            res
                .status(400)
                .json({
                    success: false,
                    send: `${req.method}, no ID Provided`
                })
        };
        const editedPkmn = await pokedex.findByIdAndUpdate(id, req.body, {
            new: true
        })
        if (!editedPkmn) {
            res
                .status(400)
                .json({
                    success: false,
                    send: `Pokémon with ID ${id}, not found`
                })
        }
        res
            .status(200)
            .json({
                success: true,
                message: `${req.method} - Pokémon with the id of ${id} updated`,
                editedPkmn
            });
    } catch (error) {
        res
            .status(400)
            .json({
                success: false,
                message: `${req.method}, failed ${error.message}`
            })
    };
};
module.exports = {
    getAllPkmn,
    getPkmnbyID,
    getPkmnbyName,
    delPkmn,
    createPkmn,
    editPkmn
};