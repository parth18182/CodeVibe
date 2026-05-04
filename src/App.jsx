import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./ReusableCompo/Navbar";
import Footer from "./ReusableCompo/Footer";
import CategoryPage from "./components/CategoryPage ";
import ProductDetail from "./components/ProductDetail";
import CartPage from "./components/CartPage";
import BrandPage from "./components/BrandPage";
import BlogPage from "./components/BlogPage";
import BlogDetail from "./components/BlogDetail";
import FavouritePage from "./components/FavouritePage";
import ContactUs from "./components/QuickLinksPages/ContactUs";
import RefundPolicy from "./components/QuickLinksPages/RefundPolicy";
import PrivacyPolicy from "./components/QuickLinksPages/PrivacePolicy";
import Terms from "./components/QuickLinksPages/Terms";
import ShippingPolicy from "./components/QuickLinksPages/ShippingPolicy";
import ExchangePolicy from "./components/QuickLinksPages/ExchangePolicy";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/brand" element={<BrandPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/wishlist" element={<FavouritePage />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/refund" element={<RefundPolicy />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/shipping" element={<ShippingPolicy />} />
        <Route path="/exchange" element={<ExchangePolicy />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
