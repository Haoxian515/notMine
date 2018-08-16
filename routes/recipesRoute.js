var express 		= require("express");
var router 			= express.Router()
var Recipe 			= require("../models/recipesSchema"),
	recipeHelpers 	= require("../helpers/recipeHelpers"),
	userHelpers		= require("../helpers/userHelpers"),
	apiHelpers		= require("../helpers/apiHelpers"),
	middleware		= require("../middleware/middleware")





router.get("/recipes/:category", recipeHelpers.displayRecipes)
router.get("/recipes/:category/:id", recipeHelpers.recipeHowto)
//recipes
//recipe related

// router.get("/user/submit",middleware.isLoggedIn, userHelpers.submitRecipeForm)
// router.get("/user/favorites",middleware.isLoggedIn, userHelpers.favorites)
// router.post("/user/submit", middleware.isLoggedIn,  userHelpers.submitRecipe)

// router.get("/user/upload", userHelpers.uploadPage)
// router.post("/user/upload", userHelpers.uploadFile)

router.get("/user/submit", userHelpers.submitRecipeForm)
router.get("/user/favorites", userHelpers.favorites)
router.post("/user/submit",  userHelpers.submitRecipe)
router.get("/user/upload", middleware.isAdmin, userHelpers.uploadPage)
router.post("/user/upload", userHelpers.uploadFile)
//temp without middleware



router.post("/user/addToFavorites", userHelpers.postToFavorites)
// router.get("/recipes/user/favorites", userHelpers.favorites)

//user related




router.get("/api/recipes", apiHelpers.getAllRecipes)
// router.get("/api/:category", apiHelpers.displayAPI)
//api related



module.exports = router;