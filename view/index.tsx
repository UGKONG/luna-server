import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import "./index.scss";

const rootNode = document.querySelector("#root");

if (rootNode) {
  createRoot(rootNode).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} else {
  console.error("RootNode is null!!");
}
