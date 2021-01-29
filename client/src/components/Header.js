import React from "react";
import { Flex, Spacer, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      pos="sticky"
      h="80px"
      zIndex="999"
      w="100%"
      align="center"
      p="4"
      px="12"
    >
      <Text>Scroll and Feather</Text>
      <Spacer />
      <Text>Login / Signup</Text>
    </Flex>
  );
};

export default Header;
