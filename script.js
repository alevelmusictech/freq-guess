import { generateTone } from './audio.js';
import { generateRandomFrequency } from './game.js';
import { updateFeedbackMessage } from './ui.js';

let targetFrequency;

// Start the game
function startGame() {
    targetFrequency = generateRandomFrequency(100, 1000); // Set a realistic range for testing
    generateTone(targetFrequency);
    updateFeedbackMessage('Guess the frequency!');
}

// Add event listener for the submit button
document.getElementById('submitGuess').addEventListener('click', () => {
    const guess = Number(document.getElementById('guess').value);
    if (guess === targetFrequency) {
        updateFeedbackMessage('Correct!');
    } else if (guess > targetFrequency) {
        updateFeedbackMessage('Lower!');
    } else {
        updateFeedbackMessage('Higher!');
    }
});

startGame();
