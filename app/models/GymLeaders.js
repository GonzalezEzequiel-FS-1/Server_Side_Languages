const mongoose = require("mongoose");

const gymLeadersSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    gym:{
        type:String,
        required: true
    },
    badge: {
        type:String,
        required: true
    },
    pokemon: [
        {
            name:{
                type:String,
                required:true,
                unique:true
            },
            level:{
                type:Number,
                required:true
            }
        }
    ],

    reward:[
        {
            tm:{
                type:String,
                required:true
            },
            money:{
                type:Number,
                required:true
            }
        }
    ],
    description:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('GymLeader', gymLeadersSchema);