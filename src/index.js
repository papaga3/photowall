import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./Components/App";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducer";
import {database} from "./database/config";
import './css/stylesheet.css';

var destination = document.querySelector("#root");
const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    , destination);