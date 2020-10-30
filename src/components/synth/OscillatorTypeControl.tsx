import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SynthState } from '../../store/types';
import { ButtonGroup, Button, Grid, Typography } from '@material-ui/core';

const items = [
    { value: 'sawtooth', imageUrl: '/assets/svgs/sawwave.svg' },
    { value: 'triangle', imageUrl: '/assets/svgs/trianglewave.svg' },
    { value: 'sine', imageUrl: '/assets/svgs/sinewave.svg' },
    { value: 'square', imageUrl: '/assets/svgs/squarewave.svg' },
];

const OptionImage = ({ imageUrl }: { imageUrl: string }) => (
    <img src={process.env.PUBLIC_URL + imageUrl} style={{ height: '35px' }} />
);

const OscillatorTypeControl = () => {
    const { oscillatorType } = useSelector(({ synth }: SynthState) => synth);
    const dispatch = useDispatch();

    const handleClick = (value: string) => {
        dispatch({ type: 'OSCILLATOR_TYPE', payload: value });
    };

    const getButtonColor = (match: string) =>
        oscillatorType === match ? 'secondary' : 'primary';

    return (
        <Grid
            item
            xs={12}
            direction="column"
            alignItems="center"
            style={{ display: 'flex' }}
            justify="center"
        >
            <ButtonGroup
                color="primary"
                aria-label="outlined primary button group"
                style={{ height: '40px', width: '170px' }}
            >
                {items.map(({ value, imageUrl }) => (
                    <Button
                        onClick={() => handleClick(value)}
                        color={getButtonColor(value)}
                    >
                        <OptionImage imageUrl={imageUrl} />
                    </Button>
                ))}
            </ButtonGroup>
            <Typography variant="subtitle1" color="primary">
                Oscillator Type
            </Typography>
        </Grid>
    );
};

export default OscillatorTypeControl;
