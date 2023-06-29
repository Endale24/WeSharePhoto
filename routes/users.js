const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.post("/signup", usersController.signup);
router.post("/login", usersController.login);

// Add more routes as needed

module.exports = router;
