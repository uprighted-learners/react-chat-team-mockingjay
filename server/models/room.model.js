const mongoose = require("mongoose");

// * Room schema references the User that created the room in the ownerId

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