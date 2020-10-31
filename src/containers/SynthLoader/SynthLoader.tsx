import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SynthState } from 'store/types';

import SynthEngine from 'modules/synthEngine';

import Synth from '../Synth';

const SynthLoader = () => {
    const { oscillatorType, oscillatorFrequency } = useSelector(
        ({ synth }: SynthState) => synth
    );
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
    }, [oscillatorType, oscillatorFrequency]);

    return <Synth synthEngine={synthEngine} />;
};

export default SynthLoader;
