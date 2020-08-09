import "typeface-roboto";

import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import rootReducer from "./reducers/index.js";
import App from "./components/app.js";

let store = configureStore({
    reducer: rootReducer,
});

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById("root"));
