import React from "react";
import { Provider } from "react-redux";
import AdvisorsList from "./pages/AdvisorsList";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <AdvisorsList />
    </Provider>
  );
}

export default App;
