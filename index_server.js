/*General purpose of the server:
1. To remind the user ahead of time when the event time
    draws nearer.
2. Read the client request to edit the divs.
*/

//empty js object to store information for later
//var data = {};

const slotTime = [];
const slotId = [];

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
    if (z['action'] == 'slotInfo') {

        slotId.push(z['id']);
        //id 1 is in the first arrayslot 0
        slotId[z['id']- 1] = [z['day'], z['time']]; 


    } 
    else if (z['action']== 'edit'){

        slotTime[z['id'] + 1] = z['time'];

    }
    else {
        res.send(JSON.stringify({ 'msg': 'error!!!' }));

    }


}).listen(port);
console.log("Server is running! (listening on port " + port + ")");

//alerts the user when a set time is reached.
function reminder(time){


}