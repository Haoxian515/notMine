/* global $ */

var postUrl = "/user/addToFavorites"

$(document).ready(function(){

	// $( "#addToFavorite" ).click(function() {
	//   console.log( "Favorite recipFavorite recipFavorite recipFavorite recipe" );
	//   // console.log($("#columnOne").text())
	// });


});

function favoriteRecipe(recipeID){
	// console.log( "Favorite recipe" );
	console.log("recipe favorited")
	$.post(postUrl, {recipeID: recipeID})
	.then(function(){
		// console.log("jquery post")
	})
	.catch(function(err){
		console.log(err)
	})
}

