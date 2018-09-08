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

exports.approve = function(req, res){
	Recipe.find({approved: false}, "title category _id", function(err, foundRecipes){
		if(err){
			console.log(err)
		}else{
			// console.log(foundRecipes)
			res.render("approveList", {currentUser: req.user, waitingRecipes: foundRecipes})
		}
	})

}

exports.approvePost = function(req, res, next){
	console.log("recipeHelpers.js approvePost")
	console.log(req.body.recipeId)

	Recipe.findOne({_id:req.body.recipeId}, function(err, recipe){
		if(err){
			console.log(err)
		}else{
			console.log(recipe)
			recipe.approved = true;
			recipe.save();
		}
	})
	console.log("recipe APPROVED!")


// Model.findOne({ name: 'bourne' }, function (err, doc){
//   doc.name = 'jason bourne';
//   doc.visits.$inc();
//   doc.save();
// });
}


exports.rejectPost = function(req, res, next){
	console.log("recipeHelpers.js rejectPost")
	console.log("recipe REJECTED")
	console.log(req.body.recipeId)
	Recipe.findByIdAndRemove( req.body.recipeId, function (err, foundRecipe) {
		if (err) {
			// console.log(err)
		}else{
			console.log(foundRecipe.title + " removed !")
		}
	});
}



exports.recipePreview = function(req, res){
	console.log(req.params.recipeId)
	// res.render("recipePreview")
	Recipe.findById(req.params.recipeId, "title category image_link", function(err, foundRecipe){
		if(err){
			console.log(err)
		}else{
			res.render("recipePreview", {currentUser: req.user, foundRecipe: foundRecipe})
		}
	})

}


module.exports = exports;