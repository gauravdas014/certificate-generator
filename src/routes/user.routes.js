const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();

router.route("/exist").get();

module.exports = router;
