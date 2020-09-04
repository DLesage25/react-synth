import Oscillator from './oscillator';
import BiquadFilter from './biquadFilter';
import Analyzer from './analyzer';

import context from '../audioContext';
export default class SynthEngine {
    _oscillatorType: OscillatorType;
    _filterType: BiquadFilterType;
    _gain: any;
    _now: any;
    _oscillator: any;
    _biquadFilter: any;
    _analyser: any;
    _initialized: boolean;

    constructor(oscillatorType: OscillatorType, filterType: BiquadFilterType) {
        this._oscillatorType = oscillatorType;
        this._filterType = filterType;
        this._gain = null;
        this._now = null;
        this._oscillator = null;
        this._biquadFilter = null;
        this._analyser = null;
        this._initialized = false;
    }

    public initializeEngine = (runtimeOpts: any) => {
        const oscillatorProto = new Oscillator(this._oscillatorType);
        const biquadFilterProto = new BiquadFilter(this._filterType);
        const analyserProto = new Analyzer();

        this._gain = context.createGain();
        this._now = context.currentTime;
        this._oscillator = oscillatorProto.initialize(
            context,
            runtimeOpts.oscillatorFrequency
        );
        this._biquadFilter = biquadFilterProto.initialize(
            context,
            runtimeOpts.filterFrequency,
            runtimeOpts.filterGain
        );
        this._analyser = analyserProto.initialize(context);
        this.initialized = true;

        return this;
    };

    set initialized(val: boolean) {
        this._initialized = val;
    }

    public isInitialized = () => {
        return this._initialized;
    };

    get getModules() {
        return {
            gain: this._gain,
            now: this._now,
            oscillator: this._oscillator,
            biquadFilter: this._biquadFilter,
            analyser: this._analyser,
        };
    }

    public playSound = (
        runtimeOpts: any = {
            masterGain: 1,
            duration: 1.5,
        }
    ) => {
        // this.initializeEngine(runtimeOpts);

        this._oscillator.connect(this._biquadFilter);
        this._biquadFilter.connect(this._gain);
        this._gain.connect(this._analyser);
        this._analyser.connect(context.destination);

        this._gain.gain.setValueAtTime(runtimeOpts.masterGain, this._now);
        this._gain.gain.exponentialRampToValueAtTime(
            0.00001,
            this._now + runtimeOpts.duration
        );

        this._oscillator.start(this._now);
        this._oscillator.stop(this._now + runtimeOpts.duration);
    };
}
