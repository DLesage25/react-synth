import React from 'react';
import ReactDOM from 'react-dom';

import history from './store/history';
import store from './store';

import App from './App';

ReactDOM.render(
    <App store={store} history={history} />,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./App', () => {
        ReactDOM.render(
            <App store={store} history={history} />,
            document.getElementById('app')
        );
    });
}

//TODO - work on numeric controls and wire them t redux store
//TODO - get keyboard control
