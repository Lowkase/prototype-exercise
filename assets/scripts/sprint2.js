// ----------------------------------------------------------------------------------------------------
// SCRIPTS - STATION
// ----------------------------------------------------------------------------------------------------
"use strict";

var doSprint2 = function(event){
    var eventTime = event[0];
    var eventName = event[1];
    var eventSteps = event[2];

    if ( heartbeat.timer_check(eventTime) ){

        // SPRINT2-START
        if (eventName === 'sprint2-start'){
            $("#footer-checkpoint-left").html("SPRINT 2");
            $("#footer-checkpoint-right").html("SPRINT 2");
            return false;
        }

        // SPRINT2-UPDATE
        if (eventName === 'sprint2-update'){
            $(".m-progress-sprint").height( updateSprintProgress(eventTime, 2) );
            updateCompetitorProgress(eventSteps);

            if(eventTime === 6){
                $("#competitor4-personal-best").addClass("m-swimlane-personal-best-show");
            }

            if(eventTime === 10){
                $("#top-bottom-panel").addClass("m-bottom-panel-countdown");
            }

            return false;
        }

        // SPRINT2-END
        if (eventName === 'sprint2-end'){
            $(".m-progress-sprint").height( updateSprintProgress(eventTime, 2) );
            updateCompetitorProgress(eventSteps);

            // Reset the timer in anticipation of the new timer state (SPRINTEND)
            heartbeat.reset_state_timer("STATION1END", 120);
            return true;
        }

    }
}