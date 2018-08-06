var mongoose 				= require("mongoose"),
	passportLocalMongoose 	= require("passport-local-mongoose");


var userSchema = new mongoose.Schema({

	username: String,
	password: String,
	favorites: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Recipe"
		}
	]
})

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);