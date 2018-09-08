
$(document).ready(function(){

	console.log("Hello from scripts.js")
});


function appendForm(formID){

	console.log("appending form!")
	console.log(formID)
	if(formID === "ingredients"){
		$('#ingredientsList').append('<input type="text" name="ingredients" placeholder="Ingredients" />');
	}else{
		$('#instructionsList').append('<input type="text" name="instructions" placeholder="Instructions" />');
	}
}


function adminApprove(recipeId){
	var postUrl = "/recipes/adminApprove"

	$('li').on('click', function() {
	    $(this).remove();
	});
	
	$.post(postUrl, {recipeId: recipeId})
	.then(function(){
	})
	.catch(function(err){
		console.log(err)
	})

}

function adminReject(recipeId){
	console.log("onclickScrips.js " + recipeId)
	var deleteUrl = "/recipes/adminReject"
	$('li').on('click', function() {
	    $(this).remove();
	});

	$.post(deleteUrl, {recipeId: recipeId})
	.then(function(){
	})
	.catch(function(err){
		console.log(err)
	})



}

// function search(){
// 	console.log("search function")
// 	$("#searchbar").addEventListener("click", function(){
// 		console.log("search bar click?")
// 	})
// }