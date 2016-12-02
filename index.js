var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.set("view engine", "hbs");
app.use(express.static("public"));
app.use(bodyParser.json());
var http = require('http');
http.createServer(function(req, res) {});



  app.get('/', function(req, res){
    var options = {
      host : 'http://api.eventful.com',
      path : '/json/events/search?q=music&l=San+Diego&app_key=WZS7fcgKG9x7ct3z',
      port : 80,
      method : 'GET'
    }

    var request = http.request(options, function(response){
      var body = ""
      response.on('data', function(data) {
        body += data;

      });
      response.on('end', function() {
        return res.send(JSON.parse(body));
      });
    });
    request.on('error', function(e) {
      console.log('Problem with request: ' + e.message);
    });
    request.end();
    console.log(res)
    res.send("hello");

  });

app.listen(4000, () => {
  console.log("app listening on port 4000");
});



// app.get("/:num?", (req, res) => {
//   var numBottles = parseInt(req.params.num)
//   var next = numBottles - 1
//   res.render("index", {
//     numBottles: numBottles,
//     next: next
//   })
// });



//
// app.post("/", (req, res) => {
//   res.send(req.body)
// })
