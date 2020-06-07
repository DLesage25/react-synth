/// <reference path="../../types/react-vis.d.ts"/>

import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import '../../../node_modules/react-vis/dist/style.css';
import {
    XYPlot,
    VerticalGridLines,
    HorizontalGridLines,
    XAxis,
    YAxis,
    LineSeries,
} from 'react-vis';

import { Knob, Pointer, Arc } from 'rc-knob';

const useStyles = makeStyles(() => ({
    filterContainer: {
        height: '150px',
        width: '345px',
        marginLeft: '14px',
        marginRight: '14px',
    },
    knob: {
        margin: 'auto',
    },
}));

const FilterControl = () => {
    const classes = useStyles();

    const data = [
        { x: 0, y: 0 },
        { x: 2000, y: 0 },
        { x: 4000, y: 0 },
        { x: 6000, y: 0 },
        { x: 8000, y: 0 },
        { x: 10000, y: 0 },
        { x: 12000, y: 0 },
        { x: 14000, y: 0 },
        { x: 16000, y: 0 },
        { x: 18000, y: -5 },
        { x: 20000, y: -10 },
    ];
    return (
        <Grid container className={classes.filterContainer}>
            <Grid item container xs={9}>
                <Grid item xs={12}>
                    <Typography color="primary">Biquad Filter</Typography>
                </Grid>
                <Grid item xs={12}>
                    <XYPlot
                        height={100}
                        width={220}
                        xDomain={[20, 20000]}
                        yDomain={[-10, 10]}
                    >
                        <XAxis
                            tickFormat={(v) => `${v / 1000}K Hz`}
                            style={{ stroke: '#fcfcfc' }}
                        />
                        <YAxis style={{ stroke: '#fcfcfc' }} />
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <LineSeries
                            data={data}
                            curve={'curveMonotoneX'}
                            color="#e67e22"
                        />
                    </XYPlot>
                </Grid>
            </Grid>
            <Grid item container xs={3} direction="column" alignItems="center">
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
                        <Arc
                            arcWidth={3}
                            color="#e67e22"
                            background="#fcfcfc"
                        />
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
                        <Arc
                            arcWidth={3}
                            color="#e67e22"
                            background="#fcfcfc"
                        />
                    </Knob>
                    <Typography color="primary" variant="subtitle2">
                        Gain
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default FilterControl;
