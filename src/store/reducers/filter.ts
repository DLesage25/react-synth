const initialState = {
    pending: false,
    filterType: 'lowpass',
    filterFrequency: 17000,
    filterGain: -10,
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
                filterGain: action.payload,
            };
        case 'FILTER_FREQUENCY':
            return {
                ...state,
                filterFrequency: action.payload,
            };
        default:
            return state;
    }
};
