import React from "react";
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Product from "./pages/Product";
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