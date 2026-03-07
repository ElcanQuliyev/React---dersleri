import { useState } from "react";
import "./App.css";
import Product from "./Product";

function App() {
  const mehsul = "soyuducu";
  return (
    <div>
      <Product productName="ayaqqabi" qiymet={50} />
      <hr />
      <Product productName="salvar" qiymet={60} />
      <hr />
      <Product productName={mehsul} qiymet={600} />
    </div>
  );
}

export default App;
