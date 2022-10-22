import React from "react";
import { Provider } from "react-redux";
import useStore from "../hooks/useStore";
import MainComponent from "./Main";

export default function App() {
  return (
    <Provider store={useStore}>
      <title>jCloud</title>
      <MainComponent />
    </Provider>
  );
}
