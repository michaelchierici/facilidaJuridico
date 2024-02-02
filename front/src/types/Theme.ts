export type Theme = typeof theme;
const theme = {
  colors: {
    background: "#1E1E1E",

    text_primary: "#5B5B5B",
    text_secondary: "#9C9C9C",

    button: "#242424",
    card: "#242424",

    success: "#1e1e",
    error: "#A92039",

    hover: "#9C9C9C",
  },
  font: {
    size: {
      sm: 1,
      md: 2,
      lg: 2.2,
    },
    weight: {
      light: 300,
      regular: 400,
      bold: 600,
    },
  },
};

export default theme;
