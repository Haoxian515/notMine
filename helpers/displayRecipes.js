var Recipe 	= require("../models/recipesSchema"),
	User 	= require("../models/userSchema")	

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
			res.render("recipes", {foundRecipes:foundRecipes, currentUser: req.user })
		}
	})
}


exports.recipeHowto = function(req, res){
	// console.log(req.params.id)
	//find recipe instructions with id
	res.render("recipeHowto", { recipeId: req.params.id})
}


// Cat.findById(req.params.id, function(err, cat){
// 	if(err){
// 		res.redirect("/")
// 	}else{
// 		Comment.create(req.body.comment, function(err, comment){
// 			if(err){
// 				console.log(err)
// 			}else{
// 				comment.author.id = req.user._id;
// 				comment.author.userName = req.user.username;
// 				// console.log(comment)
// 				// console.log(comment)
// 				comment.save()
				
// 				cat.comments.push(comment.id)
// 				cat.save()

// 				// console.log(cat)
// 				res.redirect("/cats/" + cat._id)
// 			}
// 		});
// 	}
// });
exports.postToFavorites = function(req, res, next){
	console.log("post to favorites displa recipesroute")
	// console.log(req.user._id)
	console.log(req.body.recipeID)
	var recipeid = req.body.recipeID
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

//favorites
exports.favorites = function(req, res){
	console.log("favorites page")
	// res.render("favorites")
	User.findById(req.user._id, function(err, foundUser){
		if(err){
			console.log(err)
		}else{
			res.send(foundUser.favorites)
		}
	})
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