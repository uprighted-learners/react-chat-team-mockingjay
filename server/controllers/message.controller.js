const router = require("express").Router();
const Message = require("../models/message.model");
const validateSession = require("../middleware/validate-session");
const { validate } = require("../models/room.model");

router.post("/createMessage", validateSession, async (req, res) => {
    try {
        const roomId = req.params.id;
        const { user, body } = req.body;
        const newMessage = new Message({
        user: user,
        body: body,
        ownerId: req.user._id,
        roomId: roomId,
        });

        await newMessage.save();
        res.json({
        message: "message created successfully",
        newMessage: newMessage,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/viewAllMessages",  async (req, res) => {
    try {
        const messages = await Message.find();
    
        res.json({ message: "success from get", messages: messages });
        } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});

router.patch("/updateMessage/:id", validateSession, async function (req, res) {
    try {
        const id = req.params.id;
        const conditions = { _id: id};

        const data = req.body;
        const options = { new: true };

        const messages = await Message.findOneAndUpdate(conditions, data, options);

        if (!messages) {
            throw new Error("Message was not found");
        }

        res.json({
            message: "success from update",
            messages: messages,
        });
        } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});

router.delete("/deleteMessage/:id", validateSession, async (req, res) => {
    try {
        const id = req.params.id;
        const messages = await Message.deleteOne({_id: id });
        
        console.log(messages);
        res.json({
            message:
            messages.deletedCount === 1
                ? "success message was deleted"
                : "failure message was not deleted",
        });
        } catch (error) {
        res.status(500).json({
            message: error.message,
        });
        }
});



module.exports = router;

// const Message = require("../models/message.model");
module.exports = router;


