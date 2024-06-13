const GymLeaders = require('../models/GymLeaders');
const capFirst = require("../misc/modules/capitalizeFirstLetter");
//Get All Gym LEaders
const getAllGL = async (req, res) => {
    try {
        const gymLeaders = await GymLeaders.find({});
        //Find Returns an empty array if no data is found.
        if (gymLeaders.length === 0) {
            res
                .status(400)
                .json({
                    success: false,
                    send: `Failed Failed retrieving Gym Leaders`
                })
        } else {
            res
                .status(200)
                .json({
                    success: true,
                    message: `${req.method} - All Gym Leaders Listed`,
                    gymLeaders
                });
        }
    } catch (error) {
        res
            .status(500)
            .json({
                success: false,
                message: `An error has Occurred >>>${error}`
            })
    }

};
//Get Gym Leader by ID
const getGLbyID = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        if (!id) {
            res
                .status(400)
                .json({
                    success: false,
                    send: `${req.method}, no ID Provided`
                })
        }
        const findById = await GymLeaders.findById(id)
        if (!findById) {
            res
                .status(400)
                .json({
                    success: false,
                    send: `${req.method}, Gym leader with ID ${id} not found`
                });
        }
        res
            .status(200)
            .json({
                success: true,
                message: `${req.method} - Specific Gym Leader Queried`,
                findById
            });
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .json({
                success: false,
                message: `${req.method}, failed ${error.message}`
            });
    };
};
//Get Gym Leader By Name
const getGLbyName = async (req, res) => {
    try {
        const { name } = req.params;

        if (!name) {
            return res
            .status(400)
            .json({
                success: false,
                message: `${req.method}, Gym leader with no name provided`
            });
        }

        const capName = capFirst(name);
        const selectedByName = await GymLeaders.find({ name: capName });

        if (!selectedByName || selectedByName.length === 0) {
            return res
            .status(404)
            .json({
                success: false,
                message: `${req.method}, Gym Leader with the name ${capName} not found`
            });
        }

        res.status(200).json({
            success: true,
            message: `${req.method} - Specific Gym Leader Queried`,
            gymLeader: selectedByName
        });

    } catch (error) {
        console.error(error);
        res
        .status(500)
        .json({
            success: false,
            message: `${req.method}, failed ${error.message}`
        });
    }
};
//Delete Gym Leader
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
                    send: `${req.method}, no ID Provided`
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
                success: false,
                message: `${req.method},failed ${error.message}`
            })
    }
};
//Create Gym Leader
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
        // console.log(`Data >>> ${newLeader}`)
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
            .status(500)
            .json({
                success: false,
                message: `${req.method}, failed ${error.message}`
            })
    }
};
//Can also use exports instead of const and no need to export.module
const editGL = async (req, res) => {
    try {
        const {
            id
        } = req.params;

        if (!id) {
            res
                .status(400)
                .json({
                    success: false,
                    send: `${req.method}, no ID Provided`
                })
        };
        const editedLeader = await GymLeaders.findByIdAndUpdate(id, req.body, {
            new: true
        })
        if (!editedLeader) {
            res
                .status(400)
                .json({
                    success: false,
                    send: `Gym Leader with ID ${id}, not found`
                })
        }
        res
            .status(200)
            .json({
                success: true,
                message: `${req.method} - Gym Leader with the id of ${id} updated`,
                editedLeader
            });
    } catch (error) {
        res
            .status(400)
            .json({
                success: false,
                message: `${req.method}, failed ${error.message}`
            })
    };
};
module.exports = {
    getAllGL,
    getGLbyID,
    getGLbyName,
    delGL,
    createGL,
    editGL
};