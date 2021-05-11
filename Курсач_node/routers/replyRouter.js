const express = require("express");
const bodyParser = require("body-parser");

const replyController = require("../controllers/replyController.js");
const replyRouter = express.Router();

const urlencodedParser = bodyParser.urlencoded({extended: false});


replyRouter.post("/", replyController.getReplies);


module.exports = replyRouter;