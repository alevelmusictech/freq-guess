// Manages audio playback and tone generation

//generates a tone of a given frequency and duration
export function generateTone(frequency, duration = 1) {
    const context = new AudioContext();
    const oscillator = context.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.value = frequency;
    oscillator.connect(context.destination);
    oscillator.start();
    setTimeout(() => {
        oscillator.stop();
    }, duration * 1000);
    }
