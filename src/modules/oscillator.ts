let AudioContext = window.AudioContext || false;

export default class Oscillator {
    type: OscillatorType;
    duration: number;

    constructor(type: OscillatorType, duration: number) {
        this.type = type;
        this.duration = duration;
    }

    public playSound = (frequency: number) => {
        const context = new AudioContext();
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        const now = context.currentTime;

        oscillator.type = this.type;
        oscillator.connect(gain);
        oscillator.frequency.value = frequency;

        gain.connect(context.destination);

        gain.gain.setValueAtTime(1, now);
        gain.gain.exponentialRampToValueAtTime(0.00001, now + this.duration);

        oscillator.start(now);
        oscillator.stop(now + this.duration);
    };
}
