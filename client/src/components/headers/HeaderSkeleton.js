import React from "react";
import { Flex, Box } from "@chakra-ui/react";

const HeaderSkeleton = ({ left, center, right }) => (
  <Flex
    pos="sticky"
    h="80px"
    zIndex="999"
    w="100%"
    align="center"
    p="4"
    px="12"
    textAlign="center"
  >
    <Box flex="1" textAlign="left">
      {left}
    </Box>
    <Box flex="1">{center}</Box>
    <Box flex="1" textAlign="right">
      {right}
    </Box>
  </Flex>
);

export default HeaderSkeleton;
