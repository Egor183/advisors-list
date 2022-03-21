import React from "react";
import { Provider } from "react-redux";
import { ErrorModal } from "components/ErrorModal";
import AdvisorsPage from "./pages/AdvisorsPage";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <ErrorModal />
      <AdvisorsPage />
    </Provider>
  );
}

export default App;
