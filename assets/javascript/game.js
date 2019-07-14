//4 buttons representing 4 different crystals will be displayed at the start of the Game
//at the start of the game, a random number is assigned to the player
//when the player clicks on the crystals, the player's total score will increase according to how much the hidden scores are and the hidden value will be revealed once the crystals are clicked
//if the total points matches the given number, the player wins
//if the total points went over the given number, the player lose.


//Define global variables
var currentScore = 0;
var winCounter = 0;
var lossCounter = 0;
var targetScore = 0;
var crystalBtn = $('.crystalButton');

//Start Game Function
function startGame (){
    currentScore = 0;
    $('#scoreBox').text(currentScore);

    $('.alert').addClass('modal');

    $('#wins').text(winCounter);
    $('#losses').text(lossCounter);

    //Generate random target score between 19-120.
    targetScore = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
      console.log("target score is", targetScore);
      $('#scoreTarget').text(targetScore);

    //Fill array with 4 random numbers between 1-12.
    var buttonValues = [];
    for (var i = 0; i < 4; i++) {
        buttonValues.push(Math.round(Math.random() * 12))
        console.log(buttonValues);
    }
        $('#button1').attr('value', buttonValues[0]);

        $('#button2').attr('value', buttonValues[1]);

        $('#button3').attr('value', buttonValues[2]);

        $('#button4').attr('value', buttonValues[3]);        
}
startGame();

//Play Game Function
var playGame = function(){

    currentScore = currentScore + (Number($(this).attr('value')));
    $('#scoreBox').text(currentScore);

    //check if currentScore = targetScore
    if (currentScore === targetScore){
        $('#scoreBox').text(currentScore) //this isn't updating before alert displays
        winCounter++;
        $('#wins').text(winCounter);
        
        //trigger the modal to show "you win"
        $('.modal').removeClass('modal');
        $('#winloss').text('You Win!');        
    }
    else if(currentScore > targetScore){
        $('#scoreBox').text(currentScore);
        lossCounter++;
        $('#losses').text(lossCounter);
        
        //trigger the modal to show "you lose"
        $('.modal').removeClass('modal');
        $('#winloss').text('Whoops! Your Score Exceeded the Target.');
    }
    else {
        //play again
    }
}

//Set up event listener for each button
$('.crystalButton').on('click', playGame);

//Set up event listener to restart game once the modal button is clicked 
$('.btn-success').on('click', startGame);