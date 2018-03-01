// ----------------------------------------------------------------------------------------------------
// SCRIPTS - EVENTS
// ----------------------------------------------------------------------------------------------------
"use strict";

var heartbeat = {

    running: false,
    timer: 1,
    timerInterval: 5000,
    timeout: false,
    timerState: "LEADERBOARD",
    timerDisplay: "#scoreboardTimer",
    playState: "PAUSE",
    minutes: null,
    seconds: null,

    timerCallback : function(){},

    start : function(timerCallback,timerInterval){

        var elm = this;

        clearInterval(this.timeout);

        this.running = true;
        this.playState = "PLAY";


        if(timerCallback) this.timerCallback = timerCallback;
        if(timerInterval) this.timerInterval = timerInterval;


        // Format time and update it
        this.minutes = parseInt(this.timer / 60, 10);
        this.seconds = parseInt(this.timer % 60, 10);
        this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
        this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;
        $(this.timerDisplay).text(this.minutes + ":" + this.seconds);

        // Find the next event within the correct timer state
        for (var i=0, il=events.length; i< il; i++) {

            // Get the event
            var event = events[i];

            // Determine timer state
            switch (this.timerState){
                case "LEADERBOARD":
                    // Find and fire event
                    var isNewTimer = doLeaderboard(event);

                    // Exit the event loop
                    if (isNewTimer === true){ elm.exit_heartbeat_loop(il); }

                    break;

                case "STATION":
                    // Find and fire event
                    var isNewTimer = doStation1(event);

                    // Exit the event loop
                    if (isNewTimer === true){ elm.exit_heartbeat_loop(il); }

                    break;

                case "SPRINT1":
                    // Find and fire event
                    var isNewTimer = doSprint1(event);

                    // Exit the event loop
                    if (isNewTimer === true){ elm.exit_heartbeat_loop(il); }

                    break;

                case "REST1":
                    // Find and fire event
                    var isNewTimer = doRest1(event);

                    // Exit the event loop
                    if (isNewTimer === true){ elm.exit_heartbeat_loop(il); }

                    break;

                case "SPRINT2":
                    // Find and fire event
                    var isNewTimer = doSprint2(event);

                    // Exit the event loop
                    if (isNewTimer === true){ elm.exit_heartbeat_loop(il); }

                    break;

                case "STATION1END":
                    // Find and fire event
                    var isNewTimer = doStation1End(event);

                    // Exit the event loop
                    if (isNewTimer === true){ elm.exit_heartbeat_loop(il); }

                    break;  
            }
        }

        // If timer ever gets to -1 then the sim is done
        if (--this.timer < 0) {
            console.log("Finished");
            this.stop();
        }

        this.timeout = setTimeout(function(){elm.execute(elm)}, this.timerInterval);
    },
    execute : function(e){
        if(!e.running) return false;
        e.timerCallback();
        e.start();
    },
    stop : function(){
        this.running = false;
        this.playState = "PAUSE";
    },
    set_interval : function(timerInterval){
        clearInterval(this.timeout);
        this.start(false, timerInterval);
    },
    timer_check : function(eventTime){
        // Check if the event time passed matches the heartbeat time
        if (eventTime === this.timer){
            return true;
        } else {
            return false;
        }
    },
    reset_state_timer : function(newState, newDuration){
        // Sets a new state and timer duration
        this.timerState = newState;
        this.timer = newDuration;
    },
    exit_heartbeat_loop : function(il){
        // Forces flow to exit from the heartbeat for loop.  We do this when we want to introduce a new timerState
        return il + 1;
    }
};