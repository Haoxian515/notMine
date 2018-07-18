var express 		= require("express");
var router 			= express.Router()
var Recipe 	= require("../models/recipesSchema")

router.post("/api/recipe", function(req, res){

	// var obj = {name:"hi"}
	// Recipe.create(obj, function(err, newRecipe){
	// 	if(err){
	// 		console.log(err)
	// 		res.redirect("/")
	// 	}else{
	// 		// res.redirect("/tasks")
	// 		console.log(newRecipe)
	// 	}
	// })

})

module.exports = router;