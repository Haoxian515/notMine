var mongoose 				= require("mongoose"),
	passportLocalMongoose 	= require("passport-local-mongoose");


var adminSchema = new mongoose.Schema({

	username: String,
	password: String,

	admin: True

})

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("Admin", adminSchema);