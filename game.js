var btncolors=["red","green","blue","yellow"];
var gPattern = [];
var userClickedPattern = [];
var started=false;
var level=0;

$(document).keypress(function(){
  if(!started){
    $("#start").text("Level " + level);
    newSequence();
    started=true;
  }
})
$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
})
function checkAnswer(currenlevel){
  if(gPattern[currenlevel]===userClickedPattern[currenlevel]){
    console.log("success")
    if(userClickedPattern.length===gPattern.length){
      setTimeout(function (){
        newSequence();
      }, 1000);
    }
  }
  else{
    console.log("wrong");
  playSound("wrong");
    $("body").addClass("gameover");
    setTimeout(function(){
      $("body").removeClass("gameover");
    },200);
$("#start").text("Game Over😮,👆🏻 Press Any Key to Restart ");

startOver();
  }
}

function animatePress(currentColor){
$("#" + currentColor).addClass("pressed");
setTimeout(function () {
  $("#" + currentColor).removeClass("pressed");
}, 100);
}
function startOver(){
level=0;
gPattern=[];
started=false;


}

function newSequence(){
  userClickedPattern=[];
  level++;
  $("#start").text("Level " + level);
var randomNo = Math.floor((Math.random()*3)+1);
var randomColor= btncolors[randomNo];
gPattern.push(randomColor);
$("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomColor);
}
function playSound(name){
  var audio= new Audio("sounds/" + name + ".mp3");
  audio.play();
}
