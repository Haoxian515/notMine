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
	],
	uniqueTitle: {
		type: String,
		validate: {
			isAsync: true,
			validator: function(v, cb) {
				setTimeout(function() {
				var phoneRegex = /\d{3}-\d{3}-\d{4}/;
				var msg = v + ' is not a valid phone number!';
				// First argument is a boolean, whether validator succeeded
				// 2nd argument is an optional error message override
				cb(phoneRegex.test(v), msg);
				}, 5);
			},
			// Default error message, overridden by 2nd argument to `cb()` above
				message: 'Default error message'
		},
		required: [true, 'User phone number required']
	}
})

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);