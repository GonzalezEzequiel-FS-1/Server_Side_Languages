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
        //for the types I used an Enum with all of the 18 available types for the first gen.
        enum: [
            'Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice',
            'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic',
            'Bug', 'Rock', 'Ghost', 'Dragon', 'Steel', 'Fairy', 'Dark'
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
        //For some reason, this one is not working, it's breaking my brain...
        //It never worked.
        //Never Mind, the problem was on the destructuring at the controller, I didn't add weaknesses, so it skipped it!
        //Working now!
        enum: [
            'Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice',
            'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic',
            'Bug', 'Rock', 'Ghost', 'Dragon', 'Steel', 'Fairy', 'Dark'
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
//used the backup to link the leaders DB and the pokedex one without having to reset the IDs each time I deleted an entry in testing
//module.exports = mongoose.model('PokedexBackup', pokedexSchema);