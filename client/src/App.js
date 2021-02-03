import { Switch, Route } from "react-router-dom";
import ComponentWithHeader from "components/commons/ComponentWithHeader";
import LandingScreen from "components/publicPages/LandingScreen";
import LoginPage from "components/publicPages/Login";
import ProtectedRoute from "routes/ProtectedRoute";
import { loginHeader } from "components/headers";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <ComponentWithHeader component={<LandingScreen />} />
        </Route>
        <Route path="/login">
          <ComponentWithHeader component={<LoginPage />} header={loginHeader} />
        </Route>
        <ProtectedRoute path="/poet">
          <div>Poet page</div>
        </ProtectedRoute>
      </Switch>
    </>
  );
}

export default App;
