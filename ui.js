//Handles UI tasks

export function updateFeedbackMessage(message) {
    const feedback = document.getElementById('feedback');
    feedback.textContent = message;
}
