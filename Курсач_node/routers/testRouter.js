const express = require("express");
const bodyParser = require("body-parser");

const testController = require("../controllers/testController.js");
const testRouter = express.Router();

const urlencodedParser = bodyParser.urlencoded({extended: false});


testRouter.get("/", testController.getTests);
testRouter.post("/", testController.getTests);
testRouter.post("/getResults", testController.getResultOfTest);


module.exports = testRouter;