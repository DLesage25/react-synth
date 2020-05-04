import React from 'react';
import Grid from '@material-ui/core/Grid';
import 'react-piano/dist/styles.css';
import '../../styles/piano.css';

const { Piano, KeyboardShortcuts, MidiNumbers } = require('react-piano');

const Keyboard = () => {
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
                    console.log({ midiNumber });
                    // Play a given note - see notes below
                }}
                stopNote={(midiNumber: any) => {
                    // Stop playing a given note - see notes below
                }}
                width={700}
                keyboardShortcuts={keyboardShortcuts}
            />
        </Grid>
    );
};

export default Keyboard;
