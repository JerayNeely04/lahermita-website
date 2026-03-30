/* eslint-disable react/no-unescaped-entities */
import logo from "../assets/img/IMG_59602.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative overflow-hidden
        flex items-center justify-center
        h-[360px] md:h-[380px] lg:h-[420px]
        bg-luxe-hero   /* ← apply luxe bg directly */
      "
      aria-label="La Hermita Cigars hero"
    >
      {/* REMOVE the old 'Background vignette' div entirely */}

      {/* Keep the readability gradient on top of the luxe bg */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0)_40%,rgba(0,0,0,0.28)_100%)]"
      />

      {/* Gold tagline */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-gold/90 tracking-[0.28em] uppercase text-[0.7rem] md:text-[0.8rem]">
        Handcrafted • Limited Edition • Dominican Heritage
      </div>
      <div className="absolute top-9 md:top-10 left-1/2 -translate-x-1/2 w-[180px] md:w-[220px] border-b border-gold/50" />

      {/* Content area */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="w-full max-w-[920px] px-6 md:px-8 grid grid-cols-[auto,1fr] items-center gap-8 md:gap-10"
      >
        <div className="flex items-center justify-center">
          <div className="w-[300px] md:w-[360px] lg:w-[400px] h-auto shrink-0">
            <img
              src={logo}
              alt="La Hermita Cigars logo"
              className="w-full h-auto drop-shadow-[0_10px_24px_rgba(0,0,0,0.45)]"
              decoding="async"
              fetchpriority="high"
            />
          </div>
        </div>

        <div className="min-w-0">
          <p className="uppercase tracking-[0.18em] text-[0.75rem] md:text-sm text-cream/70 mb-1">
            Dominican Republic • Since 1998
          </p>

          <h1 className="font-display text-4xl md:text-5xl lg:text-[46px] text-cream leading-[1.08] mb-2 whitespace-normal lg:whitespace-nowrap">
            La Hermita Cigars
          </h1>

          <p className="text-cream/80 text-[0.95rem] md:text-base leading-relaxed mb-4">
            Hand-rolled in Santiago with carefully aged tobaccos. Limited
            blends, clean construction, and a timeless, balanced profile.
          </p>

          <div className="flex gap-4">
            <a href="#products" className="btn-solid text-sm px-5 py-2">Explore Blends</a>
            <a href="#story" className="btn-ghost text-sm px-5 py-2">Our Story</a>
          </div>
        </div>
      </motion.div>

      {/* Bottom divider */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-10/12 md:w-2/3 border-b border-gold/30 opacity-60" />
    </section>
  );
}
