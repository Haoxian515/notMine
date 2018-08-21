var Recipe 	= require("../models/recipesSchema"),
	User 	= require("../models/userSchema")	


exports.getAllRecipes = function(req, res){

	console.log("body: " + req.body)
	console.log("query: " + req.query.searchbar)
	console.log("params: " + req.params)

	// Recipe.find({}, function(err, foundRecipes){
	// 	if(err){
	// 		console.log(err)
	// 		res.redirect("/")
	// 	}else{
	// 		console.log(foundRecipes)
	// 		res.send(foundRecipes)
	// 	}
	// })
}


module.exports = exports;