var User 	= require("../models/userSchema"),
	Recipe 	= require("../models/recipesSchema")

exports.postToFavorites = function(req, res, next){
	console.log("post to favorites displa recipesroute")
	// console.log(req.user._id)
	console.log(req.body.recipeID)
	var recipeid = req.body.recipeID


	if(typeof req.user.id == "undefined"){
		res.redirect("/")
	}

	User.findById(req.user._id, function(err, foundUser){
		if(err){
			console.log(err)
		}else{
			foundUser.favorites.push(recipeid)
			console.log(foundUser)
			foundUser.save()
		}

	})
	res.end()
}

//favorites ejs
exports.favorites = function(req, res){
	console.log("favorites page")
	// res.render("favorites")
	if(typeof req.user == "undefined"){
		res.redirect("/")
	}
	User.findById(req.user.id, function(err, foundUser){
		if(err){
			console.log(err)
		}else{
			res.send(foundUser.favorites)
		}
	})
}


exports.submitRecipeForm = function(req, res){
	res.render("submitRecipe", {currentUser: req.user})
}

exports.submitRecipe = function(req, res){

	// console.log(req.body)
	var newRecipe = 
		{ 
		 title: req.body.title,
		 description: req.body.description,
		 category: req.body.category,
		 ingredients: req.body.ingredients,
		 instructions: req.body.instructions,
		 image_link: req.body.image
		}
		console.log(newRecipe)
	// Recipe.create(newRecipe, function(err, recipe){
	// 	if(err){
	// 		console.log(err)
	// 	}else{
	// 		recipe.save()
	// 		res.redirect("/recipes/drinks")
	// 	}

	// })

}




module.exports = exports;












