

// Global variables
//============================================
var wordBank = ["survive", "lefreak", "stayinalive", "superfreak", "funkytown", "discoinferno", "ymca", "borntobealive", "billiejean", "mandolay", "september"];
var win = 0;
var loss = 0;
var wrongLetter = [];
var guessesLeft = 9;
var underScores = [];
var userGuesses = [];
var randomWord;
var winCounter = 0;


// Function
//=============================================
function startGame() {
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(randomWord);

    for (var i = 0; i < randomWord.length; i++) {
        underScores.push('_');
    }

    document.getElementById("word-blank").innerHTML = underScores.join(" ");

    wrongLetter = [];
    guessesLeft = 9;

    //HTML
    //  document.getElementById('guesses-left').textContent = guessesLeft;
}

function winLose(){
   if(winCounter === randomWord.length) 
   {
    alert('Winner');
    startGame();
   }
   else if(guessesLeft === 0){
       alert('loser')
        startGame();
     } 
}


//User Guesses
document.onkeyup = function (event) {
    userGuesses = event.key;
    // console.log(userGuesses); Checking if the letter ex¡sts
    if (randomWord.indexOf(userGuesses) > -1) {

        for (var i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === userGuesses)
            {
                underScores[i] = userGuesses;
                console.log(underScores);
                winCounter++;
                winLose();
                console.log(userGuesses);
            }
        }
    }
    else {
        wrongLetter.push(userGuesses)
        guessesLeft--;
        winLose();
        console.log(wrongLetter);
    }
}

//Main
//============================================


startGame();

