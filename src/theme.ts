import { createTheme } from "@mui/material/styles";

export const colors = {
  primary: "#22007F",
  primaryHover: "#3100B6",
  primaryDisabled: "#C8C0DF",
  selected: "#04DDB3",
  black: "#353535",
  grey: "#64748B",
  lightGrey: "#F4F4F4",
  white: "#FFFFFF",
  lightBlue: "#EFF6FF",
};

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: colors.primary,
      dark: colors.primaryHover,
      light: colors.primaryDisabled,
      contrastText: colors.white,
    },

    secondary: {
      main: colors.selected,
    },

    text: {
      primary: colors.black,
      secondary: colors.grey,
    },

    background: {
      default: colors.white,
      paper: colors.lightGrey,
    },
    
    divider: "#D8DCE2",
  },

  typography: {
    fontFamily: "Open Sans, sans-serif",
  },

  shape: {
    borderRadius: 61,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 61,
          textTransform: "none",
          padding: "12px 20px",
          fontWeight: 600,
          height: "43px",
        },
      },
    },
  },
});

export default theme;
