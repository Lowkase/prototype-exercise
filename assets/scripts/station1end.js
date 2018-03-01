// ----------------------------------------------------------------------------------------------------
// SCRIPTS - REST1
// ----------------------------------------------------------------------------------------------------
"use strict";

var doStation1End = function(event){

    var eventTime = event[0];
    var eventName = event[1];
    var eventSteps = event[2];

    if ( heartbeat.timer_check(eventTime) ){

        // STATION1END-START
        if (eventName === 'station1end-start'){
            // Update the footer
            $("#top-bottom-panel").removeClass("m-bottom-panel-countdown");
            $("#footer-checkpoint-left").html("NEXT STATION");
            $("#footer-checkpoint-right").html("NEXT STATION");
            $("#flash-stop").addClass("m-flash-message-show");
            return false;
        }

        // STATION1END-HIDE-SPRINT-1
        if (eventName === 'station1end-hide-sprint-1'){
            // Hide the sprint elements
            $(".m-counter").removeClass("m-counter-show");
            $(".m-competitor-progress-position").removeClass("m-competitor-progress-position-show");
            $(".m-progress-competitor").height(0);
            $(".m-progress-competitor").removeClass("m-progress-competitor-show");
            $("#competitor4-personal-best").removeClass("m-swimlane-personal-best-show");
            $(".m-leader-line").removeClass("m-leader-line-show");

            return false;
        }

        // STATION1END-HIDE-SPRINT-2
        if (eventName === 'station1end-hide-sprint-2'){
            $("#flash-stop").removeClass("m-flash-message-show");
            $(".m-personal-best").addClass("m-personal-best-reset");
            return false;
        }

        // STATION1END-HIDE-SPRINT-3
        if (eventName === 'station1end-hide-sprint-3'){
            $(".m-personal-best").removeClass("m-personal-best-show");
            $(".m-competitor-results").addClass("m-competitor-results-show");
            $("#next-station-instructions").addClass("m-next-show-station-instruction");
            return false;
        }

        // STATION1END-COMPETITOR-LEAVES
        if (eventName === 'station1end-competitor-leaves'){
            $("#competitor2-results").addClass("m-competitor-results-absent");
            return false;
        }
    }
}
