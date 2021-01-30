import React from "react";
import { Box, Text } from "@chakra-ui/react";

const ComponentWithHeader = ({ component: Component, header: Header }) => {
  return (
    <>
      <Header />
      <Box bg="red.200" h={"calc(100vh - 80px)"}>
        <Component />
      </Box>
    </>
  );
};

export default ComponentWithHeader;
