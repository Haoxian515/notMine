var express 		= require("express");
var router 			= express.Router()
var Recipe 	= require("../../models/recipesSchema")
var helpers = require("../../helpers/drinksRecipes")

router.get("/", helpers.getDrinkRecipes )

module.exports = router;

