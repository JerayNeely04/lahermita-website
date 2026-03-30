import { motion } from "framer-motion";

const items = [
  { name: "Robusto Oro", notes: "Cedar • Honey • Spice", img: "/assets/img/robusto.jpg" },
  { name: "Maduro Reserva", notes: "Cocoa • Espresso • Molasses", img: "/assets/img/maduro.jpg" },
  { name: "Connecticut No.1", notes: "Cream • Almond • Vanilla", img: "/assets/img/connecticut.jpg" },
];

export default function ProductsTeaser() {
  return (
    <section id="products" className="py-14">
      <div className="container-x">
        <h2 className="font-display text-3xl md:text-4xl text-ink">Our Blends</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="group"
            >
              <div className="aspect-[4/3] w-full overflow-hidden border border-cigar/20 bg-white">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition"
                />
              </div>
              <h3 className="font-display text-xl mt-3 text-ink">{p.name}</h3>
              <p className="text-ink/70">{p.notes}</p>
            </motion.article>
          ))}
        </div>
      </div>
      <div className="mt-14 hr-line" />
    </section>
  );
}
