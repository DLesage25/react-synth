import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        background: {
            default: '#2f3542',
        },
        primary: {
            main: '#cccccc',
        },
        secondary: {
            main: '#FB797F',
        },
        tonalOffset: 0.2,
        info: { main: '#fcfcfc' },
        text: { primary: '#252525' },
    },
    typography: {
        fontFamily: 'Quicksand',
    },
    overrides: {
        MuiInput: {
            underline: {
                '&:before': {
                    borderBottom: '1px solid rgba(255, 255, 255, 0.42)',
                },
                '&:hover': {
                    borderBottom: '1px solid rgba(131, 128, 128, 0.42)',
                },
            },
        },
        MuiSelect: {
            icon: {
                color: '#ccccc',
            },
        },
    },
});

export default theme;
