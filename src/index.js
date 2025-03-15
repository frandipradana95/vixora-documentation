import Vixora from "vixora";
import App from "./app";
import "./style.css";
console.log(Vixora);

/**
 * initial create element
 */
globalThis.createElement = Vixora.createElement;

/**
 * Render component
 */
Vixora.render(() => <App />, document.getElementById("root"));
