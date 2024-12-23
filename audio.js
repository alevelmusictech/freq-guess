const context = new (window.AudioContext || window.webkitAudioContext)();

export function generateTone(frequency = 440, duration = 1) {
    const oscillator = context.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, context.currentTime);
    oscillator.connect(context.destination);
    oscillator.start();
    setTimeout(() => {
        oscillator.stop();
    }, duration * 1000);
}
