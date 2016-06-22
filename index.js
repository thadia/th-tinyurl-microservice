var server = require('express');
var port = process.env.PORT || 3500;
var app = server();
var map_global=[[]]; 
var max =100;

app.listen(port, function(){ 
  console.log('Ready: ' + port);
  });

app.get('/new/:inputurl(*)/', function(req,res) {

    res.json({
      //{ "original_url":"http://foo.com:80", "short_url":"https://little-url.herokuapp.com/8170" }
      original_url:req.params.inputurl, //=> 'http://google.com'
      short_url:"https://th-tinyurl-microservice.herokuapp.com/" + "1313"
    });
    
    map_global[0][1] = req.params.inputurl;
    map_global[0][0] = "https://th-tinyurl-microservice.herokuapp.com/" + "1313";

});

app.get('/1313', function(req,res) {

    res.redirect(map_global[0][1]);

});
