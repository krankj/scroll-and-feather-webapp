import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "utils/Auth";
import ComponentWithHeader from "../components/commons/ComponentWithHeader";
import { privateHeader } from "components/headers";

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
