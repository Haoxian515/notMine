var Recipe 	= require("../models/recipesSchema"),
	User 	= require("../models/userSchema")	


exports.getAllRecipes = function(req, res){
	Recipe.find({}, function(err, foundRecipes){
		if(err){
			console.log(err)
			res.redirect("/")
		}else{
			console.log(foundRecipes)
			res.send(foundRecipes)
		}
	})
}


module.exports = exports;