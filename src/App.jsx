// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import OurBlends from "./components/OurBlends";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import { CartProvider } from "./cart/CartContext";

function Home() {
  return (
    <>
      <Hero />
      <Story />
      <OurBlends />
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <main className="pt-16">{/* offset for fixed header */}</main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}
