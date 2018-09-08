var express 		= require("express");
var router 			= express.Router()
var Recipe 			= require("../models/recipesSchema"),
	recipeHelpers 	= require("../helpers/recipeHelpers"),
	userHelpers		= require("../helpers/userHelpers"),
	apiHelpers		= require("../helpers/apiHelpers"),
	middleware		= require("../middleware/middleware")




router.get("/recipes/approveList",middleware.isAdmin, recipeHelpers.approve)
router.get("/recipes/recipePreview/:recipeId",middleware.isAdmin, recipeHelpers.recipePreview)

//test temp
router.post("/recipes/adminApprove", recipeHelpers.approvePost)
router.post("/recipes/adminReject", recipeHelpers.rejectPost)

// router.get("/recipes/approveList", recipeHelpers.approve)
// router.get("/recipes/recipePreview/:recipeId", recipeHelpers.recipePreview)

router.get("/recipes/:category", recipeHelpers.displayRecipes)
router.get("/recipes/:category/:id", recipeHelpers.recipeHowto)


//recipes
//recipe related

//MAIN WITH USER CHECKS
// router.get("/user/submit",middleware.isLoggedIn, userHelpers.submitRecipeForm)
// router.get("/user/favorites",middleware.isLoggedIn, userHelpers.favorites)
// router.post("/user/submit", middleware.isLoggedIn,  userHelpers.submitRecipe)

// router.get("/user/upload", userHelpers.uploadPage)
// router.post("/user/upload", userHelpers.uploadFile)

//TEMP WITHOUT CHECKS
router.get("/user/submit", userHelpers.submitRecipeForm)
router.get("/user/favorites", userHelpers.favorites)


router.post("/user/submit",  userHelpers.submitRecipe)
router.post("/user/upload", userHelpers.uploadFile)
//temp without middleware



router.post("/user/addToFavorites", userHelpers.postToFavorites)
// router.get("/recipes/user/favorites", userHelpers.favorites)

//ADMIN STUFF
router.get("/user/upload", middleware.isAdmin, userHelpers.uploadPage)

//user related




router.get("/api/recipes", apiHelpers.getAllRecipes)
// router.get("/api/:category", apiHelpers.displayAPI)
//api related



module.exports = router;