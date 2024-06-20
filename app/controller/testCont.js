const Pokedex = require("../models/pokedexModel");
const capFirst = require("../misc/modules/capitalizeFirstLetter");

const filter = async (req, res) => {
    let queryString = JSON.stringify(req.query)
    console.log(`${req.method} works and the query is ${queryString} `)
    queryString = queryString.replace(
        /\b(gt|gte|lt|lte)\b/g,
        (match) => `$${match}`
    );
    
    let jsonParse = JSON.parse(queryString)
    console.log(jsonParse)
    const pokemons = await Pokedex.find(JSON.parse(queryString))
    res.status(200).json({
        message:`${pokemons.count} pokemons fetched`,
        status:"success",
        message:"pokemons fetched",
        data:pokemons
    })
};

module.exports = filter;