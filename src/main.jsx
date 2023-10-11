import React from "react";
import ReactDOM from "react-dom/client";
import HomeLayout from "./layout/HomeLayout";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <HomeLayout />
    </Provider>
  </React.StrictMode>
);
