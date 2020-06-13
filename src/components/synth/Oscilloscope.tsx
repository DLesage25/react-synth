import React from 'react';

import { Grid } from '@material-ui/core';

const Oscilloscope = () => {
    return (
        <Grid item container xs={10} style={{ marginBottom: '20px' }}>
            <Grid
                item
                container
                justify="center"
                xs={12}
                style={{ display: 'flex' }}
            >
                <canvas className="visualizer" width="640" height="80"></canvas>
            </Grid>
        </Grid>
    );
};

export default Oscilloscope;
