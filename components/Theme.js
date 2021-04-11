import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primaryLight: "rgb(255, 253, 249)",
    primaryGold: " rgb(238, 198, 104)",
    primaryDark: "rgb(26, 25, 30)",
  },
  fontSize: {
    small: "1rem",
    medium: "2rem",
    large: "3rem",
    xxlarge: "4rem",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
