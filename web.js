var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	// response.send(data);

  var fs = require('fs')
  
fs.readFile('index.html', function (err, data) {
	  if (err) throw err;
	  console.log(data);
	  var output = data.toString("utf-8", 0, data.length)
	  console.log(output);
	  response.send(output);

	  //var buf = data;
      });
  

  //response.send('output')

  
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
