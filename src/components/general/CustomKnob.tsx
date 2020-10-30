import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Knob, Scale } from 'rc-knob';

interface CustomKobProps {
    handleChange: (...arg: any) => void;
    valueName: string;
    value: number;
    iconUrl: string;
    max?: number;
    min?: number;
}

const CustomKnob = ({
    handleChange,
    valueName,
    value,
    iconUrl,
    max = 100,
    min = 0,
}: CustomKobProps) => {
    return (
        <Grid
            item
            container
            direction="column"
            alignItems="center"
            style={{ display: 'flex' }}
            data-testid={`knob-${valueName.toLowerCase()}`}
        >
            <Knob
                size={90}
                angleOffset={220}
                angleRange={280}
                steps={10}
                min={min}
                max={max}
                onChange={handleChange}
                star
            >
                <Scale
                    tickWidth={2}
                    tickHeight={2}
                    radius={45}
                    color="#180094"
                    activeColor="#FC5A96"
                />
            </Knob>
            <img
                style={{ height: '20px', marginRight: '10px' }}
                src={process.env.PUBLIC_URL + iconUrl}
            />
            <Typography variant="subtitle1" color="primary">
                {valueName} - {value ? value.toFixed(2) : 0}
            </Typography>
        </Grid>
    );
};

export default CustomKnob;
