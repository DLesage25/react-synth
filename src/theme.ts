import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        background: {
            paper: '#303030',
            default: '#fcfcfc',
        },
        secondary: {
            main: '#FB797F',
        },
        tonalOffset: 0.2,
    },
});

export default theme;
