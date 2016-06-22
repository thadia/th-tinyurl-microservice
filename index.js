var server = require('express');
var port = process.env.PORT || 3500;
var app = server();
var save_original; 

app.listen(port, function(){ 
  console.log('Ready: ' + port);
  });

app.get('/new/:inputurl(*)/', function(req,res) {

    res.json({
      //{ "original_url":"http://foo.com:80", "short_url":"https://little-url.herokuapp.com/8170" }
      original_url:req.params.inputurl, //=> 'http://google.com'
      short_url:"https://th-tinyurl-microservice.herokuapp.com/" + "1313"
    });
    save_original = req.params.inputurl;

});

app.get('/1313', function(req,res) {

    res.redirect(save_original);

});
