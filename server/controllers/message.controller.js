const router = require("express").Router();
const Message = require("../models/message.model");
const validateSession = require("../middleware/validate-session");
const { validate } = require("../models/room.model");
const userIsAdmin = require("../middleware/user-isadmin");


// * Create a new message in a room
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

// * View all message in a room
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

// * Update a message only if user is an admin
router.patch("/updateMessage/:id", userIsAdmin, async function (req, res) {
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

// * Delete a message only if a user is an admin
router.delete("/deleteMessage/:id", userIsAdmin, userIsAdmin, async (req, res) => {
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


router.get("/view-all",  async (req, res) => {
    try {
      console.log("req.user", req.user);
      const messages = await Message.find();
  
      res.json({ message: "success from get", messages: messages });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  });





module.exports = router;

<<<<<<< HEAD


module.exports = router;


// const Message = require("../models/message.model");
module.exports = router;

=======
>>>>>>> ae0ca1532b22f5cc8719281c621ef77cc2c958be

