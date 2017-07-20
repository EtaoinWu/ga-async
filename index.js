var express = require('express')
var request = require('request')
var app = express();
var uuid = require('uuid/v4')
var cookie = require('cookie-parser');
app.use(cookie())
const tid = 'UA-93843025-1'
