var Recipe = require("../models/recipesSchema");

// exports.getDrinkRecipes = function(req, res){

// 	Recipe.find({}, function(err, foundRecipe){
// 		if(err){
// 			console.log(err)
// 			res.redirect("/")
// 		}else{
// 			// console.log(foundRecipe)
// 			res.json({foundRecipe})
// 		}
// 	})

// }
// drinks json
exports.displayRecipes = function(req, res){

// console.log(req.params.category)
var category = req.params.category
	Recipe.find({'category': category}, function(err, foundRecipes){
		if(err){
			console.log(err)
			res.redirect("/")
		}else{
			// console.log(foundRecipe)
			res.render("recipes", {foundRecipes:foundRecipes })
		}
	})
}


exports.recipeHowto = function(req, res){
	res.render("recipeHowto")
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