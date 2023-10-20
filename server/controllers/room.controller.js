const router = require("express").Router();
const Room = require("../models/room.model");
const validateSession = require("../middleware/validate-session")

router.post("/createRoom", validateSession, async (req, res) => {
    try {
        const { name, description, addedUsers } = req.body;

        const room = new Room({
            name: name,
            description: description,
            addedUsers: addedUsers,
            ownerId: req.user._id,
        });

        const newRoom = await room.save();

        res.json({
            message: "created new room",
            room: newRoom,
            });

    } catch (error) {
        res.status(500).json({ message: error.message, });
    }
})

module.exports = router;