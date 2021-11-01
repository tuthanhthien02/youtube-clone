import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { Normalize } from "styled-normalize";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import GlobalStyle from "./theme/globalStyle";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Normalize />
            <GlobalStyle />
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
