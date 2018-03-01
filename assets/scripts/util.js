// ----------------------------------------------------------------------------------------------------
// SCRIPTS - UTIL
// ----------------------------------------------------------------------------------------------------
"use strict";

// showView(view)
// Show the requested HTML div, update the header and footer elements as well
var showView = function(view){
    $(".l-body").hide;
    $("#" + view[0]).show();
    $("#header-title").html(view[1]);
    $("#header-description").html(view[2]);
    $("#footer-checkpoint-left").html(view[3]);
    $("#footer-checkpoint-right").html(view[3]);
}


var updateSprintProgress = function(eventTime, sprint){
    var newHeight = 0;
    var percentageOfFullTime = 0;
    var progressHeight = $(".v-station1").height() / 2;
    var progressHeightHalf =  Math.round( $(".v-station1").height() / 2 );
    var reverseTime = (eventTime - 60) * -1;

    if(sprint === 1){
        newHeight = 2;
    }

    if(sprint === 2){
        newHeight = $(".v-station1").height() / 2;
    }

    if(reverseTime > 0){
        percentageOfFullTime = (reverseTime / 60);

        if(sprint === 1){
            newHeight = Math.round(progressHeight * percentageOfFullTime);
        }

        if(sprint === 2){
            newHeight = progressHeightHalf + Math.round(progressHeight * percentageOfFullTime);
        }
    }

    return newHeight;
}


var updateCompetitorProgress = function(competitorScore){
    // Update the leader line first
    updateLeaders(competitorScore);

    // Update the competitor progress bars
    $("#competitor1-progress").css("height", competitorScore[0] + "%" );
    $("#competitor1-count").html(competitorScore[0]);

    $("#competitor2-progress").css("height", competitorScore[1] + "%" );
    $("#competitor2-count").html(competitorScore[1]);

    $("#competitor3-progress").css("height", competitorScore[2] + "%" );
    $("#competitor3-count").html(competitorScore[2]);

    $("#competitor4-progress").css("height", competitorScore[3] + "%" );
    $("#competitor4-count").html(competitorScore[3]);    
}


var updateLeaders = function(competitorScore){
    var first = 0;
    var second = 0;
    var third = 0;

    var scores = [competitorScore[0], competitorScore[1], competitorScore[2], competitorScore[3]];

    var highScore = Math.max.apply(Math, scores);
    var scoreIndex = scores.indexOf(String(highScore));
    var newPercentage = scores[scoreIndex];

    $(".m-leader-line").css("height", newPercentage + "%");

    $("#competitor1-progress .m-competitor-progress-position").html("");
    $("#competitor2-progress .m-competitor-progress-position").html(""); 
    $("#competitor3-progress .m-competitor-progress-position").html(""); 
    $("#competitor4-progress .m-competitor-progress-position").html(""); 

    for (var i=0; i< 3; i++) {
        highScore = Math.max.apply(Math, scores);
        scoreIndex = scores.indexOf(String(highScore));

        if(i===0){
            first = scores[scoreIndex];
            $("#competitor" + (scoreIndex + 1) + "-progress .m-competitor-progress-position").html("1st");
            $(".m-leader-line").css( "border-color", $("#competitor" + (scoreIndex + 1) + "-progress").css("background-color") );
        }
        if(i===1){
            second = scores[scoreIndex];
            if(first === second){
                $("#competitor" + (scoreIndex + 1) + "-progress .m-competitor-progress-position").html("1st");       
            } else {
                $("#competitor" + (scoreIndex + 1) + "-progress .m-competitor-progress-position").html("2nd");
            }
        }
        if(i===2){
            third = scores[scoreIndex];
            if(first === third){
                $("#competitor" + (scoreIndex + 1) + "-progress .m-competitor-progress-position").html("1st");       
            } else if(second === third) {
                $("#competitor" + (scoreIndex + 1) + "-progress .m-competitor-progress-position").html("2nd");
            } else {
                $("#competitor" + (scoreIndex + 1) + "-progress .m-competitor-progress-position").html("3rd");
            }
        }

        scores[scoreIndex] = 0;
    }
}
