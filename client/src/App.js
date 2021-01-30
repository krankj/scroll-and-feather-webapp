import { Switch, Route, Link } from "react-router-dom";
import ComponentWithHeader from "routes/ComponentWithHeader";
import LandingScreen from "components/publicPages/LandingScreen";
import LoginPage from "components/publicPages/Login";
import { Spacer, Text } from "@chakra-ui/react";
import Header from "components/commons/Header";

const publicHeader = () => {
  const left = <Text>Scroll and Feather</Text>;
  const center = <Spacer />;
  const right = <Link>Login</Link>;
  return <Header left={left} center={center} right={right} />;
};

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <ComponentWithHeader
            component={LandingScreen}
            header={publicHeader}
          />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
