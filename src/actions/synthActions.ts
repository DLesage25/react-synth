import { frequencies } from 'contants';
import { Dispatch } from 'redux';
import SynthEngine from 'modules/synthEngine';

export const keyPressed = (midiNumber: number, note: string) => {
    return (dispatch: Dispatch, getState: any) => {
        const {
            type,
            duration,
            detune,
            octave,
            gain,
            frequency,
        } = getState().synth;
        // TODO - Translate frequencies from an array into an object
        // so that mapping can be on other octaveaws as well
        //TODO - detune causes a crash since there are no frequencies < 48 rn
        const grossFrequency =
            frequencies[midiNumber + octave * 12 - 48] +
            detune +
            (frequency - 130.8);

        const synthEngine = new SynthEngine(type, 'lowpass');

        const runtimeOptions = {
            oscillatorFrequency: grossFrequency,
            biquadFilterFrequency: 1000,
            biquadFilterGain: 1,
            gainValue: gain,
            duration,
        };

        synthEngine.playSound(runtimeOptions);

        return dispatch({ type: 'SYNTH_KEY_PRESSED', payload: { note } });
    };
};
