import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#daebf9",
    200: "#88beed",
    300: "#6db0e9",
    400: "#3490df",
    500: "#0275d8",
    600: "#2d73ad",
    700: "#0d5794",
    800: "#064578",
    900: "#013e6f"
  }
};

const customTheme = extendTheme({ colors });

export default customTheme;


