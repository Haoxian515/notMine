var mongoose = require('mongoose')

  // category,title,image_link,ingredients,instructions,recipe_group,recipe_url

var RecipeSchema = new mongoose.Schema({

  title: { 
      type: String,
      unique: true 
    },
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
  },
// name: {
//   type: String,
//   validate: {
//     validator: function(v, cb) {
//       User.find({name: v}, function(err,docs){
//          cb(docs.length == 0);
//       });
//     },
//     message: 'User already exists!'
//   }
// }

});


// UserSchema.plugin(passportLocalMongoose)

var Recipe = mongoose.model('Recipe', RecipeSchema);
module.exports = Recipe;
