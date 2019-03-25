
// Assign value to each crystal
var score = 0;
var crystal1 = 1;
var crystal2 = 3;
var crystal3 = 7;
var crystal4 = 10;
var wins = 0;
var losses = 0;
var randomNum = 0;

// Generating a random number that the user will be matching
function generateRandomNumber () {
    var randomNum = Math.floor(Math.random() * (120 - 19))+ 19;
    $('#random-number').html(randomNum);
    console.log("Random number is " + randomNum);
}

// Creating function to update the score as each button is clicked.
function crystal1Click () {
    score += crystal1;
    $('#score').html(score);
    console.log("Current score is" + score);
}
function crystal2Click () {
    score+= crystal2;
    $('#score').html(score);
    console.log("Current score is" + score);
}
function crystal3Click () {
    score += crystal3;
    $('#score').html(score);
    console.log("Current score is" + score);
}
function crystal4Click () {
    score += crystal4;
    $('#score').html(score);
    console.log("Current score is" + score);
}

// Calling generateRandomNumber function
generateRandomNumber();

function init () {
    
    // Calling on click functions
    $('#crystal1').on('click', crystal1Click);
    $('#crystal2').on('click', crystal2Click); 
    $('#crystal3').on('click', crystal3Click); 
    $('#crystal4').on('click', crystal4Click); 
    console.log("Here's your score: " + score);
    console.log("Here's a random number: " + randomNum);
}  
    // Comparing score to randomNum
    if (score == randomNum) {
        console.log("You Won!");
        wins++;
        generateRandomNumber();
    }
    else if (score > randomNum) {
        console.log("You lost!");
        losses++;
        generateRandomNumber();
    }
    else {
        init ();
    }

//Print Win and Losses
$('#wins').html(wins);
$('#losses').html(losses);