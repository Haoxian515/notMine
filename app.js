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
app.get("/", function(req, res){
	res.render("index")
})


app.use(recipeRoute)
// app.post("/api/recipe", function(req, res){
// 	console.log("posting stuff!")

// })


app.listen(PORT_NUM, function(){
	console.log("listening on port 3000")
});