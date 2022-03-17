import React from "react";
import { Provider } from "react-redux";
import AdvisorsPage from "./pages/AdvisorsPage";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <AdvisorsPage />
    </Provider>
  );
}

export default App;
