import { frequencies } from 'contants';
import { Dispatch } from 'redux';
import SynthEngine from 'modules/synthEngine';

export const keyPressed = (midiNumber: number, note: string) => {
    return (dispatch: Dispatch, getState: any) => {
        const {
            synthType,
            synthFrequency,
            duration,
            detune,
            octave,
            masterGain,
        } = getState().synth;
        const oscillatorFrequency =
            frequencies[midiNumber + octave * 12 - 48] +
            detune +
            (synthFrequency - 130.8);

        const synthEngine = new SynthEngine(synthType, 'lowpass');

        const runtimeOptions = {
            oscillatorFrequency,
            biquadFilterFrequency: 1000,
            biquadFilterGain: 1,
            masterGain,
            duration,
        };

        synthEngine.playSound(runtimeOptions);

        return dispatch({ type: 'SYNTH_KEY_PRESSED', payload: { note } });
    };
};
