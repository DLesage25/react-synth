export interface SynthState {
    synth: {
        oscillatorType: OscillatorType;
        octave: number;
        duration: number;
        oscillatorFrequency: number;
        detune: number;
        masterGain: number;
    };
    filter: {
        type: string;
        filterFrequency: number;
        filterGain: number;
    };
}
