/*General purpose of the server:
1. To remind the user ahead of time when the event time
    draws nearer.
2. Read the client request to edit the divs.
*/

//empty js object to store information for later
var slotInfo = {};

var express = require('express');
var app = express();

var port = 3001;

//alerts the user when a set time is reached.
function reminder(time){


}