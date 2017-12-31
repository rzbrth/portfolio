var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');

var app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static('public'));
}