import React from "react";
import { Center, Stack, Input, border } from "@chakra-ui/react";
import ComponentWithHeader from "components/commons/ComponentWithHeader";

const Login = () => (
  <Center h="100%">
    <Stack spacing={3} letterSpacing="3px">
      <Input
        _focus={{ borderColor: "gray.700" }}
        letterSpacing="2px"
        variant="flushed"
        placeholder="email"
      />
      <Input
        _focus={{ borderColor: "gray.700" }}
        letterSpacing="2px"
        type="password"
        variant="flushed"
        placeholder="password"
      />
    </Stack>
  </Center>
);

export default Login;
