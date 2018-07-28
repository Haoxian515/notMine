/* global $ */

$(document).ready(function(){

	$( "#addToFavorite" ).click(function() {
	  // console.log( "Favorite recipe" );
	  console.log($("#columnOne").text())
	});


});

function myFunction(recipeID){
	// console.log( "Favorite recipe" );
	console.log(recipeID)

	$.post("/recipes", {recipeID: recipeID})
	.then(function(){
		// console.log("jquery post")
	})
	.catch(function(err){
		console.log(err)
	})
}

