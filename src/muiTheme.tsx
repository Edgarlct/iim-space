import {createTheme, ThemeOptions} from "@mui/material";

export const muiTheme: ThemeOptions = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: "#ffffff"
        },
        primary: {
            main: '#70A6C7',
        },
        secondary: {
            main: '#8338EC',
        },
        error: {
            main: '#cc201d',
        },
        warning: {
            main: '#f57f1e',
        },
        success: {
            main: "#3bfc10"
        },
        info: {
            main: "#FFFFFF"
        }
    },
    typography: {
        h1: {
            fontSize: "3.75rem",
            fontWeight: 400,
            lineHeight: 1.2,
            textTransform: "uppercase",
            fontFamily: "Lexend Zetta",
            textAlign: "center"
        },
        h2: {
            fontSize: "1.25rem",
            fontWeight: 500,
            lineHeight: 1.5,
            fontFamily: "IBM Plex Mono",
            letterSpacing: "0.0075em",
        },
        h3: {
            fontSize: "1.25rem",
            fontWeight: 300,
            fontFamily: "IBM Plex Mono",
            lineHeight: 1.5,
            letterSpacing: "0em"
        },
        h4: {
            fontSize: "1rem",
            fontWeight: 400,
            fontFamily: "IBM Plex Mono",
            color: "#FFFFFF",
        },
        h5: {
            fontSize: "1rem",
            color: "#FFFFFF",
            fontWeight: 700,
            fontFamily: "IBM Plex Mono",
        },
        h6: {
            fontSize: "2rem",
            fontWeight: 400,
            color: "#FFFFFF",
            fontFamily: "Lexend Zetta",
        },
        button: {
            fontSize: "1rem",
            fontWeight: 600,
            textTransform: "uppercase",
            fontFamily: "IBM Plex Mono",
            color: "#70A6C7",
        },
        subtitle2: {
            fontSize: "1.5rem",
            color: "#70A6C7",
            fontWeight: 700,
            fontFamily: "IBM Plex Mono",
        },
        subtitle1: {
            fontSize: "1rem",
            color: "#70A6C7",
            fontWeight: 700,
            fontFamily: "IBM Plex Mono",
        },
        body1: {
            fontSize: "1rem",
            color: "#FFFFFF",
            fontWeight: 400,
            fontFamily: "Lexend Zetta",
        }
    }
});
