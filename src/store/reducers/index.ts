import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import synth from './synth';
import filter from './filter';

const rootReducer = (history: any) =>
    combineReducers({
        router: connectRouter(history),
        synth,
        filter,
    });

export default rootReducer;
