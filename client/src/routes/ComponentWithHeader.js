import React from "react";
import Header from "components/commons/Header";
import { Link } from "react-router-dom";
import { Box, Icon, Text } from "@chakra-ui/react";

const CircleIcon = (props) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
);

const publicHeader = () => {
  const left = <Text>Scroll and Feather</Text>;
  const center = <CircleIcon boxSize={4} color="red.500" />;
  const right = <Link>Login / Signup</Link>;
  return <Header left={left} center={center} right={right} />;
};

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
