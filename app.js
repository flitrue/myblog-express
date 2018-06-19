var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var database = require('./config/database');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var api = require('./routes/api');

var app = express();

var url = process.env.NODE_ENV == 'production' ? database.remoteUrl : database.localUrl
mongoose.connect(url, { useNewUrlParser: true });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', api);

module.exports = app;
