var server = require('express');
var port = process.env.PORT || 3500;
var app = server();

app.listen(port, function(){ 
  console.log('Ready: ' + port);
  });

app.get('/api/whoami', function(req,res) {
  
    res.json({
     //{"ipaddress":"216.64.167.250","language":"en-US","software":"Windows NT 6.1; WOW64; rv:47.0"}
      ipaddress:req.headers['x-forwarded-for'] || 
                req.connection.remoteAddress || 
                req.socket.remoteAddress ||
                req.connection.socket.remoteAddress,
      language:req.headers['accept-language'],
      software:req.headers['user-agent'].match(/\([^\)]+\)/g)

    });
  
  
});

