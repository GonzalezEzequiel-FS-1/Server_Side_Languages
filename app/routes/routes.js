const express = require("express");
const router = express.Router();

router.get("/search/:id", (req, res) => {
    id = req.params.id;
    res
        .status(200)
        .json({
            success: true,
            message: "Well, it's working",
            id: id
        });
});
router.post("/testing", async (req, res) => {
    try {
        const testmsg = req.body.testmsg;
        if (!testmsg) {
            console.error("No message to display");
            res.status(400).json({
                success: false,
                error: "No message provided"
            });
        } else {
            console.log(testmsg);
            res.status(200).json({
                success: true,
                message: "Received message",
                data: testmsg
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: "Internal server error"
        });
    }
});


module.exports = router;