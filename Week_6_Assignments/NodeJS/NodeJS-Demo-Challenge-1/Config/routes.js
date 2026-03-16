const express = require("express");
const router = express.Router();

const articleController = require("../Controllers/articleController");


router.get("/",articleController.home);

router.get("/new/article",articleController.newArticlePage);
router.post("/new/article",articleController.createArticle);

router.get("/article/:id",articleController.viewArticle);

router.get("/edit/article/:id",articleController.editPage);
router.post("/edit/article/:id",articleController.updateArticle);

router.get("/delete/article/:id",articleController.deleteArticle);

module.exports = router;