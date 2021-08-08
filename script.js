$(document).ready(function() {
$("#answer").hide();
var magic8Ball = {};
magic8Ball.listOfAnswers = ["Shake me harder...", "No. Nice try.", "Yeeesss?", "Maybe... ", "Either way, it's gonna suck", "I've got 5 on it", "You better believe it!", "Of course!", "Probably not...", "My sources tell me they're not paid enough...", "All signs point to yes... Not!", "Aww hellll NO", "Absofriggin lutely", "In your dreams sucka", "You wish lol", "Yes, but only if you pay me", "Not in a million years"];
magic8Ball.tellFuture = function(question)
{

var randomNumber = Math.random();
var randomNumberArray = randomNumber * this.listOfAnswers.length;

var randomIndex = Math.floor(randomNumberArray);
var future = this.listOfAnswers[randomIndex];
    $("#8ball").effect("shake");
	setTimeout(
		function(){	
  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
		 }, 500);
$("#answer").text(future);
 $("#answer").fadeIn(4000);
};
  
var onClick = function()
{
	$("#answer").hide();
  
  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
setTimeout(
		function(){
  var question = prompt("You know how this works... Yes or no questions only."); 
  magic8Ball.tellFuture(question);
	 }, 500);
  	
};
  
$("#questionButton").click(onClick);
});