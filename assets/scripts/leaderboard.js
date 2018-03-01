// ----------------------------------------------------------------------------------------------------
// SCRIPTS - LEADERBOARD
// ----------------------------------------------------------------------------------------------------
"use strict";

var doLeaderboard = function(event){

    var eventTime = event[0];
    var eventName = event[1];
    var eventSteps = event[2];

    if ( heartbeat.timer_check(eventTime) ){

        // VIEW-NEW
        if (eventName === 'view-new'){
            showView(eventSteps);
            return false;
        }

        // STATION-NEW
        if (eventName === 'station1-new'){
            // Hide the top header
            $(".l-body").addClass("extend-top");

            // Reset the timer in anticipation of the new timer state (STATION)
            heartbeat.reset_state_timer("STATION", 15);
            return true;
        } 

    }
}