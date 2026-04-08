import redBlend from "../assets/img/blend-red.webp";
import brownBlend from "../assets/img/blend-brown.webp";
import blackBlend from "../assets/img/blend-black.webp";
import whiteBlend from "../assets/img/blend-white.webp";

export default function OurBlends() {
  const blends = [
    {
      id: 1,
      img: redBlend,
      name: "Gran Toro Habano",
      note: "Rich, full-bodied Dominican blend with cedar and espresso notes.",
      alt: "Reserva Roja box of cigars with red bands",
    },
    {
      id: 2,
      img: brownBlend,
      name: "Torpedo Maduro Doble Capa",
      note: "Unique barber-pole wrapper for balanced sweet and spicy draw.",
      alt: "Barber pole wrapper cigars arranged in box",
    },
    {
      id: 3,
      img: blackBlend,
      name: "Robusto Connecticut",
      note: "Dark, robust profile with cocoa and molasses undertones.",
      alt: "Oscuro cigars with dark wrappers in open box",
    },
    {
      id: 4,
      img: whiteBlend,
      name: "Torpedo Maduro",
      note: "Creamy, smooth Connecticut wrapper with subtle vanilla finish.",
      alt: "Claro cigars with light wrappers in open box",
    },
  ];

  return (
    <section
      id="products"
      className="relative text-cream overflow-hidden border-t border-gold/20 py-24"
      aria-labelledby="our-blends-heading"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_800px_at_25%_10%,#3d221a_0%,#2a1712_40%,#1a0e0a_100%)]"
      />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.25)] -z-[5]" />

      <div className="container-x text-center">
        <p className="uppercase tracking-[0.18em] text-xs text-cream/60 mb-2">
          Limited Releases • Hand-Rolled in Santiago
        </p>
        <h2
          id="our-blends-heading"
          className="font-display text-4xl md:text-5xl text-gold mb-4"
        >
          Our Blends
        </h2>
        <p className="max-w-xl mx-auto text-cream/80 leading-relaxed">
          A curated selection of hand-rolled cigars — crafted with precision and tradition.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto px-6">
        {blends.map((blend) => (
          <div
            key={blend.id}
            className="group relative rounded-xl overflow-hidden border border-gold/10 shadow-[0_6px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-[1.02]"
          >
            <img
              src={blend.img}
              alt={blend.alt}
              className="h-64 w-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0e0a]/80 to-transparent opacity-80 pointer-events-none" />
            <div className="absolute bottom-0 p-4 text-center">
              <h3 className="font-display text-lg text-gold mb-1">{blend.name}</h3>
              <p className="text-sm text-cream/80">{blend.note}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="https://la-hermita-cigar.myshopify.com/collections/all"
          className="btn-solid sheen px-8 py-3 text-lg"
        >
          Shop the Collection
        </a>
      </div>

      <div className="hr-line mt-16 opacity-40" />
    </section>
  );
}