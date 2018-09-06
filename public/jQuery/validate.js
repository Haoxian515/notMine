var submitbutton 	= document.getElementById("submitbtn")
if(submitbtn){
submitbtn.disabled 	= true
}
var username 		= document.getElementById("username")
var password 		= document.getElementById("password")

function validateUsername(){
	var usernameErrmsg 	= document.getElementById("usernameErrmsg")
	if(username.value.length < 5){
		// console.log("less than 5")
		usernameErrmsg.textContent = "Username needs to be more than 5 characters long!"
		return false
	}else{
		usernameErrmsg.textContent = ""
		return true
	}

}

function validatePassword(){
	var pwErrmsg 	= document.getElementById("pwErrmsg")
	if(password.value.length < 5){
		// console.log("less than 5")
		pwErrmsg.textContent = "Password needs to be more than 5 characters long!"
		return false
	}else{
		pwErrmsg.textContent = ""
		return true
	}
}
function permitSubmit(){
	if(validateUsername() && validatePassword()){
		console.log("Valid un and pw")
		submitbutton.disabled = false;
	}else{
		submitbutton.disabled = true;
	}
}

username.addEventListener("keyup", function(event){
	validateUsername()
	permitSubmit()
})

password.addEventListener("keyup", function(event){
	validatePassword()
	permitSubmit()
})