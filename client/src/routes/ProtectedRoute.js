import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import { Spacer, Text } from "@chakra-ui/react";
import { isAuthenticated } from "utils/Auth";
import ComponentWithHeader from "./ComponentWithHeader";
import Header from "components/commons/Header";

const Left = () => <Text>Scroll and Feather</Text>;
const Center = () => <Spacer />;
const Right = () => <Link>Logout</Link>;

const privateHeader = () => (
  <Header left={Left} center={Center} right={Right} />
);

const ProtectedRoute = ({ component, ...rest }) => {
  return (
    <>
      {isAuthenticated() ? (
        <Route {...rest}>
          <ComponentWithHeader component={component} header={privateHeader} />
        </Route>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default ProtectedRoute;
