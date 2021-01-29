import { Button, Text, Center } from "@chakra-ui/react";
import Header from "components/Header";
function App() {
  return (
    <>
      <Header />
      <Center h="80vh">
        <Text>
          This application is currently under development. <br></br>Do come back
          a while later.
        </Text>
        {/* <Button variant="outline">Submit</Button> */}
      </Center>
    </>
  );
}

export default App;
