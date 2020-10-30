import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SynthState } from '../../../store/types';
import CustomKnob from 'components/general/CustomKnob';

const FrequencyControl = () => {
    const { oscillatorFrequency } = useSelector(
        ({ synth }: SynthState) => synth
    );
    const dispatch = useDispatch();
    const changeFrequency = (newVal: number) => {
        dispatch({ type: 'SYNTH_FREQUENCY', payload: newVal });
    };
    return (
        <CustomKnob
            value={oscillatorFrequency}
            valueName="Frequency"
            iconUrl="/assets/svgs/frequency.svg"
            handleChange={changeFrequency}
            min={100}
            max={100}
        />
    );
};

export default FrequencyControl;
