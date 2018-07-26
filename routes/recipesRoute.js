var express 		= require("express");
var router 			= express.Router()
var Recipe 	= require("../models/recipesSchema"),
	helpers = require("../helpers/displayRecipes")


router.get("/recipes/:category", helpers.displayRecipes)

router.get("/api/:category", helpers.displayAPI)
// router.get("/recipes/food", helpers.displayFoodRecipes)

// router.get("/recipes/dessert", helpers.displayDessertRecipes)


module.exports = router;