import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import FrequencyControl from './FrequencyControl';
import DetuneControl from './DetuneControl';
import OscillatorTypeControl from './OscillatorTypeControl';
import GainControl from './GainControl';
import BiquadFilter from './BiquadFilter';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    controlPanelRow: {
        height: '140px',
    },
}));

const ControlPanel = () => {
    const classes = useStyles();
    return (
        <Grid item container xs={6} style={{ marginBottom: '20px' }}>
            <Grid
                item
                container
                justify="center"
                xs={12}
                style={{ display: 'flex' }}
            >
                <Grid
                    item
                    container
                    xs={3}
                    justify="center"
                    style={{ display: 'flex', marginBottom: '20px' }}
                >
                    <Typography variant="h5" color="primary">
                        Control Panel
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container className={classes.controlPanelRow}>
                <Grid item xs={12}>
                    <OscillatorTypeControl />
                </Grid>
            </Grid>
            <Grid
                item
                container
                className={classes.controlPanelRow}
                style={{ marginBottom: '50px' }}
            >
                <Grid item xs={4}>
                    <DetuneControl />
                </Grid>
                <Grid item xs={4}>
                    <FrequencyControl />
                </Grid>
                <Grid item xs={4}>
                    <GainControl />
                </Grid>
            </Grid>
            <Grid item container>
                <Grid item xs={12}>
                    <BiquadFilter />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ControlPanel;
