// tener la variable en scope

import React from "react";

// tener la variable en reactDOM scope

import ReactDOM from "react-dom";

import App from "./Components/app"

import "./Components/style.scss"


// tener la variable que contiene toda el codigo de la aplicacion en scope




// Hacer render de la app en el DOM

const root = ReactDOM.createRoot(document.getElementById("root"))


root.render(<App/>)