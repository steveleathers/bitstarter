var fs = require('fs');
var express = require('express');
var buf = fs.readFileSync("index.html");
var buffer = buf.toString();
var app = express.createServer(express.logger());
app.get('/', function(request, response) {
  response.send(buffer);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
