var server = require('express');
var moment = require('moment');
var path = require('path');
var port = process.env.PORT || 3500;
var app = server();

app.listen(port, function(){

});

//landing page default: Index.html
app.get('/', function(req, res) {
var file = path.join(__dirname, 'index.html');
  res.sendFile(file, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('File sent:', file);
    }
  });
});

//endpoints for Unix & Natural
app.get('/:inputdate', function(req,res) {
  var outputdata;
  //case if Unix
  if(/^\d{8,}$/.test(req.params.inputdate)) {
    outputdata = moment(req.params.inputdate, "X");
    
  } else { //case if Natural
    outputdata = moment(req.params.inputdate, "MMMM D, YYYY");
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