const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    when: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    room: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    ownerId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    roomId: {
        type: mongoose.Types.ObjectId,
        ref: "Room",
    }
});


module.exports = mongoose.model("Message", MessageSchema);