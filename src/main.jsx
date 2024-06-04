import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { DataProvider } from "./Components/DataProvider/DataProvider.jsx";
import { initialState, reducer } from "./Utility/Reducer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/amazon-clone-584.netlify.app/">
      <DataProvider reducer={reducer} initialState={initialState}>
        <App />
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
