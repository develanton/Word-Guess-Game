

// Game set up

var ltrInput = [];
var letterWrong = [];
var letterRight = [];
var attempts = 0;
var userWon = 0;
var userLost = 0;
var wordGuess = ["survive", "lefreak", "stayinalive", "superfreak", "funkytown", "discoinferno", "ymca", "borntobealive", "billiejean", "mandolay", "september"];
var randomWord = "";
var replacement = "";

var lettersUsed = document.getElementById("letterused").innerText = ltrInput;






function startGame() {

  var attempts = 13;
  var letterRight = null;
  var ltrInput = null;
  var letterWrong = null;
  display();
}

function display(){
randomWord = wordGuess[Math.floor(Math.random() * wordGuess.length)];
  var swap = randomWord.replace(/[a-z]/gi, '_ ');
  document.getElementById("letterDisplay").innerHTML = swap;
}

document.onkeyup = function (event) {

  var letter = String.fromCharCode(event.keyCode).toLocaleLowerCase();
  console.log('KEY: ' + letter);

  ltrInput.push(letter);
  

  for (i = 0; i < randomWord.length; i++) {
    if (letter == randomWord.charAt(i)) {
      replacement += ltrInput[i];
      letterRight.push(letter);
      document.getElementById("letterDisplay").innerHTML = replacement;
    }
  }
  for (i = 0; i < randomWord.length; i++) {
    if (letter !== randomWord.indexOf[i]) {
      letterWrong.push(letter);
      attempts --; 
    }
  }
}


startGame();

/*




function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

*/




/*

var word;
var allowedGuesses;
var correctGuesses;
var wrongGuesses;

var wordElement = document.getElementById('word');
var letterCountElement = document.getElementById('letterCount');
var lettersGuessedElement = document.getElementById('lettersGuessed');

function initializeGame() {
  word = 'banzai';
  allowedGuesses = 13;
  wrongGuesses = [];
  correctGuesses = [];

  // initialize correctGuesses array with underscores
  for (var i = 0; i < word.length; i++) {
    correctGuesses.push('_');
  }

  wordElement.innerHTML = correctGuesses.join(' ');
  letterCountElement.innerHTML = allowedGuesses;
}

function updateGuesses(letter) {
  allowedGuesses--; // decrement guesses left
  letterCountElement.innerHTML = allowedGuesses;

  if (word.indexOf(letter) === -1) { // letter is NOT in the word
    wrongGuesses.push(letter); // update letters guessed
    lettersGuessedElement.innerHTML = wrongGuesses.join(', ');
  } else { // letter IS in the word
    // replace underscore with the letter
    for (var i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        correctGuesses[i] = letter;
      }
    }

    wordElement.innerHTML = correctGuesses.join(' ');
  }
}

function checkWin() {
  if (correctGuesses.indexOf('_') === -1) {
    alert('You Won!');
  } else if (allowedGuesses === 0) {
    alert('You Lost!');
  }
}

document.onkeyup = function (event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  updateGuesses(letterGuessed);
  checkWin();
};

initializeGame();
*/