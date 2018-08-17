var Recipe 	= require("../models/recipesSchema"),
	User 	= require("../models/userSchema")	

exports.displayRecipes = function(req, res){

console.log(req.params.category)
var category = req.params.category
	Recipe.find({ 'category': category.toLowerCase() }, function(err, foundRecipes){
		if(err){
			console.log(err)
			res.redirect("/")
		}else{
			// console.log(foundRecipes)
			res.render("recipes", {foundRecipes:foundRecipes, currentUser: req.user })
		}
	})
}


exports.recipeHowto = function(req, res){
	// console.log(req.params.id)
	//find recipe instructions with id
	Recipe.findById(req.params.id, function(err, foundRecipe){
		if(err){
			console.log(err)
		}else{
			// console.log(foundRecipe)
			res.render("recipeHowto", {currentUser: req.user, recipe: foundRecipe})
		}
	})

	// res.render("recipeHowto", { recipeId: req.params.id})
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