const express = require("express");
const bodyParser = require("body-parser");

const userController = require("../controllers/userController.js");
const userRouter = express.Router();

const urlencodedParser = bodyParser.urlencoded({extended: false});


userRouter.post("/register", userController.registerUser);

module.exports = userRouter;