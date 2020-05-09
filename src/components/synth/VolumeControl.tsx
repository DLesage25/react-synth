import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContinuousSlider from '../general/ContinuousSlider';
import { SynthState } from '../../store/types';
/**
 * https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/detune
 */
const VolumeControl = () => {
    const { volume } = useSelector(({ synth }: SynthState) => synth);
    const dispatch = useDispatch();
    const changeVolume = (event: any, newVal: number) => {
        dispatch({ type: 'SYNTH_VOLUME', payload: newVal });
    };
    return (
        <ContinuousSlider
            imageSrc="./assets/svgs/volume.svg"
            value={volume}
            handleChange={changeVolume}
            minIcon="arrow_downward"
            maxIcon="arrow_upward"
            min={-10}
            max={10}
        />
    );
};

export default VolumeControl;
