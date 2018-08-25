var express 		= require("express");
var router 			= express.Router()
var Recipe 	= require("../../models/recipesSchema")
var helpers = require("../../helpers/apiHelpers")

//intesteing :search gives params and body, but query is seperate
router.get("/api/search", helpers.getAllRecipes )

module.exports = router;

