import { frequencies } from 'contants';
import { Dispatch } from 'redux';
import SynthEngine from 'modules/synthEngine';
import sinewaveOscilloscope from 'modules/oscilloscope/sinewaveOscilloscope';

export const keyPressed = (midiNumber: number, note: string) => {
    return async (dispatch: Dispatch, getState: any) => {
        const { synth, filter } = getState();

        const {
            synthType,
            synthFrequency,
            duration,
            detune,
            octave,
            masterGain,
        } = synth;

        const { filterGain, filterFrequency } = filter;

        const oscillatorFrequency =
            frequencies[midiNumber + octave * 12 - 48] +
            detune +
            (synthFrequency - 130.8);

        const synthEngine = new SynthEngine(synthType, 'lowpass');

        const runtimeOptions = {
            oscillatorFrequency,
            filterFrequency,
            filterGain,
            masterGain,
            duration,
        };

        synthEngine.playSound(runtimeOptions);

        const { analyser } = synthEngine.getModules();

        await sinewaveOscilloscope(640, 100, analyser);

        return dispatch({ type: 'SYNTH_KEY_PRESSED', payload: { note } });
    };
};
