
var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(3000, function () {
    console.log('Running on port: 3000');
});