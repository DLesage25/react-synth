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
        biquadFilter.frequency.setValueAtTime(frequency, context.currentTime);
        biquadFilter.gain.setValueAtTime(gain, context.currentTime);

        return biquadFilter;
    };
}
