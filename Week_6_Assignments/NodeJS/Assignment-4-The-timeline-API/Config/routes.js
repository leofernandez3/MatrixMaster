const express = require("express");
const router = express.Router();

const postController = require("../Controllers/postController");
const commentController = require("../Controllers/commentController");

const apiController = require("../ControllersAPI/apiController");

router.get("/", postController.getPosts);

router.post("/add-post", postController.addPost);
router.post("/delete-post/:id", postController.deletePost);
router.post("/update-post/:id", postController.updatePost);

router.post("/add-comment/:postId", commentController.addComment);
router.post("/delete-comment/:id", commentController.deleteComment);

router.get("/api/get-posts", apiController.getAllPosts);
router.post("/api/create-post", apiController.postOnePost);
router.put("/api/edit-post/:id", apiController.updateOnePost);
router.delete("/api/delete-post/:id", apiController.deletePost);

router.get("/api/get-post-comments/:id", apiController.getAllCommentsPost);
router.post("/api/post-post-comment/:id", apiController.postOneComment);

module.exports = router;