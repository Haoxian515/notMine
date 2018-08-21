$(document).ready(function(){

	console.log("Hello from scripts.js")
	
});


//searchbar manage search function
// var searchbar = document.getElementById("searchbar")
// searchbar.addEventListener("keydown", function(event){
// 	// console.log(searchbar.value)
// 	// console.log(event.key === "Enter")
// 	if(searchbar.value.length > 0 && event.key === "Enter"){
// 		console.log("search funtion!")

// 	}else{
// 		console.log("bad input or")
// 	}
// })

function appendForm(formID){

	console.log("appending form!")
	console.log(formID)
	if(formID === "ingredients"){
		$('#ingredientsList').append('<input type="text" name="ingredients" placeholder="Ingredients" />');
	}else{
		$('#instructionsList').append('<input type="text" name="instructions" placeholder="Instructions" />');
	}
}

// function search(){
// 	console.log("search function")
// 	$("#searchbar").addEventListener("click", function(){
// 		console.log("search bar click?")
// 	})
// }