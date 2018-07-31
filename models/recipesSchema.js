var mongoose = require('mongoose')

  // category,title,image_link,ingredients,instructions,recipe_group,recipe_url

var RecipeSchema = new mongoose.Schema({

  title: String,
  description: String,
  category:String,
  instructions:[{
  	type:String
  }],
  ingredients: [{
    type:String
  }],
  image_link: String,
  author: {
    type:String,
    default: "No Author"
  },
  recipe_url:String,
  recipe_group:String,
  postDate:{
    type: Date,
    default: Date.now
  }

});


// UserSchema.plugin(passportLocalMongoose)

var Recipe = mongoose.model('Recipe', RecipeSchema);
module.exports = Recipe;
