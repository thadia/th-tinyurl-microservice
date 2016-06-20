var server = require('express');
var app = server();
var moment = require('moment');
var fs = require('fs');
var path = require('path');
var port = process.env.PORT || 3500;

app.listen(port, function(){
  console.log("Listening on port: " + port);
});

//landing page default: Index.html
app.get('/', function(req, res) {
var fileName = path.join(__dirname, 'index.html');
  res.sendFile(fileName, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });
});

//endpoints for Unix & Natural
app.get('/:datestring', function(req,res) {
  var myDate;
  //case if Unix
  if(/^\d{8,}$/.test(req.params.datestring)) {
    myDate = moment(req.params.datestring, "X");
    
  } else { //case if Natural
    myDate = moment(req.params.datestring, "MMMM D, YYYY");
  }

//check for errors
  if(myDate.isValid()) {
    res.json({
      unix: myDate.format("X"),
      natural: myDate.format("MMMM D, YYYY")
    });
  } else {
    res.json({
      unix: null,
      natural: null
    });
  }


});