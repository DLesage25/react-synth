import { frequencies } from 'contants';
import { Dispatch } from 'redux';
import Oscillator from 'modules/oscillator';

export const keyPressed = (midiNumber: number, note: string) => {
    return (dispatch: Dispatch, getState: any) => {
        // TODO - Translate frequencies from an array into an object
        // so that mapping can be on other octaveaws as well
        const frequency = frequencies[midiNumber - 48];

        const oscillator = new Oscillator('triangle', 1);

        oscillator.playSound(frequency);
        return true;
    };
};
