import { createTheme } from "@mui/material/styles";

let theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#0D3B66",
            off: "#FBFFF1",
        },
        secondary: {
            // main: "#FF4724",
            main: "#0D3B66",
            // main: "#F95738",
        },
        background: {
            // default: "#fcf6f5",
            default: "#D3AC81",
            accent: "#ffeccd",
            dark: "#484041",
        },
        custom: {
            dark: "#484041",
            darkMuted: "#757575",
            light: "#fffceb",
            lightMuted: "#e6e6e6",
            // accent: "#7D1D3F", // maroon
            accent: "#252121",
        },
        text: {
            primary: "#272D2D",
            primaryMuted: "#757575",
            secondary: "#F6F8FF",
            secondaryMuted: "#cacaca",
        },
    },
    font: {
        // primaryMenu: "Gruppo",
        primaryMenu: "Times New Roman",
        // primary: "Raleway",
        primary: "Times New Roman",
        // secondary: "EB Garamond",
        secondary: "Times New Roman",
        // accent: "Alex Brush",
        accent: "Times New Roman",
        // accent: "Satisfy",
    },
});

theme = createTheme(theme, {
    border: `1px solid ${theme.palette.custom.accent}`,
    custom: {
        spacing: {
            small: "1rem",
            medium: "3rem",
            large: "4rem",
            xl: "8rem",
        },
    },
    typography: {
        h1: {
            fontFamily: theme.font.primary,
            // fontFamily: theme.font.secondary,
            color: theme.palette.custom.accent,
            // color: theme.palette.primary.off,
            // fontWeight: "900",
            lineHeight: ".85em",
            fontSize: "3.5rem",
            letterSpacing: ".025em",
            fontWeight: "600",
        },
        h2: {
            color: theme.palette.custom.dark,
            fontFamily: theme.font.secondary,
            // fontWeight: "600",
            lineHeight: "1em",
            fontSize: "clamp(1.5rem, 2.3vw, 7rem)",
            letterSpacing: ".025em",
        },
        h3: {
            color: theme.palette.custom.accent,
            fontFamily: theme.font.secondary,
            lineHeight: ".85em",
            // letterSpacing: ".025em",
            fontSize: "3rem",
            fontWeight: "600",
            textTransform: "uppercase",
        },
        h4: {
            color: theme.palette.custom.dark,
            fontFamily: theme.font.secondary,
            textTransform: "uppercase",
            fontSize: "1rem",
            fontWeight: "400",
        },
        h5: {
            fontFamily: theme.font.secondary,
            fontSize: "1.75rem",
            fontWeight: "600",
        },
        h6: {
            fontWeight: "650",
            fontFamily: theme.font.accent,
            fontSize: "3rem",
            lineHeight: "3rem",
            // fontSize: "2.25rem", //Satisfy
        },

        subtitle1: {
            fontFamily: theme.font.primary,
            fontWeight: "400",
            color: theme.palette.custom.dark,
            fontSize: "1.25rem",
        },
        subtitle2: {
            fontFamily: theme.font.primary,
            fontWeight: "400",
            fontSize: "1.25rem",
            color: theme.palette.custom.dark,
        },
        body1: {
            fontFamily: theme.font.primary,
            fontWeight: "400",
            fontSize: "1rem",
            lineHeight: "1.5em",
        },
        body2: {
            fontFamily: theme.font.primaryMenu,
            fontSize: "1.5rem",
            lineHeight: "1.25em",
            color: theme.palette.custom.dark,
            textAlign: "center",
        },
        caption: {
            color: theme.palette.custom.darkMuted,
            fontSize: ".75rem",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "0",
                    whiteSpace: "nowrap",
                    minWidth: "max-content",
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.secondary.main,
                    color: "white",
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    // fontFamily: theme.typography.theme.accent,
                    fontSize: "1rem",
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    // fontFamily: theme.typography.theme.accent,
                    color: theme.palette.secondary.main,
                },
            },
        },
    },
});

export default theme;
