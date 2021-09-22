import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#E5FCF1",
    200: "#6fd8ef",
    300: "#50d0eb",
    400: "#41ccea",
    500: "#23c4e6",
    600: "#19bcdf",
    700: "#16a3c0",
    800: "#1496b1",
    900: "#107c93"
  }
};

const customTheme = extendTheme({ colors });

export default customTheme;
