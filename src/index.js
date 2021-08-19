import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { configureStore } from './redux/Store';
ReactDOM.render(
  <Provider store={configureStore()}>
  {/* <Suspense fallback={<Spinner />}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  {/* </Suspense> */}
</Provider>
 ,
  document.getElementById("root")
);
