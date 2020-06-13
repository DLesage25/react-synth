const initialState = {
    pending: false,
    type: 'lowpass',
    frequency: 17000,
    gain: -10,
    error: '',
};

export default (
    state = initialState,
    action: { type: string; payload: any }
) => {
    switch (action.type) {
        case 'FILTER_GAIN':
            return {
                ...state,
                gain: action.payload,
            };
        case 'FILTER_FREQUENCY':
            return {
                ...state,
                frequency: action.payload,
            };
        default:
            return state;
    }
};
