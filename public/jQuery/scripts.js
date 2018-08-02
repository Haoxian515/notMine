$(document).ready(function(){

	console.log("Hello from scripts.js")


});

function appendForm(){

	console.log("appending form!")
	$('#ingredientsList').append('<input type="text" name="ingredients" value="Ingredients" />');


}