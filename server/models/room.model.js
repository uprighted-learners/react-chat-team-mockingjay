const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    addedUsers: {
        type: Array,
    },
    ownerId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    }
});


module.exports = mongoose.model("Room", RoomSchema);