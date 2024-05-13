const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const guess = parseInt(guessInput.value);
    attempts++;

    const message = document.getElementById('message');
    if (guess < secretNumber) {
        message.textContent = 'Too low. Try again.';
    } else if (guess > secretNumber) {
        message.textContent = 'Too high. Try again.';
    } else {
        message.textContent = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`;
        message.style.color = 'green';
        guessInput.disabled = true;
    }
}
