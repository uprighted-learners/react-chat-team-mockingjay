
const Message = require("../models/message.model");
const validateSession = require("../middleware/validate-session");

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

module.exports = router;
=======
// const Message = require("../models/message.model");
module.exports = router;


