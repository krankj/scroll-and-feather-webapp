import { Switch, Route } from "react-router-dom";
import ComponentWithHeader from "routes/ComponentWithHeader";
import LandingScreen from "components/publicPages/LandingScreen";
import LoginPage from "components/publicPages/Login";
import ProtectedRoute from "routes/ProtectedRoute";
import { Heading } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <ComponentWithHeader component={<LandingScreen />} />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <ProtectedRoute path="/poet">
          <LoginPage />
        </ProtectedRoute>
      </Switch>
    </>
  );
}

export default App;
