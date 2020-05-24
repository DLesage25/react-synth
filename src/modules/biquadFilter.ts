const AudioContext = window.AudioContext || false;

export default class BiquadFilter {
    type: BiquadFilterType;
    constructor(type: BiquadFilterType) {
        this.type = type;
    }

    public initialize = (
        context: AudioContext,
        frequency: number,
        gain: number
    ) => {
        const biquadFilter = context.createBiquadFilter();

        biquadFilter.type = this.type;
        biquadFilter.frequency.setValueAtTime(1000, context.currentTime);
        biquadFilter.gain.setValueAtTime(25, context.currentTime);

        return biquadFilter;
    };
}
