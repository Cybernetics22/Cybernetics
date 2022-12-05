/*General purpose of the server:
1. To remind the user ahead of time when the event time
    draws nearer.
*/

//empty js object to store information for later
var data = {};

const slotId = [];

const schedule = require('node-schedule');

var express = require('express');
var app = express();
var port = 3001;

//where to use .append?

//stores the information of each div
app.post('/post', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log("New express client");
    console.log("Received: ");
    console.log(JSON.parse(req.query['data']));
    var z = JSON.parse(req.query['data']);

    //assigns each slot a time and day
    if (z['action']== 'edit'){
        var hourNum = parseInt(z['time']) ;

        const job = schedule.scheduleJob({hour: (hourNum == 0 ? 24: hourNum) - 1, minute: 50, dayOfWeek: z['day']}, function(){
            console.log('Reminder for your event scheduled for ' + z['nameDay'] + ', ' + z['time'] + ':00 ! \n Description: ' + z['desc']);
          });

        res.send(JSON.stringify({ 'msg': 'Date Edited! Date: ' + Date }));

    }
    else {
        res.send(JSON.stringify({ 'msg': 'error!!!' }));

    }


}).listen(port);
console.log("Server is running! (listening on port " + port + ")");

//alerts the user when a set time is reached.
function reminder(time){


}