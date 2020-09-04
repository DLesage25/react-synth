import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SynthState } from 'store/types';

import SynthEngine from 'modules/synthEngine';

import Synth from '../Synth';

export default () => {
    const [modules, setModules]: [any, any] = useState(null);

    const {
        octave,
        duration,
        oscillatorType,
        oscillatorFrequency,
    } = useSelector(({ synth }: SynthState) => synth);
    const { filterFrequency, filterGain } = useSelector(
        ({ filter }: any) => filter
    );

    const synthEngine = new SynthEngine(oscillatorType, 'lowpass');

    useEffect(() => {
        synthEngine.initializeEngine({
            oscillatorFrequency,
            filterFrequency,
            filterGain,
        });
        setModules(synthEngine.getModules);
    }, [oscillatorType, oscillatorFrequency]);

    return <Synth synthEngine={synthEngine} />;
};
