const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Read that in order to increase readability its better to declare a const for mongoose.Schema, Kinda looks better.

const pokedexSchema = new Schema({
    num: {
        type: Number,
        unique: true,
        trim: true
    },
    name: {
        type: String,
        unique: true,
        trim: true
    },
    img: {
        type: String,
        validate: {
            //A simple validating function
            validator: function (v) {
                //Im using this regex to check if the url is valid, I might have missed something...
                return /^(http:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(v);
            },
            message: props => `${props.value} is not a valid URL`
        },
    },
    type: [{
        type: String,
        //for the types I included an Enum with all the available types for the first gen.
        enum: [
            'Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice',
            'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic',
            'Bug', 'Rock', 'Ghost', 'Dragon'
        ]
    }],
    height:{
        type: String,
        trim: true
    },
    weight:{
        type: String,
        trim: true
    },
    weaknesses: [{
        type: String,
        //Same priciple as the type
        enum: [
            'Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice',
            'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic',
            'Bug', 'Rock', 'Ghost', 'Dragon'
        ]
    }],
    prev_evolution:[{
        num:{
            type: String,
            trim:true
        },
        name:{
            type: String,
            trim:true
        }
    }],
    next_evolution:[{
        num:{
            type: String,
            trim:true
        },
        name:{
            type: String,
            trim:true
        }
    }]
});

module.exports = mongoose.model('Pokedex', pokedexSchema);