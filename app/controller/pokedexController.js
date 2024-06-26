const Pokedex = require("../models/pokedexModel")
const capFirst = require("../misc/modules/capitalizeFirstLetter");
const {
    query
} = require("express");

// Get All Pokemon
const getAllPkmn = async (req, res) => {
    try {
        //Using
        const pokedexData = await Pokedex.find(req.query);
        if (pokedexData.length === 0) {
            res.status(200).json({
                /*
                I might be mistaken here, but Im using 200 and success true because,
                technically the request didn't fail.
                if I'm checking for pokedex.data.length equals zero, and it comes true,
                the array is empty, it was a successful query but there is nothing on it.
                Does that make sense?
                */
                data: pokedexData,
                success: true,
                message: `No Pokémons in database.`
            });
            return;
        } else {
            res.status(200).json({ // Now, another successful request, this time with all the Pokémons in tha database.
                success: true,
                message: `${req.method} - All Pokémons Listed`,
                data: pokedexData
            });
        }
    } catch (error) {
        res.status(501).json({
            /*
            Here, im not sure what code to use, its a server error but I dont think its gateway related.
            could be Service unavailable, but that would be a specific situation, decided to go with 500
            and present the user with the error so debugging can be performed.
            */
            success: false,
            message: `${req.method} failed please consult error >>> ${error}`
        });
    }
};
// Get Pokémon by ID
//Almost the same principle as the get all but this time we provide an ID as part of the URI
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
            res.status(404).json({
                success: false,
                message: `${req.method}, Pokémon with ID ${id} not found`
            });
            return;
        }
        res.status(201).json({
            success: true,
            message: `${req.method} - Specific Pokémon Queried`,
            data: findById
        });
    } catch (error) {
        console.error(error);
        res.status(501).json({
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
            return res.status(404).json({
                success: false,
                message: `${req.method}, no name provided`
            });
        }

        const capName = capFirst(name);
        const selectedByName = await Pokedex.find({
            name: capName,

        });

        if (!selectedByName || selectedByName.length === 0) {
            return res.status(404).json({
                success: false,
                message: `${req.method}, Pokémon with the name ${capName} not found`
            });
        }

        res.status(201).json({
            success: true,
            message: `${req.method} - Specific Pokémon Queried`,
            data: selectedByName
        });
    } catch (error) {
        console.error(error);
        res.status(501).json({
            success: false,
            message: `${req.method}, failed ${error.message}`
        });
    }
};

//Get Pokemon By Weakness
const getPkmnByWk = async (req, res) => {
    try {
        const {
            weak
        } = req.params
        if (!weak || weak.length === 0) {
            res.status(404).json({
                success: false,
                message: `${req.method} failed unable to find Pokémons weak against ${weak} attribute type`
            })
        };
        const capType = capFirst(weak);
        const weakAgainst = await Pokedex.find({
            weaknesses: capType
        });
        if (weakAgainst.length === 0) {
            res.status(404).json({
                success: false,
                message: `${req.method} failed unable to fetch resource ${weakAgainst}`
            })
        };
        res.status(201).json({
            success: true,
            message: `${weakAgainst.length} Pokémons weak against ${weak} found.`,
            data: weakAgainst
        })
    } catch (error) {
        res.status(501).json({
            success: false,
            message: `${req.method} failed, please consult ${error.message} `
        })
    }
};

// Delete Pokémon
const delPkmn = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        if (!id) {
            res.status(404).json({
                success: false,
                message: `${req.method}, no ID Provided`
            });
            return;
        }
        const pokemonToDelete = await Pokedex.findByIdAndDelete(id);
        if (!pokemonToDelete) {
            res.status(404).json({
                success: false,
                message: `${req.method}, Pokémon with ID ${id} not found`
            });
            return;
        }
        res.status(201).json({
            success: true,
            message: `${req.method} - Pokémon Deleted`,
            data: pokemonToDelete
        });
    } catch (error) {
        console.error(error);
        res.status(501).json({
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
            return res.status(404).json({
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

        res.status(201).json({
            success: true,
            message: `${req.method} - Created new Pokémon`,
            data: newPokemon
        });
    } catch (error) {
        res.status(501).json({
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
            res.status(404).json({
                success: false,
                message: `${req.method}, no ID Provided`
            });
            return;
        }
        const editedPkmn = await Pokedex.findByIdAndUpdate(id, req.body, {
            new: true
        });
        if (!editedPkmn) {
            res.status(404).json({
                success: false,
                message: `Pokémon with ID ${id} not found`
            });
            return;
        }
        res.status(201).json({
            success: true,
            message: `${req.method} - Pokémon with the ID of ${id} updated`,
            data: editedPkmn
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: `${req.method}, failed ${error.message}`
        });
    }
};
//Upload Multiple Pokémons
const uploadAll = async (req, res) => {
    try {
        //Requesting the data from the user
        const pokemonArray = req.body;
        //Check if the data is valid, or if its there at all
        if (!pokemonArray || pokemonArray.length === 0) {
            res.status(501).json({
                success: false,
                message: `${req.method} - No data or incomplete data provided`
            })
            return;
        };
        //"Pack the data and send it to the DB using insertMany"
        const arrayToUpload = await Pokedex.insertMany(pokemonArray)
        res.status(201).json({
            success: true,
            message: `Created ${arrayToUpload.length} Pokémon Successfully`
        });
        //Finnaly catch any errors and display the code and message.
    } catch (error) {
        res.status(404).json({
            success: false,
            message: `Failed to create Pokémons ${error.message}`
        })
    }
}

//Delete All Pokémons
const delAll = async (req, res) => {
    try {
        //Requesting the data from the user
        const pokemonArray = req.body;
        //Check if the data is valid, or if its there at all
        if (!pokemonArray || pokemonArray.length === 0) {
            res.status(501).json({
                success: false,
                message: `${req.method} - No data or incomplete data provided`
            })
            return;
        };

        //"Pack the data and send it to the DB using deleteMany"
        const arrayToUpload = await Pokedex.deleteMany(pokemonArray)
        //If there are no Pokémons on the database, send a success code with a message stating that there are no pokémons to retrieve.
        if (arrayToUpload.deletedCount === 0) {
            res.status(200).json({
                status: true,
                message: "No Pokémons on database"
            })
        }
        res.status(200).json({
            success: true,
            message: `Deleted ${arrayToUpload.deletedCount} all Pokémons Successfully`
        });
        //Finally catch any errors and display the code and message.
    } catch (error) {
        res.status(404).json({
            success: false,
            message: `Failed to Delete Gym Leaders ${error.message}`
        })
    }
};
//Filter Pokémons by specific criteria:
const filter = async (req, res) => {
    try {
        let queryString = JSON.stringify(req.query)
        //console.log(`${req.method} works and the query is ${queryString} `)
        queryString = queryString.replace(
            //we use a regex to format the query in order for mongo to "understand" it
            /\b(gt|gte|lt|lte)\b/g,
            (match) => `$${match}`
        );
        //let jsonParse = JSON.parse(queryString)
        //console.log(jsonParse)
        const pokemons = await Pokedex.find(JSON.parse(queryString))
        res.status(200).json({
            message: `${pokemons.count} pokemons fetched`,
            status: "success",
            message: "pokemons fetched",
            data: pokemons
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `${req.method} failed, consult ${error}`
        })
    }
};
//Select items from query:
const select = async (req, res) => {
    try {
        let queryString = JSON.stringify(req.query)
        //Handle the error if there is no user input
        if (!queryString) {
            res.status(400).json({
                success: false,
                message: `${req.method} failed, consult ${error}`
            })
        } else {
            //console.log(`${req.method} works and the query is ${queryString} `)
            queryString = queryString.replace(
                /\b(gt|gte|lt|lte)\b/g,
                (match) => `$${match}`
            );
            //console.log("Running Select")
            let jsonParse = JSON.parse(queryString);
            //console.log(jsonParse)
            let query = Pokedex.find(JSON.parse(queryString));
            //if statement to run select
            if (req.query.select) {
                const fields = req.query.select.split(',').join(' ')
                query = Pokedex.find({}).select(fields);
            }
            //if statement to run sort
            if (req.query.sort) {
                //console.log(`Sort working`)
                const sortBy = req.query.sort.split(',').join(' ')
                query = Pokedex.find({}).sort(sortBy);
            }
            //if statement to run pagination
            if (req.query.page) {
                query = Pokedex.find({})
                const page = parseInt(req.query.page) || 1;
                const limit = parseInt(req.query.limit) || 2;
                const skip = (page - 1) * limit;
                query.skip(skip).limit(limit);
            }
            const pokemons = await query;
            //console.log(pokemons)

            res.status(200).json({
                message: `${pokemons.count} pokemons fetched`,
                status: "success",
                message: "pokemons fetched",
                data: pokemons
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `${req.method} failed, consult ${error}`
        })
    }

};

const sorting = async (req, res) => {
    try {
        let queryString = JSON.stringify(req.query)
        //Handle the error if there is no user input
        if (!queryString) {
            res.status(400).json({
                success: false,
                message: `${req.method} failed, consult ${error}`
            })
        } else {
            //console.log(`${req.method} works and the query is ${queryString} `)
            queryString = queryString.replace(
                /\b(gt|gte|lt|lte)\b/g,
                (match) => `$${match}`
            );
            //console.log("Running Select")
            let jsonParse = JSON.parse(queryString);
            //console.log(jsonParse)
            let query = Pokedex.find(JSON.parse(queryString));
            //if statement to run select
            if (req.query.select) {
                const fields = req.query.select.split(',').join(' ')
                query = Pokedex.find({}).select(fields);
            }
            //if statement to run sort
            if (req.query.sort) {
                //console.log(`Sort working`)
                const sortBy = req.query.sort.split(',').join(' ')
                query = Pokedex.find({}).sort(sortBy);
            }
            //if statement to run pagination
            if (req.query.page) {
                query = Pokedex.find({})
                const page = parseInt(req.query.page) || 1;
                const limit = parseInt(req.query.limit) || 2;
                const skip = (page - 1) * limit;
                query.skip(skip).limit(limit);
            }
            const pokemons = await query;
            //console.log(pokemons)

            res.status(200).json({
                message: `${pokemons.count} pokemons fetched`,
                status: "success",
                message: "pokemons fetched",
                data: pokemons
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `${req.method} failed, consult ${error}`
        })
    }

};

const posSort = async (req, res) => {
    try {
        let query = Pokedex.find({});

        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ');
            query = query.sort(sortBy);
        }

        const pokemons = await query.exec();

        res.status(200).json({
            message: `${pokemons.length} pokemons fetched`,
            status: "success",
            data: pokemons
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `${req.method} failed, consult ${error.message}`
        });
    }
};

module.exports = {
    getAllPkmn,
    getPkmnbyID,
    getPkmnbyName,
    delPkmn,
    createPkmn,
    editPkmn,
    uploadAll,
    getPkmnByWk,
    delAll,
    filter,
    select,
    sorting,
    posSort
};