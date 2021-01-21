// import { extendTheme } from "@chakra-ui/react";
// import { themeValues } from "./themeValues";
import theme, { Theme } from "@chakra-ui/theme";
import { Fonts } from "./Fonts";

// Let's say you want to add custom colors
const chakraTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    custom: {
      orange7: "#fc6400",
      red8: "#d2202f",
      fuschia8: "#bb01cc"
    }
  },
  fonts: {
    ...theme.fonts,
    title: "'Space Grotesk', sans-serif",
    regtext: "'DM Mono', monospace",
    nav: "'DM Mono', monospace"
  },
  textStyles: {
    title: {
      textAlign: "center",
      fontSize: ["4xl"],
      fontFamily: "title",
      fontStyle: "italic",
      lineHeight: "100%",
      color: "red.500"
    },
    h1: {
      // you can also use responsive styles
      fontSize: ["48px", "72px"],
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-20%",
      fontFamily: "title"
    },
    h2: {
      fontSize: ["36px", "48px"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%"
    },
    nav: {
      fontSize: ["md", "lg"],
      fontFamily: "nav",
      fontStyle: "italic",
      color: "purple.500"
    }
  }
};

export default chakraTheme;
