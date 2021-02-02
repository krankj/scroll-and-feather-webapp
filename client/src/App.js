import { Switch, Route } from "react-router-dom";
import ComponentWithHeader from "routes/ComponentWithHeader";
import LandingScreen from "components/publicPages/LandingScreen";
import LoginPage from "components/publicPages/Login";
// dummy commit
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
      </Switch>
    </>
  );
}

export default App;
