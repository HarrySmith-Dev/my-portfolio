import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.css.ts";

ReactDOM.createRoot(document.getElementById("main")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
