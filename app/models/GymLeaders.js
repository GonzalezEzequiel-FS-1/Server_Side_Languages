const mongoose = require("mongoose");

const gymLeadersSchema = new mongoose.Schema({
    //Gym Leader Name
    name: {
        type: String,
        trim:true,
        required: true,
        unique: true
    },
    //Gym Location (Kantho)
    gym: {
        type: String,
        trim:true,
        required: true
    },
    //Badge Prize
    badge: {
        type: String,
        trim:true,
        required: true
    },
    //Pokemon load out
    pokemon: [{
        name: {
            type: String,
            required: true,
            trim:true,
        },
        level: {
            type: Number,
            min:[1, "Level must be at least 1"],
            max:[99, "Level cannot go above 99"],
            required: true
        }
    }],
    //Technical Machine provided and prize in money.
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
})
//In case that a string with specific character should be used, like in the case of an email credit card, passwords etc a Regular expression can be used.
module.exports = mongoose.model('GymLeader', gymLeadersSchema);