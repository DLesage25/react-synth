let AudioContext = window.AudioContext || false;

interface Oscillator {
    initialize: (context: AudioContext, frequency: number) => OscillatorNode;
}

class Oscillator {
    type: OscillatorType;

    constructor(type: OscillatorType) {
        this.type = type;
    }

    public initialize = (context: AudioContext, frequency: number) => {
        const oscillator = context.createOscillator();

        oscillator.type = this.type;
        oscillator.frequency.value = frequency;

        return oscillator;
    };
}

export default Oscillator;
