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