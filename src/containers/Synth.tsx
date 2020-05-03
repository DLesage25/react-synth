import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Grid } from '@material-ui/core';

import NumericControl from '../components/synth/NumericControl';
import SoundTypeControl from '../components/synth/SoundTypeControl';
// import ButtonBox from './components/ButtonBox';
// import Footer from './components/Footer';

import '../styles/synth.css';

import ControlPanel from '../components/synth/ControlPanel';

import { useKeysPress, useMedia } from '../hooks';
import { SynthState } from '../store/types';

const soundTypes = ['triangle', 'square', 'sine', 'sawtooth'];

const Separator = () => <div className="separator" />;

const Synth = () => {
    const dispatch = useDispatch();
    const { type, octave, duration } = useSelector(
        ({ synth }: SynthState) => synth
    );

    const largeSceen = useMedia('(min-width: 800px)');
    const [key] = useKeysPress();
    // const [type, setType] = React.useState('triangle');
    // const [octave, setOctave] = React.useState(0);
    // const [duration, setDuration] = React.useState(1.5);

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
                payload: Math.max(octave - 1, -4),
            });
        } else if ('=x'.search(key) >= 0) {
            dispatch({
                type: 'SYNTH_OCTAVE',
                payload: Math.min(octave + 1, 5),
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

            {/* <SoundTypeControl
                active={type}
                onClick={(payload: any) => {
                    dispatch({ type: 'SYNTH_TYPE', payload });
                }}
                            <Separator />
            /> */}

            <ControlPanel />
            {/* 
                <FrequencyControl />
                <NumericControl
                min={-4}
                max={5}
                increment={1}
                value={octave}
                setValue={(payload: any) => {
                    dispatch({ type: 'SYNTH_OCTAVE', payload });
                }}
                message="this is octave control"
            />
            <NumericControl
                min={0.5}
                max={10}
                increment={0.5}
                value={duration}
                setValue={(payload: any) => {
                    dispatch({ type: 'SYNTH_DURATION', payload });
                }}
                message="sound duration control"
            />
             <ButtonBox showMessages={largeSceen} />
            <Footer />  */}
        </Grid>
    );
};

export default Synth;
