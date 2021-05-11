const express = require("express");
const bodyParser = require("body-parser");

const questionController = require("../controllers/questionController.js");
const questionRouter = express.Router();

const urlencodedParser = bodyParser.urlencoded({extended: false});


questionRouter.post("/", questionController.getQuestions);


module.exports = questionRouter;