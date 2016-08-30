var path = require('path');
var fs = require('fs');
var request = require('request');
var schedule = require('node-schedule');
var cron = require('cron');
var dateUpdated = '';

var scheduler = function(callback) {
    console.log('In Scheduler function');
    var cronjob = cron.CronJob;
    var job1 = new cronjob('00 00 10 * * 0-6', function() {
        console.log('Starting to Call getaddata method');
        request({
            // url: "http://localhost:3000/getaddata",
            url: "https://aadhaar-app.herokuapp.com/getaddata",
            encoding: null,
            "rejectUnauthorized": false
        }, function(err, resp, body) {
            if (err) {
                callback(err);
                return;
            } else {
                console.log('Finished calling getaddata');
            }
        });
        console.log('Finised to Call getaddata method');
    });
    job1.start();
    var job2 = new cronjob('00 01 10 * * 0-6', function() {
        console.log('Starting to Call SyncMaster method');
        request({
            // url: "http://localhost:3000/syncmaster",
            url: "https://aadhaar-app.herokuapp.com/syncmaster",
            encoding: null,
            "rejectUnauthorized": false
        }, function(err, resp, body) {
            if (err) {
                callback(err);
                return;
            } else {
                console.log('Finished calling SyncMaster');
            }
        });
        console.log('Finised to Call SyncMaster method');
    });
    job2.start();
    callback("done");
}


var methods = {};
methods.scheduler = scheduler;
module.exports = methods;
