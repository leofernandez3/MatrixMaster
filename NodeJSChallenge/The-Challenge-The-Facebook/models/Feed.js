const mongoose = require("mongoose");

const feedSchema = new mongoose.Schema({

    postId: Number,

    name: {
        type: String,
        required: true,
        maxlength: 15
    },

    message: {
        type: String,
        required: true,
        maxlength: 40
    }

}, { timestamps: true });

module.exports = mongoose.model("FEED", feedSchema);