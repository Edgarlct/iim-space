import {EventEmitter} from "fbemitter";
import React from 'react'
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import AvailableRoutes from "./availableRoutes";
import './index.css'

(window as any).global = window;
(global as any).mainEventEmitter = new EventEmitter();



const root = ReactDOM.createRoot(
    // @ts-ignore
    document.getElementById("root")
);

root.render(
    <BrowserRouter>
        <AvailableRoutes/>
    </BrowserRouter>
);
