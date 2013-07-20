var express = require('express');
var fs = require('fs');

//var app = express.createServer(express.logger());
var app = express();

var content = fs.readFileSync("1stversion.html");

app.get('/', function(request, response) {
  response.send(content.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
