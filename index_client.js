var MAX_HEIGHT = 1;
var level = 0;
var box_initial_top;


window.onload = function() {

    //loads the time slots and the side menu bars
    loadScreen(); 

    //Adjusts the height of the next slot by how many append the current one
    var boxHeight = parseInt($(".timeslot").css("height"));
    //Adjusts (WHAT)
    

    //box_initial_top = parseInt($("#timetable").css("height")) - (MAX_HEIGHT - level);
    
    //set sidemenu
}

function loadScreen(){

    //create the divs for the timeSlots (by row by row; imbedded loop)
    for (var i = 0; i < 14; i++){ //7:00 to 11:00 (nice)
        for (var j = 0; j < 7; j++) {

            //create div each run in loop
            var newDiv = document.createElement("div");
            //create id
            //pretty sure that this makes the id's like "event1, event2, ..." (hopefully)
            $(newDiv).attr("id", "event" + 1);
            //assign class
            $(newDiv).attr("class", "event");



            //append divs to timetable screen div
            $("#timetable").append(newDiv);
        }

    }
    
}


// Initialize the timetable and sidemenu
/* What on earth did I try and write here, 
HOW DO I MAKE THE DIVS MOVE TO DESIRED LOCATIONS
function initScreen(){


    current_slot_id = 0;
    var boxHeight = parseInt($(".attempt").css("margin-top")) 
                + parseInt($(".attempt").css("height"));
    $("#acceptcode").css({'top' :  + 'px'});
}
*/

// Event handle the server response
function response(){


}

//handle the response to editing a slot
function editSlot(){


}