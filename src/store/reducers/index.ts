import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import synth from './synth';

const rootReducer = (history: any) =>
    combineReducers({
        router: connectRouter(history),
        synth,
    });

export default rootReducer;
