export interface SynthState {
    synth: {
        type: string;
        octave: number;
        duration: number;
        frequency: number;
        detune: number;
        volume: number;
    };
}
