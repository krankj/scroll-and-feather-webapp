import React from "react";
import { Box, Icon, Text } from "@chakra-ui/react";
import { publicHeader } from "components/headers";

const ComponentWithHeader = ({ component, header: Header }) => {
  return (
    <>
      <Header />
      <Box h={"calc(100vh - 80px)"}>{component}</Box>
    </>
  );
};

ComponentWithHeader.defaultProps = {
  header: publicHeader,
};

export default ComponentWithHeader;
