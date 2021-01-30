import React from "react";
import { Flex } from "@chakra-ui/react";

const Header = ({ left: Left, center: Center, right: Right }) => (
  <Flex
    pos="sticky"
    h="80px"
    zIndex="999"
    w="100%"
    align="center"
    p="4"
    px="12"
  >
    {/* <Left />
    <Center />
    <Right /> */}
  </Flex>
);

export default Header;
