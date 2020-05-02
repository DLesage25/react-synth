const initialState = {
    pending: false,
    error: '',
};

export default (
    state = initialState,
    action: { type: string; payload: any }
) => {
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
