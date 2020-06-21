export interface SynthState {
    synth: {
        synthType: OscillatorType;
        octave: number;
        duration: number;
        synthFrequency: number;
        detune: number;
        gain: number;
    };
    filter: {
        type: string;
        filterFrequency: number;
        filterGain: number;
    };
}
