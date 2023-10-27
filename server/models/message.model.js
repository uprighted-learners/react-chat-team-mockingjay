const mongoose = require("mongoose");

// * Message Schema is referencing User and Room IDs

const MessageSchema = new mongoose.Schema(
  {
    user: {
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
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
