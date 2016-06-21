var server = require('express');
var moment = require('moment');
var path = require('path');
var port = process.env.PORT || 3500;
var app = server();

app.listen(port, function(){ 
  console.log('Ready');
  });

//endpoints for Unix & Natural
app.get('/api/whoami', function(req,res) {
  
    res.json({
      
     //{"ipaddress":"216.64.167.250","language":"en-US","software":"Windows NT 6.1; WOW64; rv:47.0"}
      ipaddress:null,
      language:null,
      software:window.navigator.userAgent   
      
      //unix: outputdata.format("X"),
      //natural: outputdata.format("MMMM D, YYYY")
    });
  
  
});

