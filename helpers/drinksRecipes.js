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

module.exports = exports;