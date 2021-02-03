import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import { Spacer, Text } from "@chakra-ui/react";
import { isAuthenticated } from "utils/Auth";
import ComponentWithHeader from "./ComponentWithHeader";
import Header from "components/commons/Header";

const privateHeader = () => {
  const left = <Text>Scroll and Feather</Text>;
  const center = <Spacer />;
  const right = <Link to="/login">Logout</Link>;
  return <Header left={left} center={center} right={right} />;
};

const ProtectedRoute = ({ children, ...rest }) => {
  return (
    <>
      {isAuthenticated() ? (
        <Route {...rest}>
          <ComponentWithHeader component={children} header={privateHeader} />
        </Route>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default ProtectedRoute;
