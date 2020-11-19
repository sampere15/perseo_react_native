import React from "react";
import { StatusBar } from "react-native";

//  Redux
import { Provider } from "react-redux";
import store from "./app/redux/store";

import Navigation from "./app/navigation/Navigation";

export default function App() {
  return(
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <Navigation />
    </Provider>
  );
}
