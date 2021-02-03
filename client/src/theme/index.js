import { extendTheme } from "@chakra-ui/react";
import styles from "./styles";
import Button from "./components/Button";
import Input from "./components/Input";

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
    Input,
  },
};
export default extendTheme(overrides);
