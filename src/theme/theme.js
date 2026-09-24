import { createTheme } from "@mui/material/styles";

// LoanGuard brand palette
export const brand = {
  primary: "#0D1B2A",
  secondary: "#1B263B",
  accent: "#415A77",
  supporting: "#778DA9",
  background: "#F5F7FA",
  surface: "#FFFFFF",
  textPrimary: "#172033",
  textMuted: "#667085",
};

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: brand.primary,
      light: brand.accent,
      dark: "#08121C",
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: brand.accent,
      light: brand.supporting,
      dark: brand.secondary,
      contrastText: "#FFFFFF",
    },

    success: {
      main: "#2E7D32",
      light: "#E8F5E9",
      dark: "#1B5E20",
    },

    warning: {
      main: "#ED6C02",
      light: "#FFF4E5",
      dark: "#B45309",
    },

    error: {
      main: "#D32F2F",
      light: "#FDECEA",
      dark: "#9A1F1F",
    },

    background: {
      default: brand.background,
      paper: brand.surface,
    },

    text: {
      primary: brand.textPrimary,
      secondary: brand.textMuted,
    },

    divider: "rgba(23, 32, 51, 0.08)",
  },

  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica Neue', Arial, sans-serif",

    h1: { fontWeight: 800, letterSpacing: "-0.02em" },
    h2: { fontWeight: 800, letterSpacing: "-0.02em" },
    h3: { fontWeight: 700, letterSpacing: "-0.01em" },
    h4: { fontWeight: 700, letterSpacing: "-0.01em" },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
    subtitle1: { fontWeight: 600 },
    subtitle2: { fontWeight: 600, color: brand.textMuted },
    body1: { lineHeight: 1.65 },
    body2: { lineHeight: 1.6, color: brand.textMuted },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
    overline: {
      letterSpacing: "0.08em",
      fontWeight: 700,
    },
  },

  shape: {
    borderRadius: 14,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": { boxSizing: "border-box" },
        html: { scrollBehavior: "smooth" },
        body: { backgroundColor: brand.background },
        "::selection": {
          backgroundColor: "rgba(65,90,119,0.25)",
        },
        ".fade-in": {
          animation: "loanguard-fade-in 0.5s ease both",
        },
        "@keyframes loanguard-fade-in": {
          from: { opacity: 0, transform: "translateY(8px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        "@media (prefers-reduced-motion: reduce)": {
          "*": {
            animationDuration: "0.001ms !important",
            transitionDuration: "0.001ms !important",
          },
        },
      },
    },

    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 10,
          paddingInline: 20,
          paddingBlock: 10,
          transition: "transform 0.18s ease, box-shadow 0.18s ease",
        },
        containedPrimary: {
          "&:hover": {
            transform: "translateY(-1px)",
            boxShadow: "0 10px 24px rgba(13,27,42,0.22)",
          },
        },
        outlined: {
          borderWidth: 1.5,
          "&:hover": { borderWidth: 1.5 },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          border: "1px solid rgba(23,32,51,0.06)",
          boxShadow: "0 2px 10px rgba(13,27,42,0.05)",
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 600 },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: "none" },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: { boxShadow: "none" },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: { borderRadius: 10 },
      },
    },
  },
});

export default theme;
