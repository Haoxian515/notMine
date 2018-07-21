var express 		= require("express");
var router 			= express.Router()
var Recipe 	= require("../models/recipesSchema")

router.get("/", function(req, res){

	res.render("drinks")

})

module.exports = router;