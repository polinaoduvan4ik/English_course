const express = require("express");
const bodyParser = require("body-parser");

const levelController = require("../controllers/levelController.js");
const levelRouter = express.Router();

const urlencodedParser = bodyParser.urlencoded({extended: false});


levelRouter.get("/", levelController.getLevels);


module.exports = levelRouter;