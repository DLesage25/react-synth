const initialState = {
    pending: false,
    oscillatorType: 'sawtooth',
    oscillatorFrequency: 130.8,
    detune: 0,
    octave: 0,
    duration: 1.5,
    masterGain: 1,
    error: '',
};

export default (
    state = initialState,
    action: { type: string; payload: any }
) => {
    switch (action.type) {
        case 'OSCILLATOR_TYPE':
            return {
                ...state,
                oscillatorType: action.payload,
            };
        case 'SYNTH_OCTAVE':
            return {
                ...state,
                octave: action.payload,
            };
        case 'SYNTH_DURATION':
            return {
                ...state,
                duration: action.payload,
            };
        case 'OSCILLATOR_FREQUENCY':
            return {
                ...state,
                oscillatorFrequency: action.payload,
            };
        case 'SYNTH_DETUNE':
            return {
                ...state,
                detune: action.payload,
            };
        case 'SYNTH_GAIN':
            return {
                ...state,
                masterGain: action.payload,
            };
        default:
            return state;
    }
};
