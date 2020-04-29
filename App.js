import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import CustomDrawer from "./screens/CustomDrawer";

function App() {
  return (
    <NavigationContainer>
      <CustomDrawer />
    </NavigationContainer>
  );
}

export default App;
