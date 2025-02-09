import React from "react";
import Pizza from "./Pizza"
import { createRoot } from "react-dom";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's Pizza Menu</h1>
      <Pizza 
        name = "Pepperoni"
        description = "Tasty pizza once needed to be eaten"
        image = {"/public/pizzas/cali_ckn.webp"}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
