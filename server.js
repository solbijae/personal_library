const express = require('express');
var router = require('./routes/Router');
var app = express();
var http = require('http');
var bodyParser = require('body-parser')
var createError = require('http-errors');
var debug = require('debug')('0-node:server');



// view engine setup
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());


app.use('/', router);

var port = 3001;
app.set('port', port);
console.log('port', port);

var server = http.createServer(app);
server.listen(port);