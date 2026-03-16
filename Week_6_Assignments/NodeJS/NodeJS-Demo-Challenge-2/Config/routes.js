const express = require("express");
const router = express.Router();

const authController = require("../Controllers/authController");
const {isLoggedIn} = require("../Middleware/authMiddleware");


router.get("/",authController.loginPage);

router.post("/register",authController.register);

router.post("/login",authController.login);

router.get("/welcome",isLoggedIn,authController.welcome);

router.get("/logout",authController.logout);


module.exports = router;