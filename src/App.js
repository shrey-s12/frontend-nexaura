import React from "react";
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/pages/Shop";
import ShopCategory from "./components/pages/ShopCategory";
import Contact from "./components/pages/Contact";
import Cart from "./components/pages/Cart";
import LoginSignup from "./components/pages/LoginSignup";
import Product from "./components/pages/Product";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop-men" element={<ShopCategory category="Men" />} />
        <Route path="/shop-women" element={<ShopCategory category="Women" />} />
        <Route path="/shop-kids" element={<ShopCategory category="Kids" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;