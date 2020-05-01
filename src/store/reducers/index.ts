import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import dummyReducer from './dummyReducer';

const rootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        dummyReducer,
    });

export default rootReducer;
