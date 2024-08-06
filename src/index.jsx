/* @refresh reload */
import { render } from "solid-js/web";

import { Router } from "@solidjs/router";
import { CartContextProvider } from "./context/CartContext";

import "./index.css";
import App from "./App";

const root = document.getElementById("root");

render(
  () => (
    //   <CartProvider>
    <Router>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </Router>
    //   </CartProvider>
  ),
  root
);
