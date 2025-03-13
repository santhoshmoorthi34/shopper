

// import { Route, Routes } from "react-router-dom";
import {  Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/pages/cart";
import Loginsingup from "./components/pages/loginsignup";
import Product from "./components/pages/product";
import Shop from "./components/pages/shop";

import Footer from "./components/footer/footer";

import men_banner from "./components/Assets/banner_mens.png";
import women_banner from "./components/Assets/banner_women.png"
import kids_banner from "./components/Assets/banner_kids.png"

import Navbar from "./components/navbar/navbar";
import Shopcategory from "./components/pages/shopcategory";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
      {/* <Shop/>
      <Product/>
  
      <Loginsingup/> 
      <Shopcategory/> */}
      {/* <Cart/> */}

      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/men"
          element={<Shopcategory banner={men_banner} category="men" />}
        />
        <Route
          path="/women"
          element={<Shopcategory banner={women_banner} category="women" />}
        />
        <Route
          path="/kids"
          element={<Shopcategory banner={kids_banner} category="kid" />}
        />

        {/* Fix the product route */}
        <Route path="/product">
          <Route path=":productId" element={<Product />} />
        </Route>

        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Loginsingup />} />
      </Routes>
      <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
