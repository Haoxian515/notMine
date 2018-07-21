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

//push to db
// var inputFile='drinks_test.csv';
// var parser = parse({delimiter: ','}, function (err, data) {
//   async.eachSeries(data, function (line, callback) {
//     // do something with the line

// 		console.log(line)
// 		var newRecipe = {
// 			date: line[0], 
// 			category: line[1],
// 			title: line[2], 
// 			img_source: line[3],
// 			ingredients: line[4],
// 			instructions: line[5],
// 			rating: line[6],
// 			recipe_source: line[7]
// 		};
// 		Recipe.create(newRecipe, function(err, recipe){
// 			if(err){
// 				console.log(err)
// 			}else{
// 				console.log("saved to db")
// 			}
// 		})
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