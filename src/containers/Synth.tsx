import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Grid } from '@material-ui/core';

import 'styles/synth.css';

import ControlPanel from 'components/synth/ControlPanel';
import Keyboard from 'components/synth/Keyboard';

import { useKeysPress, useMedia } from '../hooks';
import { SynthState } from 'store/types';

const soundTypes = ['triangle', 'square', 'sine', 'sawtooth'];

const Synth = () => {
    const dispatch = useDispatch();
    const { octave, duration } = useSelector(({ synth }: SynthState) => synth);

    const largeSceen = useMedia('(min-width: 800px)');
    const [key] = useKeysPress();
    // control octave and filters
    React.useEffect(() => {
        if ('1234'.search(key) >= 0) {
            dispatch({
                type: 'SYNTH_TYPE',
                payload: soundTypes['1234'.search(key)],
            });
        } else if ('-z'.search(key) >= 0) {
            dispatch({
                type: 'SYNTH_OCTAVE',
                payload: Math.max(octave - 1, 0),
            });
        } else if ('=x'.search(key) >= 0) {
            dispatch({
                type: 'SYNTH_OCTAVE',
                payload: Math.min(octave + 1, 2),
            });
        } else if ('['.search(key) >= 0) {
            dispatch({
                type: 'SYNTH_DURATION',
                payload: Math.max(duration - 0.5, 0.5),
            });
        } else if (']'.search(key) >= 0) {
            dispatch({
                type: 'SYNTH_DURATION',
                payload: Math.min(duration + 0.5, 10),
            });
        }
    }, [key]);

    return (
        <Grid container alignContent="center" justify="center">
            <Grid
                item
                xs={6}
                container
                justify="center"
                style={{ display: 'flex', marginBottom: '70px' }}
            >
                <Typography variant="h1" color="primary">
                    Lydia
                </Typography>
            </Grid>
            <ControlPanel />
            <Keyboard />
        </Grid>
    );
};

export default Synth;
