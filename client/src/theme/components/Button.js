const Button = {
  // 1. We can update the base styles
  baseStyle: {
    fontWeight: "light", // Normally, it is "semibold"
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
      bg: "green.500",
      _hover: {
        bg: "red.200",
      },
      _focus: "",
      _active: "",
    }),
  },
  // 3. We can add a new visual variant
};

export default Button;
