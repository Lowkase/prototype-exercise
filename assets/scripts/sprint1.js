// ----------------------------------------------------------------------------------------------------
// SCRIPTS - STATION
// ----------------------------------------------------------------------------------------------------
"use strict";

var doSprint1 = function(event){
    var eventTime = event[0];
    var eventName = event[1];
    var eventSteps = event[2];

    if ( heartbeat.timer_check(eventTime) ){

        // SPRINT1-START
        if (eventName === 'sprint1-start'){
            // Remove red to the station countdown timer
            $("#top-bottom-panel").removeClass("m-bottom-panel-countdown");
            $("#footer-checkpoint-left").html("SPRINT 1");
            $("#footer-checkpoint-right").html("SPRINT 1");
            return false;
        }

        // SPRINT1-UPDATE
        if (eventName === 'sprint1-update'){
            $(".m-progress-sprint").height( updateSprintProgress(eventTime, 1) );

            //updateLeaders(eventSteps);
            updateCompetitorProgress(eventSteps);

            if(eventTime === 57){
                $("#flash-go").removeClass("m-flash-message-show");    
            }

            if(eventTime === 56){
                // Show the leader line
                $(".m-leader-line").addClass("m-leader-line-show");

                // Show the progress position indicator (1st, 2nd, 3rd)
                $(".m-competitor-progress-position").addClass("m-competitor-progress-position-show");
            }

            return false;
        }

        // SPRINT1-END
        if (eventName === 'sprint1-end'){
            $(".m-progress-sprint").height( updateSprintProgress(eventTime, 1) );
            updateCompetitorProgress(eventSteps);

            // Reset the timer in anticipation of the new timer state (REST1)
            heartbeat.reset_state_timer("REST1", 10);
            return true;
        }

    }
}