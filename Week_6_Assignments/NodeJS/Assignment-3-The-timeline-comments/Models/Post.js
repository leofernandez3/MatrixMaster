const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    body: {
        type: String,
        required: [true, "Post body is required"],
        minlength: [25, "Post must be at least 25 characters"]
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false
    }
}, { timestamps: true });

postSchema.virtual("comments", {
    ref: "Comment",
    localField: "_id",
    foreignField: "postId"
});

postSchema.set("toObject", { virtuals: true });
postSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Post", postSchema);