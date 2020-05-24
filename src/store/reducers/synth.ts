const initialState = {
    pending: false,
    synthType: 'triangle',
    synthFrequency: 130.8,
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
        case 'SYNTH_TYPE':
            return {
                ...state,
                synthType: action.payload,
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
        case 'SYNTH_FREQUENCY':
            return {
                ...state,
                synthFrequency: action.payload,
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
