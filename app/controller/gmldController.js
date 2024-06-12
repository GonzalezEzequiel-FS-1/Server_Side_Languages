const GymLeaders = require('../models/GymLeaders')
const capFirst = require("../misc/modules/capitalizeFirstLetter")
const getAllGL = async (req, res) => {
    const gymLeaders = await GymLeaders.find({});
    res
        .status(200)
        .json({
            success: true,
            message: `${req.method} - All Gym Leaders Listed`,
            gymLeaders
        });
};

const getGLbyID = (req, res) => {
    const {
        id
    } = req.params;
    res
        .status(200)
        .json({
            success: true,
            message: `${req.method} - Specific Gym Leader Queried`,
            id
        });
};

const getGLbyName = async (req, res) => {
    const {
        name
    } = req.params;
    const capName = capFirst(name);
    const selectedByName = await GymLeaders.find({
        name: capName
    })
    res
        .status(200)
        .json({
            success: true,
            message: `${req.method} - Specific Gym Leader Queried`,
            gymLeader: selectedByName
        });
};

const delGL = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        if (!id) {
            res
                .status(400)
                .json({
                    success: false,
                    send: `${req.method}, failed ${error}`
                })
        } else {
            const gymLeaderToDelete = await GymLeaders.findByIdAndDelete(id, {
                description: String
            })
            res
                .status(200)
                .json({
                    success: true,
                    message: `${req.method} - Gym Leader Deleted`,
                    gymLeaderToDelete
                });
        }
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .json({
                message: `${req.method}, failed ${error}`
            })
    }
};

const createGL = async (req, res) => {
    try {
        //Deconstruct the Gym Leader and accept the parameters from req.body
        const {
            name,
            gym,
            badge,
            pokemon,
            reward,
            description
        } = req.body;
        //Create the Gym Leader from the req.body
        const newLeader = await GymLeaders.create({
            name,
            gym,
            badge,
            pokemon,
            reward,
            description
        });
        //Log the New Gym Leader to the console
        console.log(`Data >>> ${newLeader}`)
        res
            .status(200)
            .json({
                success: true,
                message: `${req.method} - Created new Gym Leader`,
                //Present the new Leader on the response
                data: newLeader
            });
    } catch (error) {
        res
            .status(400)
            .json({
                success: false,
                message: `An error has occurred >>> ${error}`
            })
    }
};
//Can also use exports instead of const and no need to export.module
const editGL = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const editedLeader = await GymLeaders.findByIdAndUpdate(id, req.body, {
            new: true
        })
        if (!editedLeader) {
            res
                .status(400)
                .json({
                    success: false,
                    send: `${req.method}, failed ${error}`
                })
        } else {
            res
                .status(200)
                .json({
                    success: true,
                    message: `${req.method} - Gym Leader updated`,
                    editedLeader
                });
        }
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .json({
                message: `${req.method}, failed ${error}`
            })
    }



};

module.exports = {
    getAllGL,
    getGLbyID,
    getGLbyName,
    delGL,
    createGL,
    editGL
};