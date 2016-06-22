var server = require('express');
var port = process.env.PORT || 3500;
var app = server();
var map_global=[["",""]];
var tiny_global=0;
var max =100;
var c=0; 
var search = require('./search.js');

app.listen(port, function(){ 
  console.log('Ready: ' + port);
  });

app.get('/new/:inputurl(*)/', function(req,res) {
  
    res.json({
      //{ "original_url":"http://foo.com:80", "short_url":"https://little-url.herokuapp.com/8170" }
      original_url:req.params.inputurl, //=> 'http://google.com'
      short_url:"https://th-tinyurl-microservice.herokuapp.com/" + tiny_global
    });
    
  //  map_global[c][1] = req.params.inputurl;
  //  map_global[c][0] = tiny_global;
    map_global.push(req.params.inputurl,tiny_global);
    tiny_global = tiny_global + 1;
    c=c+1;
});

app.get('/:tiny', function(req,res) {
   //do a for  
   console.log("Logging::::" + req.params.tiny + "::::::"  + map_global);

   var redir_url=search.findTiny(req.params.tiny,map_global);
   console.log("Logging::::" + redir_url);
   res.redirect(redir_url);
   
   
});