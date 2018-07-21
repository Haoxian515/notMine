var Recipe = require("../models/recipesSchema");

exports.getDrinkRecipes = function(req, res){

	Recipe.find({}, function(err, foundRecipe){
		if(err){
			console.log(err)
			res.redirect("/")
		}else{
			// console.log(foundRecipe)
			res.json({foundRecipe})
		}
	})

}
// drinks json

exports.displayDrinkRecipes = function(req, res){

	Recipe.find({},{'_id': false}, function(err, foundRecipes){
		if(err){
			console.log(err)
			res.redirect("/")
		}else{
			// console.log(foundRecipe)
			res.render("drinks", {foundRecipes:foundRecipes })
		}
	})

}

exports.displayDrinkRecipes = function(req, res){

	Recipe.find({},{'_id': false}, function(err, foundRecipes){
		if(err){
			console.log(err)
			res.redirect("/")
		}else{
			// console.log(foundRecipe)
			res.render("drinks", {foundRecipes:foundRecipes })
		}
	})

}

exports.displayDrinkRecipes = function(req, res){

	Recipe.find({},{'_id': false}, function(err, foundRecipes){
		if(err){
			console.log(err)
			res.redirect("/")
		}else{
			// console.log(foundRecipe)
			res.render("drinks", {foundRecipes:foundRecipes })
		}
	})

}

module.exports = exports;