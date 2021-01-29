import { extendTheme } from "@chakra-ui/react";
// Global style overrides
import styles from "./styles";
import Button from "./components/Button";
const overrides = {
  colors: {
    light: {
      100: "#ededed",
      200: "#dfe0e1",
      300: "#a3a3a3",
    },
    dark: {
      100: "#474747",
      200: "#303030",
      300: "#000000",
    },
  },
  styles,
  components: {
    Button,
  },
};
export default extendTheme(overrides);
