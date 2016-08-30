var path = require("path");
var express = require("express");
var service = require("../service");
var analyzerservice = service.analyzer;
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));

var scheduler = function(req, res) {
    var callback = function(data) {
        res.setHeader('Content-Type', 'application/json');
        res.json(data);

    }
    analyzerservice.scheduler(callback);
}
var methods = {};
methods.scheduler = scheduler;
module.exports = methods;
