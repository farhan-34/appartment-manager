import { blue, grey, orange } from "@mui/material/colors";

const mode = 'light'

export const getTheme = () => ({
    palette: {
        mode,
        ...(mode === 'light' ? {
            primary: {
                main: '#000',
                constrastText: '#fff'
            },
            secondary: blue,
            text: {
                primary: '#000',
                secondary: grey[900],
            },
            background: {
                paper: '#F5F5F7'
            },
            divider: grey[700]
        } : {
            primary: {
                main: grey[400],
                contrastText: '#000'
            },
                secondary: blue[500],
            text: {
                primary: '#fff',
                secondary: grey[400],
            },
            divider: grey[700],
            background: {
                default: '#000000',
                paper: grey[900]
            }
        })
    },
    components: {
        MuiButton: {
            defaultProps:{
                variant: "contained",
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: 'bold'
                }
            }
        },
        MuiFab: {
            styleOverrides: {
                root: {
                    position: 'fixed',
                    bottom: '2rem',
                    right: '2rem',
                }
            }
        }
    }
});

