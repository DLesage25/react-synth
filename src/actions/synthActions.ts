import { frequencies } from '../constants';
import { Dispatch } from 'redux';

export const keyPressed = (
    midiNumber: number,
    note: string,
    synthEngine: any
) => {
    return async (dispatch: Dispatch, getState: any) => {
        const { synth, filter } = getState();

        const {
            oscillatorFrequency,
            duration,
            detune,
            octave,
            masterGain,
        } = synth;

        const { filterGain, filterFrequency } = filter;

        const formattedFrequency =
            frequencies[midiNumber + octave * 12 - 48] +
            detune +
            (oscillatorFrequency - 130.8);

        const runtimeOptions = {
            oscillatorFrequency: formattedFrequency,
            filterFrequency,
            filterGain,
            masterGain,
            duration,
        };

        const isSynthInit = synthEngine.isInitialized();

        if (!isSynthInit) synthEngine.initializeEngine(runtimeOptions);

        synthEngine.playSound(runtimeOptions);

        return dispatch({ type: 'SYNTH_KEY_PRESSED', payload: { note } });
    };
};
