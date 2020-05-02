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
