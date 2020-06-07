//server/server.js
var express = require('express');
var router = require('../routes/routes.js');
var path = require('path');

var app = express();

// Define view template
app.set('view engine', 'ejs');

// Front-end reference
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));

// Routes reference
app.use('/', router);

module.exports=app;