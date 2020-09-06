import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './theme';

import SynthLoader from './containers/SynthLoader';
import './App.css';

const App = ({ store, history }: { store: any; history: any }) => {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Router history={history}>
                        <SynthLoader />
                    </Router>
                </ConnectedRouter>
            </Provider>
        </MuiThemeProvider>
    );
};

export default App;
