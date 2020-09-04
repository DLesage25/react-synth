import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SimpleSelect from '../general/SimpleSelect';
import { SynthState } from '../../store/types';

const items = [
    { name: 'square', value: 'square' },
    { name: 'triangle', value: 'triangle' },
    { name: 'sine', value: 'sine' },
    { name: 'sawtooth', value: 'sawtooth' },
];

const OscillatorTypeControl = () => {
    const { oscillatorType } = useSelector(({ synth }: SynthState) => synth);
    const dispatch = useDispatch();

    return (
        <SimpleSelect
            title="Oscillator type"
            value={oscillatorType}
            handleChange={(e: React.ChangeEvent<{ value: unknown }>) => {
                dispatch({ type: 'SYNTH_TYPE', payload: e.target.value });
            }}
            items={items}
        />
    );
};

export default OscillatorTypeControl;
