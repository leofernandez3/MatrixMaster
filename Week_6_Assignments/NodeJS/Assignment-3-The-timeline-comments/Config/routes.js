const express = require("express");
const router = express.Router();
const postController = require("../Controllers/postController");
const commentController = require("../Controllers/commentController");

router.get("/", postController.getPosts);

router.post("/add-post", postController.addPost);
router.post("/delete-post/:id", postController.deletePost);
router.post("/update-post/:id", postController.updatePost);

router.post("/add-comment/:postId", commentController.addComment);
router.post("/delete-comment/:id", commentController.deleteComment);

module.exports = router;