import { generateTone } from './audio.js';
import { generateRandomFrequency, generateFrequencyButtons } from './game.js';
import { createFrequencyButtons, updateFeedbackMessage } from './ui.js';

let targetFrequency;

document.getElementById('startGame').addEventListener('click', () => {
    targetFrequency = generateRandomFrequency(100, 1000);
    console.log('Target Frequency:', targetFrequency); // Debug log
    generateTone(targetFrequency, 2); // Play the random frequency for 2 seconds

    const buttons = generateFrequencyButtons(targetFrequency, 50); // Generate frequency buttons
    createFrequencyButtons(buttons, (isCorrect) => {
        if (isCorrect) {
            updateFeedbackMessage('Correct!');
        } else {
            updateFeedbackMessage('Wrong! Try again.');
        }
    });

    updateFeedbackMessage('Guess the frequency!');
});


