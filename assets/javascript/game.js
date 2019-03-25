
// Define variables
var score = 0;
var wins = 0;
var losses = 0;

// Function to generate random numbers at the start of the game.
function randomGenerator () {
    // Generating a random number that the user will be matching
    randomNum = Math.floor(Math.random() * (120 - 19))+ 19;
    $('#random-number').html(randomNum);

    // Generating random number between 1 and 12 for each crystal
    crystal1 = Math.floor(Math.random() * (12 - 1))+ 1;
    crystal2 = Math.floor(Math.random() * (12 - 1))+ 1;
    crystal3 = Math.floor(Math.random() * (12 - 1))+ 1;
    crystal4 = Math.floor(Math.random() * (12 - 1))+ 1;
};

// Function to reset the game
function reset () {
    score = 0;
    $("#score").html(score);
    randomGenerator();
}

// Function to check if User matched the score to the random number
function conditions () {
    if (score == randomNum) {
        wins++;
        $("#wins").html("Wins: " + wins);
        $("#winOrLoss").html("You won!");
        reset();
    } else if (score > randomNum) {
        losses++;
        $("#losses").html("Losses: " + losses);
        $("#winOrLoss").html("You lost!");
        reset();
    }
}

// Creating a function to update the score as each button is clicked.
function crystal1Click () {
    score += crystal1;
    $('#score').html(score);
    conditions ();
}
function crystal2Click () {
    score+= crystal2;
    $('#score').html(score);
    conditions ();
}
function crystal3Click () {
    score += crystal3;
    $('#score').html(score);
    conditions ();
}
function crystal4Click () {
    score += crystal4;
    $('#score').html(score);
    conditions ();
}

// Generating random numbers at the start of the game by calling randomGenerator function
randomGenerator();

// Calling on-click functions
$('#crystal1').on('click', crystal1Click);
$('#crystal2').on('click', crystal2Click); 
$('#crystal3').on('click', crystal3Click); 
$('#crystal4').on('click', crystal4Click); 