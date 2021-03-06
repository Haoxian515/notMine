var express = require("express"),
	app = express()
var bodyParser 		= require("body-parser"), 
    mongoose		= require("mongoose"),
    fs				= require("fs"),
    parse 			= require('csv-parse'),
    async 			= require('async');
    Recipe			= require("./models/recipesSchema"),
    recipesRoute 	= require("./routes/recipesRoute"),
    User 			= require("./models/userSchema"),
    //authentication
    passport		= require("passport"),
    localStrategy 	= require("passport-local"),
    authenticateRoute = require("./routes/authenticateRoute"),
    apiRoutes       = require("./routes/api/apiRoute"),
    multer          = require("multer")



//Sset static routes
app.use(express.static('public'));
app.use(express.static(__dirname + "/views"))
const PORT_NUM = 3000;

// //Set View engine
app.set("view engine", "ejs");



//Connect to mongoose
mongoose.connect('mongodb://localhost:27017/notMyRecipes', {useNewUrlParser: true})


app.use(bodyParser.urlencoded({extended: true}));

// All things user auth
app.use(require("express-session")({
	secret:"supersecret",
	resave:false,
	saveUninitialized:false
}))
app.use(passport.initialize())
app.use(passport.session())
passport.use(new localStrategy(User.authenticate()));
//additionl function from passport-local-mongoose  npm
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//MAIN
//PUSH TO DB
// var csvFiles = ["drinks_test.csv", "food_recipes.csv", "dessert_recipes.csv"]

// for(file of csvFiles){
//     console.log("looping files")
//     pushtodb(file)
// }

app.get("/", function(req, res){
	// console.log(req.user)
	res.render("index", {currentUser: req.user})
})

app.use("/", recipesRoute);

app.use("/", authenticateRoute);

app.use("/", apiRoutes);




app.get("*", function(req, res){
	res.send("page not found")
})


app.listen(PORT_NUM, function(){
	console.log("listening on port 3000")
});


function pushtodb(csvFile){
    // push to db
    console.log("pushing to db!")
    // var csvFiles = ["drinks_test.csv", "food_recipes.csv", "dessert_recipes.csv"]
    // var csvFile="food_recipes.csv"
    // var csvFile='dessert_recipes.csv';
    var inputFile='./public/recipecsv/'+ csvFile;

    var parser = parse({delimiter: ','}, function (err, data) {
        // console.log(data[1][3].split("\r\n"))
        // console.log(data[1]);
        // console.log(data.length)
        // category,title,image_link,ingredients,instructions,recipe_group,recipe_url
        // 0            1     2         3           4               5           6
        // console.log(data[2])
      async.eachSeries(data, function (line, callback) {
        // do something with the line

            // console.log(line)
            var newRecipe = {
                category: line[0], 
                title: line[1],
                image_link: line[2], 
                ingredients: line[3].split("\n"),
                instructions: line[4].split("\n"),
                recipe_group: line[5],
                recipe_url: line[6]
            };
            
            Recipe.create(newRecipe, function(err, recipe){
                if(err){
                    // console.log(err)
                    console.log("recipe title already exists!")
                }else{
                    console.log("saved to db")
                }
            })
            // save to mongo
        //   // when processing finishes invoke the callback to move to the next one
          callback();
      })
    });
    fs.createReadStream(inputFile).pipe(parser);
}