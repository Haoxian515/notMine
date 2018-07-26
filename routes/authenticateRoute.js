var express 		= require("express");
var router 			= express.Router()
var passport		= require("passport"),
	User 			= require("../models/userSchema")


router.get("/register", function(req, res){
	res.render("register")
})


router.post('/register', function(req, res){


		var newUser = new User( {
			username: req.body.username
		})

		User.register(newUser, req.body.password, function(err, user){
			if(err){
				console.log(err)
				return res.redirect('/register');
			}
			passport.authenticate('local')(req, res, function(){
				res.redirect("/")
			})
		})

})

router.get("/login", function(req, res){
	res.render("login")
})

router.post("/login",
	passport.authenticate("local", 
		{
			successRedirect: "/",
			failureRedirect: "login"
		}),function(req, res){
		console.log("loging success")
});

router.get("/logout", function(req, res){
	req.logout();
	res.redirect("/");
});

module.exports = router;
