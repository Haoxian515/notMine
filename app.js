var express = require("express"),
	app = express()
var bodyParser 		= require("body-parser"), 
    mongoose		= require("mongoose"),
    // recipeRoute		= require("./routes/recipe"),
    fs				= require("fs"),
    parse 			= require('csv-parse'),
    async 			= require('async');
    Recipe			= require("./models/recipesSchema"),
    // drinksAPIRoute	= require("./routes/api/api_drinks"),
    recipesRoute 	= require("./routes/recipesRoute")



app.use(express.static(__dirname + '/public'));
const PORT_NUM = 3000;
app.set("view engine", "ejs");

mongoose.connect('mongodb://localhost:27017/notMyRecipes', {useNewUrlParser: true})


app.use(bodyParser.urlencoded({extended: true}));

//MAIN

// push to db
// var inputFile='drinks_test.csv';
// var parser = parse({delimiter: ','}, function (err, data) {
// 	// console.log(data[1][3].split("\r\n"))
// 	// console.log(data[1]);
// 	// console.log(data.length)
// 	// category,title,image_link,ingredients,instructions,recipe_group,recipe_url
// 	// 0			1     2 		3 			4 				5 			6
// 	// console.log(data[2])
//   async.eachSeries(data, function (line, callback) {
//     // do something with the line

// 		// console.log(line)
// 		var newRecipe = {
// 			category: line[0], 
// 			title: line[1],
// 			image_link: line[2], 
// 			ingredients: line[3].split("\n"),
// 			instructions: line[4].split("\n"),
// 			recipe_group: line[5],
// 			recipe_url: line[6]
// 		};

// 		Recipe.create(newRecipe, function(err, recipe){
// 			if(err){
// 				console.log(err)
// 			}else{
// 				console.log("saved to db")
// 			}
// 		})
// 		// save to mongo
//     // doSomething(line).then(function() {
//     //   // when processing finishes invoke the callback to move to the next one
//       callback();
//     // });
//   })
// });
// fs.createReadStream(inputFile).pipe(parser);




app.get("/", function(req, res){
	res.render("index")
})

app.use("/", recipesRoute);


app.get("*", function(req, res){
	res.send("page not found")
})


app.listen(PORT_NUM, function(){
	console.log("listening on port 3000")
});