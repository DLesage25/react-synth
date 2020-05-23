const initialState = {
    pending: false,
    type: 'triangle',
    octave: 0,
    duration: 1.5,
    frequency: 440,
    detune: 0,
    gain: 1,
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
                type: action.payload,
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
                frequency: action.payload,
            };
        case 'SYNTH_DETUNE':
            return {
                ...state,
                detune: action.payload,
            };
        case 'SYNTH_GAIN':
            return {
                ...state,
                gain: action.payload,
            };
        default:
            return state;
    }
};
