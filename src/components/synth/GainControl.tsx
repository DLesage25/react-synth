import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContinuousSlider from '../general/ContinuousSlider';
import { SynthState } from '../../store/types';
/**
 * https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/detune
 */
const GainControl = () => {
    const { gain } = useSelector(({ synth }: SynthState) => synth);
    const dispatch = useDispatch();
    const changeVolume = (event: any, newVal: number) => {
        dispatch({ type: 'SYNTH_GAIN', payload: newVal });
    };
    return (
        <ContinuousSlider
            imageSrc={process.env.PUBLIC_URL + '/assets/svgs/volume.svg'}
            value={gain}
            handleChange={changeVolume}
            minIcon="arrow_downward"
            maxIcon="arrow_upward"
            min={0}
            max={10}
        />
    );
};

export default GainControl;
