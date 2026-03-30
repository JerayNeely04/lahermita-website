// src/components/Story.jsx
import { motion } from "framer-motion";
import boxImage from "../assets/img/IMG_2728.webp";

export default function Story() {
  return (
    <section
      id="story"
      className="relative min-h-[90vh] flex items-center justify-center text-cream overflow-hidden"
    >
      {/* Background image */}
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${boxImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center 90%", // show cigars, not lid
          backgroundRepeat: "no-repeat",
        }}
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      />

      {/* Solid overlay to help text stand out */}
      <div className="absolute inset-0 bg-[rgba(20,10,8,0.35)] -z-[5]" />

      {/* Text box */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
          bg-[#2b150d]/90
          backdrop-blur-sm
          rounded-2xl
          shadow-[0_10px_40px_rgba(0,0,0,0.4)]
          p-6 md:p-8
          max-w-[580px]     /* narrower width */
          text-center
          border border-gold/20
        "
      >
        <h2 className="font-display text-3xl text-gold mb-4">Our Story</h2>
        <p className="text-sm md:text-base leading-relaxed text-cream/85 mb-4">
          From the Cibao Valley to your humidor. We partner with small farms and
          master rollers in Santiago to craft limited runs with patient aging
          and exacting construction—aimed at a smooth draw and balanced profile.
        </p>
        <p className="text-sm md:text-base leading-relaxed text-cream/85 mb-6">
          Each blend is produced in small batches to maintain consistency and
          integrity—no shortcuts, no compromises.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#products"
            className="btn-solid py-1.5 px-4 text-sm md:text-base"
          >
            Shop Blends
          </a>
          <a
            href="#contact"
            className="btn-ghost py-1.5 px-4 text-sm md:text-base"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </section>
  );
}
