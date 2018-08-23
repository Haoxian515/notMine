$(document).ready(function(){

	console.log("Hello from scripts.js")
});

// function testing(){
	var userwarning		= document.getElementById("errmsg")
	var submitbutton	= document.getElementById("submitbtn")

	var password		= document.getElementById("pass")
	var pwwarning 		= document.getElementById("pwwarning")

	// console.log(password)
	submitbutton.disabled = true;
	username.addEventListener("keyup", function(event){

		if(username.value.length < 6){
			// console.log("less than 5")
			userwarning.textContent = "Username needs to be more than 5 characters long!"

		}
		if(username.value.length < 6 && password.value.length < 6){
			submitbutton.disabled = true

		}else if(username.value.length >= 6 && password.value.length >= 6){
			console.log(username.value)
			userwarning.textContent = ""
			submitbutton.disabled = false;
		}
	})

	// password.addEventListener("keyup", function(event){
	// 	if(password.value.length < 6 && username.value.length < 6){
	// 		submitbutton.disabled = true
	// 		pwwarning.textContent = "Password needs to be more than 5 characters long!"
	// 	}if(username.value.length < 6 && password.value.length < 6){
	// 		submitbutton.disabled = true
			
	// 	}else if(password.value.length >= 6 && username.value.length >= 6){
	// 		pwwarning.textContent = ""
	// 		submitbutton.disabled = false;
	// 	}
	// })

// 	})
// }


// var username = document.getElementById("username")
// var warning = document.getElementById("warningmsg")
// 	username.addEventListener("keyup", function(event){

// 		console.log(username.value)
// 		console.log(username.value.length)
// 		if(username.value.length < 6){
// 			// console.log("less than 5")
// 			warning.textContent = "Username needs to be more than 5 characters long!"
// 		}else{
// 			warning.textContent = ""
// 		}

// 	})


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