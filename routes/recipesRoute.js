var express 		= require("express");
var router 			= express.Router()
var Recipe 	= require("../models/recipesSchema"),
	helpers = require("../helpers/displayRecipes")


router.get("/recipes/:category", helpers.displayRecipes)
router.post("/recipes", helpers.postToFavorites)
router.get("/recipes/user/favorites", helpers.favorites)
//user related

router.get("/recipes/:category/:id", helpers.recipeHowto)
//recipes



router.get("/api/:category", helpers.displayAPI)
//api related



module.exports = router;