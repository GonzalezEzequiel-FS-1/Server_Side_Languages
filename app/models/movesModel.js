const mongoose = require("mongoose");
const Pokedex = require("./pokedexModel");


const movesSchema = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
        trim: true
    },
    type:{
        type: String,
        enum: [
            'Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice',
            'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic',
            'Bug', 'Rock', 'Ghost', 'Dragon', 'Steel', 'Fairy', 'Dark'
        ],
    },
    category:{
        type: String,
        enum:[
            "physical", "special", "status"
        ]
    },
    power:{
        type:Number,
        trim:true,
    },
    accuracy:{
        type: Number,
        min: [0, "Minimum accuracy is 0"],
        max: [1, "Maximum accuracy is 1"],
        required: true
    },
    pp:{
        type:Number,
        trim:true,
    },
    effect:[{
        stat:{
            type:String,
            enum:[ "defense", "speed", "special", "attack", "special attack", "special defense", "accuracy", "evasiveness"
            ],
            trim:true
        },
        stages:{
            type:Number,
            min:[-2, "Minimum Number is -2"],
            max:[2, "Maximum number is 2"]
        }
    }]
});

module.exports = mongoose.model('Moves', movesSchema);
