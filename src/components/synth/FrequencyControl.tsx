import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContinuousSlider from '../general/ContinuousSlider';
import { SynthState } from '../../store/types';

const FrequencyControl = () => {
    const { frequency } = useSelector(({ synth }: SynthState) => synth);
    const dispatch = useDispatch();
    const changeFrequency = (event: any, newVal: number) => {
        dispatch({ type: 'SYNTH_FREQUENCY', payload: newVal });
    };
    return (
        <ContinuousSlider
            imageSrc="./assets/svgs/frequency.svg"
            value={frequency}
            handleChange={changeFrequency}
            minIcon="arrow_downward"
            maxIcon="arrow_upward"
            min={440}
            max={10000}
        />
    );
};

export default FrequencyControl;
