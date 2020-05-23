import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import FrequencyControl from './FrequencyControl';
import DetuneControl from './DetuneControl';
import OscillatorTypeControl from './OscillatorTypeControl';
import GainControl from './GainControl';

const ControlPanel = () => {
    return (
        <Grid item container xs={10} style={{ marginBottom: '20px' }}>
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
            <Grid item container>
                <Grid item xs={3}>
                    <OscillatorTypeControl />
                </Grid>
                <Grid item xs={3}>
                    <FrequencyControl />
                </Grid>
                <Grid item xs={3}>
                    <DetuneControl />
                </Grid>
                <Grid item xs={3}>
                    <GainControl />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ControlPanel;
