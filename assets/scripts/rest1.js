// ----------------------------------------------------------------------------------------------------
// SCRIPTS - REST1
// ----------------------------------------------------------------------------------------------------
"use strict";

var doRest1 = function(event){

    var eventTime = event[0];
    var eventName = event[1];
    var eventSteps = event[2];

    if ( heartbeat.timer_check(eventTime) ){

        // REST1-START
        if (eventName === 'rest1-start'){
            $("#footer-checkpoint-left").html("REST");
            $("#footer-checkpoint-right").html("REST");
            $("#flash-rest").addClass("m-flash-message-show");
            return false;
        }

        // REST1-HIDE-FLASH
        if (eventName === 'rest1-hide-flash'){
            $("#flash-rest").removeClass("m-flash-message-show");
            return false;
        }

        if (eventName === 'rest1-update-flash-5'){
            // Add red to the station countdown timer
            $("#top-bottom-panel").addClass("m-bottom-panel-countdown");

            // Show the 5,4,3,2,1
            $("#flash-start-countdown").addClass("m-flash-message-show");
            return false;
        }
        if (eventName === 'rest1-update-flash-4'){
            // Update the 5,4,3,2,1
            $("#flash-start-countdown").html("4");           
            return false;
        }
        if (eventName === 'rest1-update-flash-3'){
            // Update the 5,4,3,2,1
            $("#flash-start-countdown").html("3");           
            return false;
        }
        if (eventName === 'rest1-update-flash-2'){
            // Update the 5,4,3,2,1
            $("#flash-start-countdown").html("2");           
            return false;
        }
        if (eventName === 'rest1-update-flash-1'){
            // Update the 5,4,3,2,1
            $("#flash-start-countdown").html("1");           
            return false;
        }

        // REST1-END
        if (eventName === 'rest1-end'){
            $("#flash-start-countdown").removeClass("m-flash-message-show");
            $("#flash-start-countdown").html("5"); 

            // Add red to the station countdown timer
            $("#top-bottom-panel").removeClass("m-bottom-panel-countdown");

            heartbeat.reset_state_timer("SPRINT2", 60);
            return true;
        }

    }
}
