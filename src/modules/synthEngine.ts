import Oscillator from './oscillator';
import BiquadFilter from './biquadFilter';

export default class SynthEngine {
    oscillatorType: OscillatorType;
    filterType: BiquadFilterType;

    constructor(oscillatorType: OscillatorType, filterType: BiquadFilterType) {
        this.oscillatorType = oscillatorType;
        this.filterType = filterType;
    }

    private initializeEngine = () => {
        const oscillatorProto = new Oscillator(this.oscillatorType);
        const biquadFilterProto = new BiquadFilter(this.filterType);

        return { oscillatorProto, biquadFilterProto };
    };

    public playSound = (runtimeOpts: any) => {
        const { oscillatorProto, biquadFilterProto } = this.initializeEngine();
        const context = new AudioContext();
        const gain = context.createGain();
        const now = context.currentTime;
        const oscillator = oscillatorProto.initialize(
            context,
            runtimeOpts.oscillatorFrequency
        );
        const biquadFilter = biquadFilterProto.initialize(
            context,
            runtimeOpts.biquadFilterFrequency,
            runtimeOpts.biquadFilterGain
        );

        oscillator.connect(biquadFilter);
        biquadFilter.connect(gain);
        gain.connect(context.destination);

        gain.gain.setValueAtTime(runtimeOpts.masterGain, now);
        gain.gain.exponentialRampToValueAtTime(
            0.00001,
            now + runtimeOpts.duration
        );

        oscillator.start(now);
        oscillator.stop(now + runtimeOpts.duration);
    };
}
