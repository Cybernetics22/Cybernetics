//const slotData = [7]; fixed arrays cant exist js?

var boxNumber = 1;


var start = new Date();
var url = "http:localhost:3001";

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

//Loads the screen and assigns times to each div
function loadScreen(){

    //create the divs for the timeSlots (by row by row; imbedded loop)
    for (var i = 0; i < 7; i++){ 
        for (var j = 7; j < 23; j++) { //7:00 to 11:00 (nice)

            //create div each run in loop
            var newDiv = document.createElement("div");
            //create id
            //pretty sure that this makes the id's like "event1, event2, ..." (hopefully)
            
            $(newDiv).attr("id", boxNumber);
            //assign class
            $(newDiv).attr("class", "event");

            /* I made a mistake, we dont need a span
            var newSpan = document.createElement("span");
            var newId = "event" + i + 1;
            $(newSpan).attr("id", newId);
            $(newSpan).attr("class", "slotBox");
            */

            var slotDay = i;
            var slotTime = j;

            $.post(url+'?data='+JSON.stringify({
                    'action': slotInfo,
                    'day': slotDay,
                    'time': slotTime,
                    'id': boxNumber
                }),
                response
            );

            boxNumber++;


            /* Hide this now; this would store times
            var slotTime = "#event" + j + 1; //becomes #event1
            var time = JSON.stringify({slotTime});
            */

            //append divs to timetable screen div
            $("#timetable").append(newDiv);
        }

    }
    
    //for the edit button
    editButton();


    //make the span box clickable to edit to timeSlot class
    $(".slotBox").click(editSlot());

}


//onlick event handler for edit button
function editButton(){

    var idEdit = 0;
    //make it so that they would enter a string; then convert to number? ah arrays
    var day = prompt("For which day would you like to add an event: ");
    //Assume that they would type in military time for now, with out the :00
    var dayTime = prompt("For which time would you like to add an event: ");

    for (let i = 0; i < 16; i++){
        for(let j =0; i< 7;i++){


        }
    }


    var desc = prompt("Enter the description of the event: ");
    document.getElementById("#event"+ slot).innerHTML = desc;
    //send the attempt_code to server for evaluation
    $.post(
        url+'?data='+JSON.stringify({
            'action':'edit',
            'id': idEdit,
            'time': dayTime,
            'desc': desc 
        }),
        response
    );

}


//gives the user an option to change the background color
function backgroundColor(){

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