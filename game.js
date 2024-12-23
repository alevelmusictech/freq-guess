// Function to generate a random frequency within a range
export function generateRandomFrequency(min = 100, max = 1000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateFrequencyButtons(target, range = 100) {
    const buttons = [];
    const step = 100; // Step size for round numbers
    const start = Math.floor((target - 2 * range) / step) * step; // Round down to nearest step
    const correctButton = Math.floor(Math.random() * 3); // Random position for correct button

    for (let i = 0; i < 3; i++) {
        const lowerBound = start + i * step;
        const upperBound = lowerBound + step;
        if (i === correctButton) {
            buttons.push({ label: `${lowerBound} - ${upperBound} Hz`, isCorrect: true });
        } else {
            const incorrect = lowerBound + step * (Math.random() > 0.5 ? 2 : -1); // Offset for incorrect ranges
            const incorrectLower = Math.max(incorrect - step, 20); // Ensure it's valid
            const incorrectUpper = incorrectLower + step;
            buttons.push({ label: `${incorrectLower} - ${incorrectUpper} Hz`, isCorrect: false });
        }
    }

    // Sort buttons by their lower range value
    buttons.sort((a, b) => {
        const aLower = parseInt(a.label.split(' ')[0]);
        const bLower = parseInt(b.label.split(' ')[0]);
        return aLower - bLower;
    });

    return buttons;
}

