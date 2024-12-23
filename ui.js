export function updateFeedbackMessage(message) {
    const feedback = document.getElementById('feedback');
    feedback.textContent = message;
}

export function createFrequencyButtons(buttons, callback) {
    const container = document.getElementById('guessButtons');
    container.innerHTML = ''; // Clear existing buttons

    buttons.forEach((button, index) => {
        const btn = document.createElement('button');
        btn.textContent = button.label;
        btn.addEventListener('click', () => callback(button.isCorrect));
        container.appendChild(btn);
    });
}
