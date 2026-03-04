const express = require("express");
const router = express.Router();
const postController = require("../Controllers/postController");

router.get("/", postController.getPosts);

router.post("/add-post", postController.addPost);

router.post("/delete-post/:id", postController.deletePost);

router.post("/update-post/:id", postController.updatePost);

module.exports = router;