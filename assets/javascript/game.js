
// // Creating variables that hold references to the places in the HTML where we want to display things.
var randomNumText = document.getElementById("random-number");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var scoreText = document.getElementById("score");

var score = 0;
var wins = 0;
var losses = 0;

$("document").load(reset() {
    // Generating a random number that the user will be matching
    var randomNum = Math.floor(Math.random() * (120 - 19))+ 19;

    // Generating random number between 1 and 12 for each crystal
    var crystal1 = Math.floor(Math.random() * (12 - 1))+ 1;
    var crystal2 = Math.floor(Math.random() * (12 - 1))+ 1;
    var crystal3 = Math.floor(Math.random() * (12 - 1))+ 1;
    var crystal4 = Math.floor(Math.random() * (12 - 1))+ 1;

    var score = 0;
});
