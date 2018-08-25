var Recipe 	= require("../models/recipesSchema"),
	User 	= require("../models/userSchema")	


exports.getAllRecipes = function(req, res){

	// console.log("body: " + req.body)
	console.log("query: " + req.query.searchbar)
	var queryString = req.query.searchbar
	// console.log("params: " + req.params)

	Recipe.find({"title": { "$regex": queryString, "$options": "i" } }, function(err, foundRecipes){
		if(err){
			console.log(err)
			res.redirect("/")
		}else{
			console.log(foundRecipes)
			res.render("recipes", {foundRecipes: foundRecipes})
		}
	})
}


module.exports = exports;