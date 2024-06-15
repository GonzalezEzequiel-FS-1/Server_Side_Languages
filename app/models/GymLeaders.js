const mongoose = require("mongoose");
const Pokedex = require("./pokedexModel");

const gymLeadersSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    gym: {
        type: String,
        trim: true,
        required: true
    },
    badge: {
        type: String,
        trim: true,
        required: true
    },
    pokemon: [{
        name: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Pokedex'
        },
        level: {
            type: Number,
            min: [1, "Level must be at least 1"],
            max: [99, "Level cannot go above 99"],
            required: true
        }
    }],
    reward: [{
        tm: {
            type: String,
            required: true
        },
        money: {
            type: Number,
            required: true
        }
    }],
    description: {
        type: String,
        required: true
    }
});




module.exports = mongoose.model('GymLeader', gymLeadersSchema);
