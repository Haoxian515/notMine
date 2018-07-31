/* global $ */

var postUrl = "/user/addToFavorites"

$(document).ready(function(){

	$( "#addToFavorite" ).click(function() {
	  // console.log( "Favorite recipe" );
	  // console.log($("#columnOne").text())
	});


});

function myFunction(recipeID){
	// console.log( "Favorite recipe" );
	console.log(recipeID)
	console.log("recipe favorited")
	$.post(postUrl, {recipeID: recipeID})
	.then(function(){
		// console.log("jquery post")
	})
	.catch(function(err){
		console.log(err)
	})
}

