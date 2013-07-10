var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(data);

fs = require(`'fs')
fs.readFile('~/bitstarter/index.html', 'utf8', function (data) {
//  if (err) {
  //  return console.log(err);
 // }
  console.log(data);
});

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
