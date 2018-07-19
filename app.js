var express = require("express"),
	app = express()
var bodyParser 	= require("body-parser"), 
    mongoose	= require("mongoose"),
    recipeRoute	= require("./routes/recipe")

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

app.get("/", function(req, res){
	res.render("index")
})

// app.get("/:", function(req, res){
// 	res.render("index")
// })


app.use(recipeRoute)


app.listen(PORT_NUM, function(){
	console.log("listening on port 3000")
});