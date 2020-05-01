const initialState = {
    pending: false,
    error: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'TEST_ACTION':
            return {
                ...state,
                pending: true,
                error: '',
            };
        default:
            return state;
    }
};
