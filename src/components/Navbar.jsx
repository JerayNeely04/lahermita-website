// src/components/Navbar.jsx
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // ESC to close
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, [open]);

  // Navigate to home, then scroll to a section id
  const goSection = (id) => {
    const scrollTo = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollTo, 50); // wait for paint
    } else {
      scrollTo();
    }
    setOpen(false);
  };

  // Dedicated Contact page
  const goContact = () => {
    navigate("/contact");
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Dedicated Shop page
  const goShop = () => {
  window.location.href = "https://la-hermita-cigar.myshopify.com/";
};

  const menuId = "mobile-menu";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[10000] border-b border-gold/20"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      {/* Solid opaque bar */}
      <div className="relative h-16 bg-[#2a1815] shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
        {/* Faint top highlight */}
        <div className="pointer-events-none absolute inset-0 opacity-30 bg-[linear-gradient(180deg,rgba(255,255,255,.06)_0%,rgba(255,255,255,0)_40%)]" />

        <div className="flex items-center justify-between h-full">
          {/* Hamburger aligned to far left */}
          <button
            aria-label="Open menu"
            aria-controls={menuId}
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="p-3 pl-4 text-gold hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-gold/40"
          >
            <div className="w-6 h-[2px] bg-gold mb-1.5" />
            <div className="w-6 h-[2px] bg-gold mb-1.5" />
            <div className="w-6 h-[2px] bg-gold" />
          </button>

          {/* Right container (kept for future actions/logo) */}
          <div className="container-x flex-1 flex justify-end items-center" />
        </div>
      </div>

      {/* Left slide-over menu */}
      <AnimatePresence>
        {open && (
          <motion.aside
            id={menuId}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.28 }}
            className="fixed inset-y-0 left-0 w-[86vw] max-w-[420px] bg-gradient-to-br from-[#f5e8c9] to-[#ecd9ae] text-[#2b150d] z-[10001] shadow-[12px_0_40px_rgba(0,0,0,0.45)] border-r border-gold/30 overflow-y-auto"
          >
            <div className="h-16 flex items-center justify-between px-5 border-b border-gold/20">
              <span className="font-display tracking-wide text-xl">Menu</span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="p-2 text-[#2b150d] hover:text-gold transition"
              >
                ✕
              </button>
            </div>

            <nav className="px-6 py-8">
              <ul className="space-y-5">
                <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                  <button
                    onClick={() => goSection("home")}
                    className="relative block font-display text-2xl tracking-wide hover:text-gold transition-colors"
                  >
                    Home
                  </button>
                </motion.li>

                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 }}
                >
                  <button
                    onClick={() => goSection("products")}
                    className="relative block font-display text-2xl tracking-wide hover:text-gold transition-colors"
                  >
                    Blends
                  </button>
                </motion.li>

                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <button
                    onClick={() => goSection("story")}
                    className="relative block font-display text-2xl tracking-wide hover:text-gold transition-colors"
                  >
                    Our Story
                  </button>
                </motion.li>

                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <button
                    onClick={goContact}
                    className="relative block font-display text-2xl tracking-wide hover:text-gold transition-colors"
                  >
                    Contact
                  </button>
                </motion.li>
              </ul>

              <div className="mt-10 flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => goSection("newsletter")}
                  className="bg-[#2b150d] text-[#f5e8c9] px-4 py-2 rounded-full hover:bg-gold hover:text-[#2b150d] transition"
                >
                  Newsletter
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={goShop}
                  className="bg-[#2b150d] text-[#f5e8c9] px-4 py-2 rounded-full hover:bg-gold hover:text-[#2b150d] transition"
                >
                  Shop Now
                </motion.button>
              </div>

              <p className="mt-12 text-xs text-[#2b150d]/70">
                Santiago, Dominican Republic
              </p>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[10000]"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </header>
  );
}
