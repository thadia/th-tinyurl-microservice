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
  var myDate;
  //case if Unix
  if(/^\d{8,}$/.test(req.params.inputdate)) {
    myDate = moment(req.params.inputdate, "X");
    
  } else { //case if Natural
    myDate = moment(req.params.inputdate, "MMMM D, YYYY");
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