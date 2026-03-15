const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    body: {
        type: String,
        required: [true, "Comment body is required"],
        minlength: [25, "Comment must be at least 25 characters"]
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: true 
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false
    }
}, { timestamps: true });

module.exports = mongoose.model("Comment", commentSchema);