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
    {
      id: 1,
      name: "Robusto Connecticut",
      size: "52 x 6",
      img: redBlend,
      variants: [
        { label: "10 Count Box", count: 10, price: 149 },
        { label: "20 Count Box", count: 20, price: 299 },
      ],
    },
    {
      id: 2,
      name: "Torpedo Maduro",
      size: "52 x 6",
      img: brownBlend,
      variants: [
        { label: "10 Count Box", count: 10, price: 199 },
        { label: "20 Count Box", count: 20, price: 309 },
      ],
    },
    {
      id: 3,
      name: "Torpedo Maduro Double Wrapper",
      size: "52 x 6",
      img: blackBlend,
      variants: [
        { label: "10 Count Box", count: 10, price: 209 },
        { label: "20 Count Box", count: 20, price: 349 },
      ],
    },
    {
      id: 4,
      name: "Grand Toro Habano",
      size: "52 x 6",
      img: whiteBlend,
      variants: [
        { label: "10 Count Box", count: 10, price: 199 },
        { label: "20 Count Box", count: 20, price: 349 },
      ],
    },
  ];

  return (
    <section
      className="min-h-screen bg-luxe-section text-cream py-24 relative overflow-hidden"
      style={{ backgroundAttachment: "fixed" }}
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_700px_at_20%_8%,#5a3b2d_0%,#2a1815_45%,#120805_100%)] opacity-95"
      />

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

      <div className="container-x text-center relative z-10">
        <h1 className="font-display text-5xl text-gold mb-6">Shop La Hermita</h1>
        <p className="text-cream/80 mb-12">
          Hand-rolled cigars crafted with heritage and precision. Select your box below.
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
              <p className="text-cream/70 mb-1">{p.size}</p>

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
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [qty, setQty] = useState(1);

  const selectedVariant = product.variants[selectedVariantIndex];

  const cartItem = {
    ...product,
    variant: selectedVariant.label,
    count: selectedVariant.count,
    price: selectedVariant.price,
  };

  return (
    <div className="flex flex-col items-center gap-3 mt-4">
      <select
        value={selectedVariantIndex}
        onChange={(e) => setSelectedVariantIndex(Number(e.target.value))}
        className="w-full rounded-lg border border-gold/30 bg-[#1d0f0c] text-cream px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold/40"
      >
        {product.variants.map((variant, index) => (
          <option key={variant.label} value={index}>
            {variant.label} — ${variant.price.toFixed(2)}
          </option>
        ))}
      </select>

      <p className="text-cream/80">
        <span className="text-gold font-semibold">Price:</span> ${selectedVariant.price.toFixed(2)}
      </p>

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
        onClick={() => addToCart(cartItem, qty)}
        className="btn-solid sheen w-full"
      >
        Add to Cart
      </button>
    </div>
  );
}