var server = require('express');
var port = process.env.PORT || 3500;
var app = server();
var shrink = require('shrink');


app.listen(port, function(){ 
  console.log('Ready: ' + port);
  });

app.get('/new/:inputurl', function(req,res) {
  var result, inputurl;
  
  result = shrink.shorten(inputurl);
 
    res.json({
        
      //{ "original_url":"http://foo.com:80", "short_url":"https://little-url.herokuapp.com/8170" }
     
      original_url:result.longUrl, //=> 'http://google.com'
      short_url:result.shortUrl //=> 'http://mt.cx/AAA'
    });
  
  
});

