let randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
let guessCount = 0;

const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset-button');

guessButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', resetGame);

function checkGuess() {
  const userGuess = Number(guessInput.value);
  guessCount++;

  if (userGuess === randomNumber) {
    message.textContent = `Congratulations! You guessed it right in ${guessCount} attempts.`;
    endGame();
  } else if (userGuess < randomNumber) {
    message.textContent = 'Too low! Try again.';
  } else {
    message.textContent = 'Too high! Try again.';
  }
}

function endGame() {
  guessInput.disabled = true;
  guessButton.disabled = true;
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  guessCount = 0;
  message.textContent = '';
  guessInput.value = '';
  guessInput.disabled = false;
  guessButton.disabled = false;
}

// Initialize the game
resetGame();
