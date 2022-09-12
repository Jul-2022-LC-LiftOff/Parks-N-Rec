import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </div>
);

reportWebVitals();
