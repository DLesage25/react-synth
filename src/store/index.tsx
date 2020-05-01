import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducers from './reducers';
import Logger from './logger';
import history from './history';

const middlewares =
    process.env.NODE_ENV === 'production'
        ? applyMiddleware(promise, ReduxPromise, ReduxThunk)
        : applyMiddleware(promise, ReduxPromise, ReduxThunk, Logger);

const configureStore = (initialState) => {
    const store = createStore(reducers(history), initialState, middlewares);
    if (module.hot) {
        module.hot.accept('./reducers', () => {
            // eslint-disable-next-line global-require
            const nextRootReducer = require('./reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};

const store = configureStore();
export default store;
