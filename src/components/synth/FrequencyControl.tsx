import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContinuousSlider from '../general/ContinuousSlider';
import { SynthState } from '../../store/types';

const FrequencyControl = () => {
    const { oscillatorFrequency } = useSelector(
        ({ synth }: SynthState) => synth
    );
    const dispatch = useDispatch();
    const changeFrequency = (event: any, newVal: number) => {
        dispatch({ type: 'SYNTH_FREQUENCY', payload: newVal });
    };
    return (
        <ContinuousSlider
            imageSrc={process.env.PUBLIC_URL + '/assets/svgs/frequency.svg'}
            value={oscillatorFrequency}
            handleChange={changeFrequency}
            minIcon="arrow_downward"
            maxIcon="arrow_upward"
            min={130.8}
            max={10000}
        />
    );
};

export default FrequencyControl;
