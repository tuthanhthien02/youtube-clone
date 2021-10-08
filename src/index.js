import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { Normalize } from "styled-normalize";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "./theme/globalStyle";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Normalize />
            <GlobalStyle />
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
