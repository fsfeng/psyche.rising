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
      fuschia8: "#bb01cc",
      violetblue: "#5A20CB",
      brightblue: "#0218fe"
    }
  },
  fonts: {
    ...theme.fonts,
    title: "Space Grotesk",
    nav: "Fraunces",
    text: "Cutive Mono"
  },
  textStyles: {
    title: {
      textAlign: "center",
      fontSize: ["5xl"],
      fontFamily: "title",
      fontStyle: "italic",
      lineHeight: "100%",
      color: "red.500"
    },
    nav: {
      fontSize: ["lg", "xl"],
      fontFamily: "nav",
      fontStyle: "italic",
      fontWeight: "bold",
      color: "custom.brightblue",
      lineHeight: "200%",
      letterSpacing: "widest"
    },
    text: {
      fontSize: ["md", "lg"],
      fontFamily: "text",
      color: "gray.900"
    },
    subtitle: {
      fontSize: ["lg", "xl"],
      fontFamily: "text",
      color: "gray.900",
      lineHeight: "200%"
    }
  }
};

export default chakraTheme;
