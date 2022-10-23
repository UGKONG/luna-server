import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import useStore from "../hooks/useStore";
import App from "./App";
import "./index.scss";

const rootNode = document.querySelector("#root");

if (rootNode) {
  createRoot(rootNode).render(
    <Provider store={useStore}>
      <App />
    </Provider>
  );
} else {
  console.error("RootNode is null!!");
}
