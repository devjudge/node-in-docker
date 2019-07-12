//Load express module with `require` directive
var express = require('express')
var app = express()

app.set('host', '0.0.0.0');
app.set('port', process.env.PORT || 8080);


//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello Docker World!')
})


//Launch listening server on port 8081
app.listen(app.get('port'), function () {
  console.log('App is running at http://localhost:%d', app.get('port'));
})
