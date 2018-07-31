var express 			  = require("express");
var router 				  = express.Router()
var Recipe 				  = require("../models/recipesSchema"),
	recipeHelpers 		  = require("../helpers/recipeHelpers"),
	userHelpers			  = require("../helpers/userHelpers")





router.get("/recipes/:category", recipeHelpers.displayRecipes)
router.get("/recipes/:category/:id", recipeHelpers.recipeHowto)
//recipes
//recipe related

router.get("/user/submit", userHelpers.submitRecipe)
router.get("/user/favorites", userHelpers.favorites)
router.post("/user/addToFavorites", userHelpers.postToFavorites)
// router.get("/recipes/user/favorites", userHelpers.favorites)

//user related





router.get("/api/:category", recipeHelpers.displayAPI)
//api related



module.exports = router;