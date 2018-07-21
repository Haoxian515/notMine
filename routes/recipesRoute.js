var express 		= require("express");
var router 			= express.Router()
var Recipe 	= require("../models/recipesSchema"),
	helpers = require("../helpers/drinksRecipes")

router.get("/recipes/drinks", helpers.displayDrinkRecipes)

router.get("/recipes/food", helpers.displayDrinkRecipes)

router.get("/recipes/dessert", helpers.displayDrinkRecipes)


module.exports = router;