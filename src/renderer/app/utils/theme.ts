import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            paper: '#FFFFFF',
            default: '#D2ECEB',

        },
        primary: {
            main: '#000',
        },
        secondary: {
            main: '#97A8FF',
        },
        error: {
            main: '#CC5555',
        },
        success: {
            main: '#69BA95',
        },
        text: {
            primary: '#000000',
            secondary: '#7E7E7E',
            disabled: '#A0A0AA',
        },
        comp:{
            nav:{
                bell: {
                    bg: '#E7E7E7',
                    color: '#FFF'
                },
                windowControls: {
                    primary: '#ff7569',
                    secondary: '#DFDFDF',
                }
            },
            settings:{
                bg: '#F0FAFF',
                textField: '#FFFFFF10'

            }
        }
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            paper: '#242424',
            default: '#121212',
        },
        primary: {
            main: '#FFF',
        },
        secondary: {
            main: '#BB86FC',
        },
        error: {
            main: '#CC5555',
        },
        success: {
            main: '#00A95C',
        },
        text: {
            primary: '#E4E4E4',
            secondary: '#838383',
            "disabled": '#FFFFFF25',
        },
        comp: {
            nav:{
                bell:{
                    bg:'#747474',
                    color:'#00000054'
                },
                windowControls: {
                    primary: '#ff7569',
                    secondary: '#3A3A3A',
                }
            },
            settings: {
                bg: '#151515',
                textField: '#00000010'
            }
        }
    },

});