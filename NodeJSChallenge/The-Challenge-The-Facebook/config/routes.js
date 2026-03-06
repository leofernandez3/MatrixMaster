const express = require("express");
const route = express.Router();

const feedController = require("../controllers/feedController");

route.get("/feed", feedController.homePage);

route.post("/add-post", feedController.addPost);

route.get("/feed/:id", feedController.seeMore);

route.get("/feed/edit/:id", feedController.editPost);

route.post("/feed/edit/:id", feedController.updatePost);

route.get("/feed/delete/:id", feedController.deletePost);

module.exports = route;