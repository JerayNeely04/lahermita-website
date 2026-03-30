import { useState } from "react";
import { useCart } from "../cart/CartContext";
import redBlend from "../assets/img/blend-red.webp";
import brownBlend from "../assets/img/blend-brown.webp";
import blackBlend from "../assets/img/blend-black.webp";
import whiteBlend from "../assets/img/blend-white.webp";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Shop() {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: "Reserva Roja", img: redBlend, price: 18 },
    { id: 2, name: "La Hermita Barber", img: brownBlend, price: 20 },
    { id: 3, name: "La Hermita Oscuro", img: blackBlend, price: 22 },
    { id: 4, name: "La Hermita Claro", img: whiteBlend, price: 19 },
  ];

  return (
    <section
      className="min-h-screen bg-luxe-section text-cream py-24 relative overflow-hidden"
      style={{
        backgroundAttachment: "fixed",
      }}
    >
      {/* Subtle glow vignette overlay */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_700px_at_20%_8%,#5a3b2d_0%,#2a1815_45%,#120805_100%)] opacity-95"
      />

      {/* Decorative texture pattern */}
      <div
        aria-hidden
        className="absolute inset-0 -z-5 opacity-[0.18]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'%3E%3Cdefs%3E%3CradialGradient id='g' r='0.45'%3E%3Cstop offset='0%' stop-color='%23caa457' stop-opacity='0.2'/%3E%3Cstop offset='100%' stop-color='%23000000' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='180' height='180' fill='url(%23g)'/%3E%3C/svg%3E\")",
          backgroundSize: "220px 220px",
          backgroundRepeat: "repeat",
          mixBlendMode: "soft-light",
        }}
      />

      {/* Page content */}
      <div className="container-x text-center relative z-10">
        <h1 className="font-display text-5xl text-gold mb-6">Shop La Hermita</h1>
        <p className="text-cream/80 mb-12">
          Hand-rolled cigars crafted with heritage and precision. Select your favorites below.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-2xl border border-gold/20 shadow-[0_8px_25px_rgba(0,0,0,0.4)] overflow-hidden bg-[#2a1815]/90 backdrop-blur-sm p-4"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h2 className="font-display text-xl text-gold mb-1">{p.name}</h2>
              <p className="text-cream/70 mb-4">${p.price.toFixed(2)} each</p>

              <AddToCart product={p} addToCart={addToCart} />
            </motion.div>
          ))}
        </div>

        <div className="divider my-16" />
        <Link to="/checkout" className="btn-solid sheen px-8 py-3 text-lg">
          Proceed to Checkout
        </Link>
      </div>
    </section>
  );
}

function AddToCart({ product, addToCart }) {
  const [qty, setQty] = useState(1);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="px-3 py-1 border border-gold/30 rounded text-gold hover:bg-gold/10"
        >
          −
        </button>
        <span className="text-lg">{qty}</span>
        <button
          onClick={() => setQty((q) => q + 1)}
          className="px-3 py-1 border border-gold/30 rounded text-gold hover:bg-gold/10"
        >
          +
        </button>
      </div>
      <button
        onClick={() => addToCart(product, qty)}
        className="btn-solid sheen w-full"
      >
        Add to Cart
      </button>
    </div>
  );
}
