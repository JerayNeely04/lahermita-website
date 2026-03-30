// src/pages/Checkout.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "../cart/CartContext";

export default function Checkout() {
  const { cart, total, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <section className="min-h-screen bg-luxe-pop text-cream flex flex-col items-center justify-center">
        <h1 className="text-3xl text-gold mb-4 font-display">Your cart is empty</h1>
        <Link to="/shop" className="btn-solid sheen">Return to Shop</Link>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-luxe-pop text-cream py-20">
      <div className="container-x max-w-4xl mx-auto">
        <h1 className="font-display text-4xl text-gold mb-8 text-center">Checkout</h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Customer Info */}
          <div className="card-luxe p-6">
            <h2 className="text-2xl text-gold mb-4 font-display">Customer Info</h2>
            <form className="space-y-4">
              <input className="w-full px-4 py-2 bg-[#2a1815]/50 border border-gold/20 rounded text-cream placeholder:text-cream/50" placeholder="Full Name" />
              <input className="w-full px-4 py-2 bg-[#2a1815]/50 border border-gold/20 rounded text-cream placeholder:text-cream/50" placeholder="Email Address" />
              <input className="w-full px-4 py-2 bg-[#2a1815]/50 border border-gold/20 rounded text-cream placeholder:text-cream/50" placeholder="Shipping Address" />
            </form>
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="card-luxe p-6"
          >
            <h2 className="text-2xl text-gold mb-4 font-display">Order Summary</h2>
            <ul className="divide-y divide-gold/20 mb-4">
              {cart.map((item) => (
                <li key={item.id} className="py-3 flex justify-between">
                  <span>{item.name} × {item.qty}</span>
                  <span>${(item.price * item.qty).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-gold/30 pt-3 flex justify-between text-lg font-semibold">
              <span>Total:</span>
              <span className="text-gold">${total.toFixed(2)}</span>
            </div>

            <button
              onClick={() => {
                alert("Thank you for your purchase!");
                clearCart();
              }}
              className="btn-solid sheen mt-6 w-full text-lg"
            >
              Confirm Purchase
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
