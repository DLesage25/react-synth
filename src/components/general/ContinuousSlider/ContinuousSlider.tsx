import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';

export interface SliderProps {
    title?: string;
    imageSrc?: string;
    handleChange: any;
    value: number;
    minIcon: string;
    maxIcon: string;
    max: number;
    min: number;
}

const ValueLabelComponent = ({ children, open, value }: any) => {
    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
};

ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
};

const ContinuousSlider = ({
    title,
    imageSrc,
    value,
    handleChange,
    minIcon,
    maxIcon,
    max,
    min,
}: SliderProps) => {
    return (
        <div style={{ marginLeft: '14px', marginRight: '14px' }}>
            <Grid container>
                <Grid item container justify="center">
                    {title ? (
                        <Typography
                            id={`continuous-slider-${title}`}
                            color="primary"
                            gutterBottom
                        >
                            {title}
                        </Typography>
                    ) : (
                        <img
                            src={imageSrc}
                            alt="Slider"
                            style={{
                                width: '30px',
                            }}
                        />
                    )}
                </Grid>
                <Grid container spacing={2}>
                    <Grid item>
                        <Icon color="primary"> {minIcon} </Icon>
                    </Grid>
                    <Grid item xs>
                        <Slider
                            value={value}
                            onChange={handleChange}
                            aria-labelledby="continuous-slider"
                            data-testid="continuous-slider"
                            min={min}
                            max={max}
                            valueLabelDisplay="auto"
                            ValueLabelComponent={ValueLabelComponent}
                        />
                    </Grid>
                    <Grid item>
                        <Icon color="primary"> {maxIcon} </Icon>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default ContinuousSlider;
