//server/server.js
var express = require('express');
var router = require('../routes/routes.js');
var path = require('path');

var app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Define view template
app.set('view engine', 'ejs');

// Front-end reference
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));

app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

// Connect database
mongoose.connect('mongodb://nhan:matkhau456@localhost:27017/expense-manager');

// Routes reference
app.use('/', router);

module.exports=app;