var MAX_HEIGHT = 1;
var level = 0;
var box_initial_top;


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
    for (var i = 7; i < 23; i++){ //7:00 to 11:00 (nice)
        for (var j = 0; j < 7; j++) {

            //create div each run in loop
            var newDiv = document.createElement("div");
            //create id
            //pretty sure that this makes the id's like "event1, event2, ..." (hopefully)
            $(newDiv).attr("id", "event" + 1);
            //assign class
            $(newDiv).attr("class", "event");

            var slotTime = "#event" + i;
            var time = JSON.stringify({slotTime});

            //append divs to timetable screen div
            $("#timetable").append(newDiv);
        }

    }
    
    //for the edit button
    editButton();


    //make the div box clickable to edit to timeSlot class
    $(".timeSlot").click(editSlot());

}

//Edits the flag 'edit' to edit timeslots
function editButton(){


}

//gives the user an option to change the background color
function backgroundColor(){

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

    var eventID = id

    if (edit == true){
        var a = prompt("Enter the description of the event: ");
        document.getElementById("#event"+ slot).innerHTML = a;
    }
    else{

    }

}