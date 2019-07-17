//global variables and initializing
var currentScore = 0;
var winCounter = 0;
var lossCounter = 0;
var yourNumber = 0;
var crystalBtn = $('.crystalButton');

//Start Game Function
function startGame (){
    currentScore = 0;
    $('#scoreBox').text(currentScore);

    $('.alert').addClass('modal');

    $('#wins').text(winCounter);
    $('#losses').text(lossCounter);

    //Generate random player number between 19-120.
    yourNumber = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
      console.log("target score is", yourNumber);
      $('#scoreTarget').text(yourNumber);

    //Fill array with 4 random numbers between 1-12.
    var buttonValues = [];
    for (var i = 0; i < 4; i++) {
        buttonValues.push(Math.round(Math.random() * 12) +1);
        console.log(buttonValues);
    }
        $('#crystal1').attr('value', buttonValues[0]);

        $('#crystal2').attr('value', buttonValues[1]);

        $('#crystal3').attr('value', buttonValues[2]);

        $('#crystal4').attr('value', buttonValues[3]);        
}
startGame();

//Play Game Function
var playGame = function(){

    currentScore = currentScore + (Number($(this).attr('value')));
    $('#scoreBox').text(currentScore);

    //comparing currentScore = player's assigned number
    if (currentScore === yourNumber){
        $('#scoreBox').text(currentScore) 
        winCounter++;
        $('#wins').text(winCounter);
        
        //alert "you win"
        $('.modal').removeClass('modal');
        $('#winloss').text('Congratulations!! You Win!');        
    }
    //check to see if player's total score went over the player's assigned number
    else if(currentScore > yourNumber){
        $('#scoreBox').text(currentScore);
        lossCounter++;
        $('#losses').text(lossCounter);
        
        //alert "you lose"
        $('.modal').removeClass('modal');
        $('#winloss').text('Sorry! Better luck next time.');
    }
    
}

//event listener for each button/crystal
$('.crystalButton').on('click', playGame);

//event listener to restart game once the modal button is clicked 
$('.btn-success').on('click', startGame);