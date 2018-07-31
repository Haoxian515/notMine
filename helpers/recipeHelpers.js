var Recipe 	= require("../models/recipesSchema"),
	User 	= require("../models/userSchema")	

exports.displayRecipes = function(req, res){

// console.log(req.params.category)
var category = req.params.category
	Recipe.find({'category': category}, function(err, foundRecipes){
		if(err){
			console.log(err)
			res.redirect("/")
		}else{
			// console.log(foundRecipe)
			res.render("recipes", {foundRecipes:foundRecipes, currentUser: req.user })
		}
	})
}


exports.recipeHowto = function(req, res){
	// console.log(req.params.id)
	//find recipe instructions with id
	res.render("recipeHowto", { recipeId: req.params.id})
}



exports.displayAPI = function(req, res){

console.log(req.params.category)
var category = req.params.category
	Recipe.find({'category': category},{'_id': false}, function(err, foundRecipes){
		if(err){
			console.log(err)
			res.redirect("/")
		}else{
			// console.log(foundRecipe)
			res.json(foundRecipes)
		}
	})
}


module.exports = exports;