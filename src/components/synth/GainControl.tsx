import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContinuousSlider from '../general/ContinuousSlider';
import { SynthState } from '../../store/types';
import CustomKnob from 'components/general/CustomKnob';
/**
 * https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/detune
 */
const GainControl = () => {
    const { masterGain } = useSelector(({ synth }: SynthState) => synth);
    const dispatch = useDispatch();
    const changeVolume = (newVal: number) => {
        dispatch({ type: 'SYNTH_GAIN', payload: newVal });
    };
    return (
        <CustomKnob
            valueName="Gain"
            value={masterGain}
            iconUrl="/assets/svgs/volume.svg"
            handleChange={changeVolume}
            max={10}
            min={1}
        />
    );
};

export default GainControl;
