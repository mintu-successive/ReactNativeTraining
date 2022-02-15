import React from "react";
import MainApp from "./app/routes";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return(
    <MainApp/>
  )
}

export default App