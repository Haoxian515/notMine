var User 	= require("../models/userSchema"),
	Recipe 	= require("../models/recipesSchema")

var mongoose = require("mongoose")
mongoose.Promise = global.Promise;


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
function appendObject(){

}

exports.favorites = function(req, res){
	console.log("favorites page")

	//test id
	// var testid = "5b5fa862a1cc0371697eb56b"

	// var testRecipeArray = ["5b5f9fd610e52171651512ee",
	// "5b5f9fd610e52171651512ee",
	// "5b5f9fd610e52171651512ee",
	// "5b5f9fd610e52171651512ee",
	// "5b5f9fd610e52171651512ee",
	// "5b5f9fd610e52171651512ee",
	// "5b5f9fd610e52171651512ef",
	// "5b5f9fd610e52171651512f6",
	// "5b5f9fd610e52171651512ee",
	// "5b5f9fd610e52171651512ee"]


	// var favoritesIds = []
	// var favoritedRecipes = []
	// test2

	// 	User.findById(testid, function(err, foundUser){
	// 	if(err){
	// 		console.log(err)
	// 	}else{
	// 		// res.send(foundUser.favorites)
	// 		favoritesIds = foundUser.favorites
	// 	}
	// })
	User.findById(req.user)
	.exec()
	.then( (foundUser) => {
		// console.log(foundUser.favorites)	
		Recipe.find({
			'_id' : {
				$in: foundUser.favorites
			}
		}, function(err, recipes){
			if(err){
				console.log(err)
			}else{
				res.render("recipes", {foundRecipes: recipes, currentUser: req.user})
			}
		})	
	})
	.catch( (err) => function(){
		console.log(err)
	})
	// Recipe.find(
	// 	{
	//     '_id': { $in: 
	//     	testRecipeArray
	//     }
	// }, function(err, docs){
	//      console.log(docs);
	//      // favoritedRecipes = docs
	//      res.render("recipes", {foundRecipes: docs})
	// 	});
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
	Recipe.create(newRecipe, function(err, recipe){
		if(err){
			console.log(err)
		}else{
			recipe.save()
			res.redirect("/recipes/drinks")
		}

	})

}




module.exports = exports;












