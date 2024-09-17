import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Product from "./pages/Product";
import Footer from "./components/Footer/Footer";

import men_banner from "./components/Assets/banner/banner_men.png";
import women_banner from "./components/Assets/banner/banner_women.png";
import kid_banner from "./components/Assets/banner/banner_kid.png";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop-men" element={<ShopCategory category="Men" banner={men_banner} />} />
        <Route path="/shop-women" element={<ShopCategory category="Women" banner={women_banner} />} />
        <Route path="/shop-kids" element={<ShopCategory category="Kid" banner={kid_banner} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<LoginSignup />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;