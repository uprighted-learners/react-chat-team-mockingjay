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

router.get("/displayAllRooms", validateSession, async (req, res) => {
    try {
        const rooms = await Room.find();

        res.json({message: "diplaying all rooms", rooms: rooms});
    } catch (error) {
        res.status(500).json({ message: error.message, });
    }
});

router.patch("/updateRoom/:id", validateSession, async (req, res) => {
    try {
        const id = req.params.id;
        const conditions = { _id: id, ownerId: req.user._id };
        const data = req.body;
        const options = { new: true };

        const room = await Room.findOneAndUpdate(conditions, data, options);

        if (!room) {
            throw new Error("Room was not found");
        }

        res.json({ message: "Room Updated", room: room, })

    } catch (error) {
        res.status(500).json({ message: error.message, });
    }
})

router.delete("/deleteRoom/:id", validateSession, async (req, res) => {
    try {
        const id = req.params.id;

        const conditions = {
            _id: id,
            ownerId: req.user._id,
        };

        const room = await Room.deleteOne(conditions);

        res.json({
            message:
                room.deletedCount === 1
                ? "Room was successfully deleted"
                : "FAILURE room not deleted"
        });
    } catch (error) {
        res.status(500).json({ message: error.message, });
    }
})

module.exports = router;