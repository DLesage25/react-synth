export interface SynthState {
    synth: {
        synthType: string;
        octave: number;
        duration: number;
        synthFrequency: number;
        detune: number;
        gain: number;
    };
    filter: {
        type: string;
        frequency: number;
        gain: number;
    };
}
