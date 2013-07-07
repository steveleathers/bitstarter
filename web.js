var fs = require('fs');
var express = require('express');
var buf = new Buffer(64);
buf.write("index.html");
var app = express.createServer(express.logger());
var buffer = buf.toString();
app.get('/', function(request, response) {
  response.send(fs.readFileSync(buffer));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
