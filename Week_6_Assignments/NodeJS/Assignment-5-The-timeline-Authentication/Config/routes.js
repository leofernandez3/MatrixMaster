const express = require("express");
const router = express.Router();

const authController = require("../ControllersAuth/authController");
const { isLoggedIn } = require("../Middleware/authMiddleware");

const postController = require("../Controllers/postController");
const commentController = require("../Controllers/commentController");

const apiController = require("../ControllersAPI/apiController");

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/logout", authController.logout);


router.get("/", postController.getPosts);


router.post("/add-post", isLoggedIn, postController.addPost);
router.post("/delete-post/:id", isLoggedIn, postController.deletePost);
router.post("/update-post/:id", isLoggedIn, postController.updatePost);


router.post("/add-comment/:postId", isLoggedIn, commentController.addComment);
router.post("/delete-comment/:id", isLoggedIn, commentController.deleteComment);

router.get("/api/get-posts", apiController.getAllPosts);
router.post("/api/create-post", apiController.postOnePost);
router.put("/api/edit-post/:id", apiController.updateOnePost);
router.delete("/api/delete-post/:id", apiController.deletePost);

//router.get("/api/get-post-comments/:id-post", apiController.getAllCommentsPost);
router.get("/api/get-post-comments/:id", apiController.getAllCommentsPost);
router.post("/api/post-post-comment/:id-post", apiController.postOneComment);

module.exports = router;
