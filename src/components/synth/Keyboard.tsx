import React from 'react';
import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import 'react-piano/dist/styles.css';
import 'styles/piano.css';
import { keyPressed } from 'actions/synthActions';

const { Piano, KeyboardShortcuts, MidiNumbers } = require('react-piano');

const Keyboard = () => {
    const dispatch = useDispatch();
    const firstNote = MidiNumbers.fromNote('c3');
    const lastNote = MidiNumbers.fromNote('f5');
    const keyboardShortcuts = KeyboardShortcuts.create({
        firstNote: firstNote,
        lastNote: lastNote,
        keyboardConfig: KeyboardShortcuts.HOME_ROW,
    });
    return (
        <Grid item>
            <Piano
                noteRange={{ first: firstNote, last: lastNote }}
                playNote={(midiNumber: any) => {
                    const { note } = MidiNumbers.getAttributes(midiNumber);
                    dispatch(keyPressed(midiNumber, note));
                }}
                width={1000}
                keyboardShortcuts={keyboardShortcuts}
            />
        </Grid>
    );
};

export default Keyboard;
