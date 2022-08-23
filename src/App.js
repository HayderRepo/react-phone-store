import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Details from "./components/details";
import NavBar from "./components/navBar";
import ProductList from "./components/productList";
import Cart from "./components/cart";
import Default from "./components/default";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/details" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route element={<Default />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
