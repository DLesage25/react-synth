import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { Knob, Pointer, Arc } from 'rc-knob';

const useStyles = makeStyles(() => ({
    knob: {
        margin: 'auto',
    },
}));

const FilterControls = () => {
    const classes = useStyles();

    return (
        <>
            <Grid item>
                <Knob
                    size={30}
                    angleOffset={220}
                    angleRange={280}
                    min={-10}
                    max={10}
                    steps={10}
                    onChange={(value: any) => console.log(value)}
                    className={classes.knob}
                >
                    <Pointer
                        width={2}
                        height={10}
                        radius={4}
                        type="rect"
                        color="#cccccc"
                    />
                    <Arc arcWidth={3} color="#e67e22" background="#fcfcfc" />
                </Knob>
                <Typography color="primary" variant="subtitle2">
                    Frequency
                </Typography>
            </Grid>
            <Grid item>
                <Knob
                    size={30}
                    angleOffset={220}
                    angleRange={280}
                    min={-10}
                    max={10}
                    steps={10}
                    onChange={(value: any) => console.log(value)}
                    className={classes.knob}
                >
                    <Pointer
                        width={2}
                        height={10}
                        radius={4}
                        type="rect"
                        color="#cccccc"
                    />
                    <Arc arcWidth={3} color="#e67e22" background="#fcfcfc" />
                </Knob>
                <Typography color="primary" variant="subtitle2">
                    Gain
                </Typography>
            </Grid>
        </>
    );
};

export default FilterControls;
