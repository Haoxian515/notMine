var express = require("express"),
	app = express()
var bodyParser 	= require("body-parser"), 
    mongoose	= require("mongoose"),
    recipeRoute	= require("./routes/recipe"),
    fs			= require("fs"),
    parse 		= require('csv-parse'),
    async 		= require('async');
    Recipe	= require("./models/recipesSchema")



app.use(express.static(__dirname + '/public'));
const PORT_NUM = 3000;
app.set("view engine", "ejs");

mongoose.connect('mongodb://localhost:27017/notMyRecipes', {useNewUrlParser: true})


app.use(bodyParser.urlencoded({extended: true}));

//MAIN


// var testArr = [	{
// 					name:"jon", 
// 					img:"https://tinyurl.com/ybpbelhk", 
// 					title:"whey shake"
// 				},

// 				{
// 					name:"ben", 
// 					img:"https://tinyurl.com/ybpbelhk", 
// 					title:"fried rice" 
// 				},

// 				{
// 					name:"jian hao", 
// 					img:"https://tinyurl.com/ybpbelhk", 
// 					title:"i toss trash across the street" 
// 				}
// 			]

// app.get("/", function(req, res){
// 	res.render("index", {testArray: testArr})
// })


// var inputFile='drinks_test.csv';
// var parser = parse({delimiter: ','}, function (err, data) {
//   async.eachSeries(data, function (line, callback) {
//     // do something with the line

// 		console.log(line)
// 		var newRecipe = {
// 			date: line[0], 
// 			title: line[1], 
// 			img_source: line[2],
// 			ingredients: line[3],
// 			instructions: line[4],
// 			rating: line[5],
// 			recipe_source: line[6]
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

app.get("/drinks", function(req, res){
	Recipe.find({}, function(err, foundRecipe){
		if(err){
			console.log(err)
			res.redirect("/")
		}else{
			console.log(foundRecipe)
			res.send({foundRecipe})
		}
	})
})

// app.get("/:", function(req, res){
// 	res.render("index")
// })


app.use(recipeRoute)


app.listen(PORT_NUM, function(){
	console.log("listening on port 3000")
});