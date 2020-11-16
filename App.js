import React from "react";

//  Redux
import { Provider } from "react-redux";
import store from "./app/redux/store";

import Navigation from "./app/navigation/Navigation";

export default function App() {
  return(
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
