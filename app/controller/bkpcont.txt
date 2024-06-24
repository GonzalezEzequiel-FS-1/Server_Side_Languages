const Pokedex = require("../models/pokedexModel");
const capFirst = require("../misc/modules/capitalizeFirstLetter");

const filter = async (req, res) => {
    console.log(`${req.method} endpoint contacted.`);
    
    let queryParams = { ...req.query };
    console.log(`QUERY BEFORE REGEX >>>>>>`, queryParams);

    // Update operators to MongoDB format
    for (const key in queryParams) {
        if (/\b(gt|lt|eq|gte|lte|ne|in|nin)\b/.test(key)) {
            const newKey = key.replace(
                /\b(gt|lt|eq|gte|lte|ne|in|nin)\b/g,
                (match) => `$${match}`
            );
            queryParams[newKey] = queryParams[key];
            delete queryParams[key];
        }
    }
    console.log(`QUERY AFTER REGEX >>>>>>`, queryParams);

    // Process weight parameter separately
    if (queryParams.weight) {
        const weightValue = parseFloat(queryParams.weight);
        if (!isNaN(weightValue)) {
            if (queryParams.weightOp) {
                const operator = `$${queryParams.weightOp}`;
                queryParams.weight = { [operator]: `${weightValue} kg` };
            } else {
                queryParams.weight = `${weightValue} kg`;
            }
        } else {
            delete queryParams.weight;
        }
    }

    console.log(`SEARCH PARAMETERS >>>>>>`, queryParams);

    try {
        let returnedData = await Pokedex.find(queryParams);
        console.log(`STARTING RESPONSE`);
        res.status(200).json({
            data: returnedData
        });
    } catch (error) {
        console.error(`Error in database query: ${error.message}`);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};

module.exports = filter;
////////////////////////////////////////


const Pokedex = require("../models/pokedexModel");
const capFirst = require("../misc/modules/capitalizeFirstLetter");

const filter = async (req, res) => {
    try {
        console.log(`Filter endpoint contacted`);
        let ogQuery = JSON.stringify(req.query);
        console.log(`Original Query: ${ogQuery}`);
        
        // Replace query operators with MongoDB syntax
        ogQuery = ogQuery.replace(
            /\b(gt|lt|eq|gte|lte|ne|in|nin)\b/g,
            (match) => `$${match}`
        );

        // Parse the updated query string into a JSON object
        let parsedData = JSON.parse(ogQuery);
        console.log(`Parsed Data:>>>>>>>`, parsedData);

        // Perform the database query
        let pokedexData = await Pokedex.find(parsedData);
        let newString = JSON.stringify(pokedexData, 2, null);
        //console.log(newString)

        // Log the final query being sent to MongoDB
        console.log(`Final Query Sent to MongoDB:>>>>>>>`, parsedData);

        res.status(200).json({
            success: true,
            data: pokedexData
        });
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

module.exports = filter;
