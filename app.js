var express = require("express"),
	app = express()
const PORT_NUM = 3000;
var bodyParser = require("body-parser")
var indexRoute = require("./routes/index")

app.use(express.static(__dirname + '/public'));

app.set("view engine", "ejs");


//MAIN
app.get("/", function(req, res){
	res.render("index")
})

app.listen(PORT_NUM, function(){
	console.log("listening on port 3000")
});