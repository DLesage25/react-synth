import { frequencies } from 'contants';
import { Dispatch } from 'redux';

export const keyPressed = (
    midiNumber: number,
    note: string,
    synthEngine: any
) => {
    return async (dispatch: Dispatch, getState: any) => {
        const { synth, filter } = getState();

        const { synthFrequency, duration, detune, octave, masterGain } = synth;

        const { filterGain, filterFrequency } = filter;

        const oscillatorFrequency =
            frequencies[midiNumber + octave * 12 - 48] +
            detune +
            (synthFrequency - 130.8);

        const runtimeOptions = {
            oscillatorFrequency,
            filterFrequency,
            filterGain,
            masterGain,
            duration,
        };

        synthEngine.playSound(runtimeOptions);

        const synthModules = synthEngine.getModules();

        // await sinewaveOscilloscope(640, 100, analyser);
        return dispatch({ type: 'SYNTH_KEY_PRESSED', payload: { note } });
    };
};
