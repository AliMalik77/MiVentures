import { extendTheme } from "native-base";

export const customTheme = extendTheme({
  fonts: {
    header: "MontExtrabold",
    medium: "MontMedium",
    regular: "MontRegular",
    semibold: "MontSemibold",
  },
  colors: {
    primary: {
      50: "#E3F2F9",
      100: "#C5E4F3",
      200: "#A2D4EC",
      300: "#7AC1E4",
      400: "#47A9DA",
      500: "#0088CC",
      600: "#007AB8",
      700: "#006BA1",
      800: "#005885",
      900: "#003F5E",
    },
    amber: {
      400: "#d97706",
    },
  },
  components: {
    Heading: {
      // Can pass also function, giving you access theming tools
      baseStyle: ({ colorMode }: any) => {
        return {
          color: colorMode === "dark" ? "red.300" : "blue.300",
          fontWeight: "normal",
        };
      },
      defaultProps: {
        size: "xl",
        fontFamily: "MontSemibold",
      },
    },
  },
});
