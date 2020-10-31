import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SynthState } from '../../../store/types';
import CustomKnob from '../../general/CustomKnob';
/**
 * https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/detune
 */
const DetuneControl = () => {
    const { detune } = useSelector(({ synth }: SynthState) => synth);
    const dispatch = useDispatch();
    const changeFrequency = (newVal: number) => {
        dispatch({ type: 'SYNTH_DETUNE', payload: newVal });
    };

    return (
        <CustomKnob
            valueName="Detune"
            value={detune}
            iconUrl="/assets/svgs/detune.svg"
            handleChange={changeFrequency}
        />
    );
};

export default DetuneControl;
