var platform = require('platform');
var server = require('express');
//var moment = require('moment');
//var path = require('path');
var port = process.env.PORT || 3500;
var app = server();

app.listen(port, function(){ 
  console.log('Ready: ' + port);
  });

//endpoints for Unix & Natural
app.get('/api/whoami', function(req,res) {
  
    res.json({
      
     //{"ipaddress":"216.64.167.250","language":"en-US","software":"Windows NT 6.1; WOW64; rv:47.0"}
      ipaddress:req.headers['x-forwarded-for'] || 
                req.connection.remoteAddress || 
                req.socket.remoteAddress ||
                req.connection.socket.remoteAddress,
      language:req.headers['accept-language'],
      software:req.headers['user-agent']

      
      //unix: outputdata.format("X"),
      //natural: outputdata.format("MMMM D, YYYY")
    });
  
  
});

