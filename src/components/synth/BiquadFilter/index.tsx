/// <reference path="../../../types/react-vis.d.ts"/>

import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import FilterGraph from './FilterGraph';
import FilterControls from './FilterControls';

const useStyles = makeStyles(() => ({
    filterContainer: {
        height: '150px',
        width: '345px',
        marginLeft: '14px',
        marginRight: '14px',
    },
}));

const FilterControl = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.filterContainer}>
            <Grid item container xs={9}>
                <Grid item>
                    <Typography color="primary">Biquad Filter</Typography>
                </Grid>
                <Grid item>
                    <FilterGraph />
                </Grid>
            </Grid>
            <Grid
                item
                container
                xs={3}
                direction="column"
                alignItems="center"
                justify="space-evenly"
            >
                <FilterControls />
            </Grid>
        </Grid>
    );
};

export default FilterControl;
