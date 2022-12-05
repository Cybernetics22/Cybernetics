//const slotData = [7]; fixed arrays cant exist js?

var boxNumber = 1;
var row = '';

var start = new Date();
var url = "http://localhost:3001/post";

//what else do I need here?
window.onload = function() {

    //loads the timetable and the side menu bars
    loadScreen(); 
    
    //Adjusts the height of the next slot by how many append the current one
    //var boxHeight = parseInt($(".timeslot").css("height"));
    //Adjusts (WHAT)
    

    //box_initial_top = parseInt($("#timetable").css("height")) - (MAX_HEIGHT - level);
    
    //set sidemenu
}
var i = 0;
//Loads the screen and assigns times to each div
function loadScreen(){

    //create the divs for the timeSlots (by row by row; imbedded loop)
for (var j = 0; j < 24; j++) { 
    //add tr for each timeslot
    var newTr = document.createElement("tr");
    $(newTr).attr("id", "tr" + j);
    //$(newTr).attr("class"); //if you have any class, you can add the class here
    
    //add td attribute for each timeslot 00:00, 01:00, .... 23:00
    var newTd = document.createElement("td");
    $(newTd).attr("id", "td" + j);
    $(newTd).text((j < 10 ? '0'+j:j) + ':00');
    $(newTr).append(newTd);

    //create div : Description placeholder 
    for (var i = 0; i < 7; i++){ 
            //create div each run in loop
            var newDiv = document.createElement("div");
            //create id
            //pretty sure that this makes the id's like "event1, event2, ..." (hopefully)
            
            $(newDiv).attr("id", "event_" + i + "_" + j); //boxNumber);
            //assign class
            $(newDiv).attr("class", "event");
            $(newDiv).text("");

            var newTd = document.createElement("td");
            $(newTd).attr("id", "td" + j + "_" + i);
            $(newTd).append(newDiv);
            $(newTr).append(newTd);
    
            boxNumber++;

        }
        //append divs to timetable screen div
        $('#eventTable tr:last').after(newTr);

    }

    //make the span box clickable to edit to timeSlot class
    $//(".slotBox").click(editSlot());

}

//onlick event handler for edit button
function editButton(){
    var editTargetField = '';
    var idEdit = 0;
    //make it so that they would enter a string; then convert to number? ah arrays
    var day = prompt("For which day would you like to add an event: ");
    //Assume that they would type in military time for now, with out the :00
    var dayTime = prompt("For which time would you like to add an event(format: hh:00): ");
    var slot;

    switch (day){
        case "Sunday": dayWeek = 0; break;
        case "Monday": dayWeek = 1; break;
        case "Tuesday": dayWeek = 2; break;
        case "Wednesday": dayWeek = 3; break;
        case "Thursday": dayWeek = 4; break;
        case "Friday": dayWeek = 5; break;
        case "Saturday": dayWeek = 6; break;
        default: break;
    }
    slot = "event_" + dayWeek + "_" + parseInt(dayTime.slice(0,2)); 
    console.log(slot);

    var desc = prompt("Enter the description of the event: ");
    document.getElementById(slot).innerHTML = desc;
    //send the attempt_code to server for evaluation
    $.post(
        url+'?data='+JSON.stringify({
            'action':'edit',
            'id': slot,
            'day': dayWeek,
            'nameDay': day,
            'time': parseInt(dayTime.slice(0,2)),
            'desc': desc 
        }),
        response
    );

}


//gives the user an option to change the background color
function backgroundColorButton(){
    var colorArr = ['Teal', 'LightPink', 'aqua','wheat','white'];
    backgroundColor = colorArr[getRandomInt(5)];

    $('body').css('background-color', backgroundColor);
    $('table').css('background-color', backgroundColor);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  
// Initialize the timetable and sidemenu
//*Fixed:   HOW DO I MAKE THE DIVS MOVE TO DESIRED LOCATIONS
/*Also not sure what this does just yet
function initScreen(){

    $.post(url+'?data='+JSON.stringify({
        'name':myName, //client's identity on the server
        'action':'edit'}),
    response);
}
*/



// Event handle the server response
//Will need help on this, as the purpose of this is yet to be understood
function response(){
    var response = JSON.parse(data);
    console.log(data);


}

//handle the response to editing a slot
/* Not needed anymore
function editSlot(){

    var eventID = id;

    if (edit == true){
        var a = prompt("Enter the description of the event: ");
        document.getElementById("#event"+ slot).innerHTML = a;
    }
    else{

    }

}
*/