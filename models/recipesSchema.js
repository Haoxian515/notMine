var mongoose = require('mongoose')

var RecipeSchema = new mongoose.Schema({

  title: String,
  description: String,
  category:String,
  instructions:[{
  	type:String
  }],
  ingredients: String,
  img_src: String,
  rating: Number,
  recipeSource:String,
  postDate:{
    type: Date,
    default: Date.now
  }

});


// UserSchema.plugin(passportLocalMongoose)

var Recipe = mongoose.model('Recipe', RecipeSchema);
module.exports = Recipe;
