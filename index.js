var server = require('express');
var port = process.env.PORT || 3500;
var app = server();
var map_global=[];
var tiny_global=0;
var max =3;
var search = require('./search.js');

app.listen(port, function(){ 
  console.log('Ready: ' + port);
  });

app.get('/new/:inputurl(*)/', function(req,res) {
  //the array witll clear at 100 max requested urls
  if(tiny_global >= max) { map_global.length=0; tiny_global=0; }
  
    res.json({
      //{ "original_url":"http://foo.com:80", "short_url":"https://little-url.herokuapp.com/8170" }
      original_url:req.params.inputurl, //=> 'http://google.com'
      short_url:"https://th-tinyurl-microservice.herokuapp.com/" + tiny_global
    });
;
    var temp_arr=[req.params.inputurl , tiny_global];
    map_global.push(temp_arr);
    tiny_global = tiny_global + 1;
   // c=c+1;
});

app.get('/:tiny', function(req,res) {

   console.log("Logging::::" + req.params.tiny + "::::::"  + map_global + "::::::" + map_global.length);
   var redir_url=search.findTiny(req.params.tiny,map_global);
   
   if(redir_url !== false){
      console.log("Logging::::" + redir_url);
      res.redirect(redir_url);
   }
   else{
      console.log("Not Found::::" + req.params.tiny);
      res.redirect("https://th-tinyurl-microservice.herokuapp.com/home/index.html");
   }
   
});

 app.get('/home/', function(req,res) {

      res.redirect("https://th-tinyurl-microservice.herokuapp.com/home/index.html");
 
   
});