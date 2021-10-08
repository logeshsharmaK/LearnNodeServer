var express = require('express');
var app = express();

app.get('/', function (req, res) {

    res.json({ "message": "Hi Logesh sharma we are working in node js" });
});


app.get('/login', function (req, res) {
    res.json({ "message": "welcome" });
});
app.listen(3000, function () {
    console.log('Server is started and listening on port 3000');
});