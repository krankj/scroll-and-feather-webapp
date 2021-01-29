const Button = {
  // 1. We can update the base styles
  baseStyle: {
    fontWeight: "light", // Normally, it is "semibold"
    borderRadius: "0",
    textTransform: "uppercase",
    letterSpacing: "3px",
  },
  // 2. We can add a new button size or extend existing
  sizes: {
    xl: {
      h: "56px",
      fontSize: "lg",
      px: "32px",
    },
  },
  variants: {
    // 4. We can override existing variants
    solid: () => ({
      bg: "dark.200",
      color: "light.300",
      _hover: {
        bg: "dark.200",
        color: "light.100",
      },
      _focus: "",
      _active: "",
    }),

    outline: () => ({
      color: "dark.300",
      border: "1px solid",
      borderColor: "dark.300",
      fontWeight: "bold",
      fontSize: "10px",
      _hover: {
        bg: "dark.200",
        color: "light.100",
      },
      _focus: "",
      _active: "",
    }),
  },
  // 3. We can add a new visual variant
};

export default Button;
