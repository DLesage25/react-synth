import Oscillator from './oscillator';
import BiquadFilter from './biquadFilter';
import Analyzer from './analyzer';

import context from './audioContext';
export default class SynthEngine {
    oscillatorType: OscillatorType;
    filterType: BiquadFilterType;
    gain: any;
    now: any;
    oscillator: any;
    biquadFilter: any;
    analyser: any;

    constructor(oscillatorType: OscillatorType, filterType: BiquadFilterType) {
        this.oscillatorType = oscillatorType;
        this.filterType = filterType;
        this.gain = null;
        this.now = null;
        this.oscillator = null;
        this.biquadFilter = null;
        this.analyser = null;
    }

    private initializeEngine = (runtimeOpts: any) => {
        const oscillatorProto = new Oscillator(this.oscillatorType);
        const biquadFilterProto = new BiquadFilter(this.filterType);
        const analyserProto = new Analyzer();

        this.gain = context.createGain();
        this.now = context.currentTime;
        this.oscillator = oscillatorProto.initialize(
            context,
            runtimeOpts.oscillatorFrequency
        );
        this.biquadFilter = biquadFilterProto.initialize(
            context,
            runtimeOpts.filterFrequency,
            runtimeOpts.filterGain
        );
        this.analyser = analyserProto.initialize(context);

        return true;
    };

    public getModules = () => {
        return {
            gain: this.gain,
            now: this.now,
            oscillator: this.oscillator,
            biquadFilter: this.biquadFilter,
            analyser: this.analyser,
        };
    };

    public playSound = (runtimeOpts: any) => {
        // const {
        //     gain,
        //     now,
        //     oscillator,
        //     biquadFilter,
        //     analyser,
        // } =
        this.initializeEngine(runtimeOpts);

        this.oscillator.connect(this.biquadFilter);
        this.biquadFilter.connect(this.gain);
        this.gain.connect(this.analyser);
        this.analyser.connect(context.destination);

        this.gain.gain.setValueAtTime(runtimeOpts.masterGain, this.now);
        this.gain.gain.exponentialRampToValueAtTime(
            0.00001,
            this.now + runtimeOpts.duration
        );

        this.oscillator.start(this.now);
        this.oscillator.stop(this.now + runtimeOpts.duration);
    };
}
