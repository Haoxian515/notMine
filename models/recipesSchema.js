var mongoose = require('mongoose')

var RecipeSchema = new mongoose.Schema({
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    userName:String
  },
  title: String,
  description: String,
  cost: {
    type: Number,
    minimum: 0
  },
  postDate:{
    type: Date,
    default: Date.now
  }

});


// UserSchema.plugin(passportLocalMongoose)

var Recipe = mongoose.model('Recipe', RecipeSchema);
module.exports = Recipe;
