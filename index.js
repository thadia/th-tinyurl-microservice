var server = require('express');
var moment = require('moment');
var path = require('path');
var port = process.env.PORT || 3500;
var app = server();

app.listen(port, function(){ 
  console.log('Ready');
  });

//endpoints for Unix & Natural
app.get('/:inputdata', function(req,res) {
  var outputdata;
  //case if Unix
  if(/^\d{8,}$/.test(req.params.inputdata)) {
    outputdata = moment(req.params.inputdata, "X");
    
  } else { //case if Natural
    outputdata = moment(req.params.inputdata, "MMMM D, YYYY");
  }
//check for errors
  if(outputdata.isValid()) {
    res.json({
      unix: outputdata.format("X"),
      natural: outputdata.format("MMMM D, YYYY")
    });
  } else {
    res.json({
      unix: null,
      natural: null
    });
  }
});


//landing page default: Index.html
app.get('/', function(req, res) {
//var file = path.join(__dirname, 'index.html');
  res.sendFile(path.join(__dirname, 'index.html'), function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('File sent:', path.join(__dirname, 'index.html'));
    }
  });
});