// ----------------------------------------------------------------------------------------------------
// SCRIPTS - STATION
// ----------------------------------------------------------------------------------------------------
"use strict";

var doStation1 = function(event){

    var eventTime = event[0];
    var eventName = event[1];
    var eventSteps = event[2];

    if ( heartbeat.timer_check(eventTime) ){

        // STATION-SHOW
        if (eventName === 'station1-show'){
            // Show station 1 view
            showView(eventSteps);
            return false;
        }

        // STATION-SHOW-INSTRCTIONS
        if (eventName === 'station1-show-instructions'){
            // Show station instructions
            $("#station1-instructions").addClass("show-station-instruction");
            return false;
        }

        // STATION-COMPETITOR-ARRIVES
        if (eventName === 'station1-competitor-arrives'){
            // Show Jesse as present at the staion (remove absent state)
            $("#competitor3").removeClass("m-competitor-absent ");
            return false;
        }

        // STATION-HIDE-INSTRCTIONS
        if (eventName === 'station1-hide-instructions'){
            // Hide station instructions
            $("#station1-instructions").removeClass("show-station-instruction");

            // Add class so that we transition the competitor avatars up
            $(".m-competitor").addClass("m-competitor-move-to-top");

            return false;
        }

        // STATION-COUNTDOWN
        if (eventName === 'station1-countdown'){
            // Add red to the station countdown timer
            $("#top-bottom-panel").addClass("m-bottom-panel-countdown");

            // Show the competitor counter (circle with number in it)
            $(".m-counter").addClass("m-counter-show");

            // Show the 5,4,3,2,1
            $("#flash-start-countdown").addClass("m-flash-message-show");

            return false;
        }

        // STATION-UDPATE-FLASH-4
        if (eventName === 'station1-update-flash-4'){
            // Update the 5,4,3,2,1
            $("#flash-start-countdown").html("4");           
        }

        // STATION-SHOW-PERSONAL-BEST
        if (eventName === 'station1-show-personal-best'){
            // Update the 5,4,3,2,1
            $("#flash-start-countdown").html("3");           

            // Remove class so that we transition the competitor avatars down and invisible
            $(".m-competitor").removeClass("m-competitor-move-to-top");
            $(".m-competitor").removeClass("m-competitor-absent");
            $(".m-competitor").addClass("m-competitor-hide ");

            // Show the personal best competitor graphics
            $(".m-personal-best").addClass("m-personal-best-show");

            // Show the sprint progress bar
            $(".m-progress-sprint").addClass("m-progress-sprint-show ");

            // Show the competitors progress bar
            $(".m-progress-competitor").addClass("m-progress-competitor-show");

            return false;
        }

        // STATION-UDPATE-FLASH-4
        if (eventName === 'station1-update-flash-2'){
            // Update the 5,4,3,2,1
            $("#flash-start-countdown").html("2");           
        }

        // STATION-UDPATE-FLASH-4
        if (eventName === 'station1-update-flash-1'){
            // Update the 5,4,3,2,1
            $("#flash-start-countdown").html("1");           
        }

        // STATION-GO
        if (eventName === 'station1-go'){
            $("#flash-start-countdown").removeClass("m-flash-message-show");
            $("#flash-start-countdown").html("5"); 

            $("#flash-go").addClass("m-flash-message-show");

            // Reset the timer in anticipation of the new timer state (STATION)
            heartbeat.reset_state_timer("SPRINT1", 60);
            return true;
        }

    }
}
