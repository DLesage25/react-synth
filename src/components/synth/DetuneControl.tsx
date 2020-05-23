import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContinuousSlider from '../general/ContinuousSlider';
import { SynthState } from '../../store/types';
/**
 * https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/detune
 */
const DetuneControl = () => {
    const { detune } = useSelector(({ synth }: SynthState) => synth);
    const dispatch = useDispatch();
    const changeFrequency = (event: any, newVal: number) => {
        dispatch({ type: 'SYNTH_DETUNE', payload: newVal });
    };
    return (
        <ContinuousSlider
            imageSrc="./assets/svgs/detune.svg"
            value={detune}
            handleChange={changeFrequency}
            minIcon="arrow_downward"
            maxIcon="arrow_upward"
            min={-10}
            max={10}
        />
    );
};

export default DetuneControl;
