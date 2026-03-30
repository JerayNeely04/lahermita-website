/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name") || "";
    const email = data.get("email") || "";
    const phone = data.get("phone") || "";
    const reason = data.get("reason") || "";
    const message = data.get("message") || "";
    const budget = data.get("budget") || "";
    const timeline = data.get("timeline") || "";

    const body = `
Name: ${name}
Email: ${email}
Phone/WhatsApp: ${phone}
Reason: ${reason}
Budget: ${budget}
Timeline: ${timeline}

Message:
${message}
    `.trim();

    const to = "hello@lahermitacigars.com"; // TODO: set real inbox
    window.location.href =
      `mailto:${to}?subject=${encodeURIComponent("Website Contact — La Hermita Cigars")}` +
      `&body=${encodeURIComponent(body)}`;
  };

  const Card = ({ children, className = "" }) => (
    <div className={`card-luxe ${className}`}>{children}</div>
  );

  return (
    <section className="relative text-cream overflow-hidden bg-luxe">
      {/* Header */}
      <div className="container-x pt-10 pb-8 corner-flourish">
        <h1 className="font-display text-4xl md:text-5xl text-gold-gradient">Contact</h1>
        <p className="mt-2 text-cream/80 max-w-2xl">
          Questions, wholesale, or collaborations — send a note below.
        </p>
      </div>

      <div className="divider" />

      {/* Main grid */}
      <div className="container-x py-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-6 md:p-7">
            <h2 className="text-xl font-semibold">Send a Message</h2>
            <p className="text-cream/75 text-sm mt-1">We typically reply within 1–2 business days.</p>

            <form onSubmit={handleSubmit} className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* honeypot */}
              <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

              <label className="block text-sm">
                <span className="text-cream/80">Name</span>
                <input
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-xl bg-black/30 border border-gold/20 px-3 py-2 outline-none focus:border-gold/60"
                  placeholder="Your name"
                />
              </label>

              <label className="block text-sm">
                <span className="text-cream/80">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl bg-black/30 border border-gold/20 px-3 py-2 outline-none focus:border-gold/60"
                  placeholder="you@example.com"
                />
              </label>

              <label className="block text-sm">
                <span className="text-cream/80">Phone / WhatsApp</span>
                <input
                  name="phone"
                  type="tel"
                  className="mt-2 w-full rounded-xl bg-black/30 border border-gold/20 px-3 py-2 outline-none focus:border-gold/60"
                  placeholder="+1 (555) 555-5555"
                />
              </label>

              <label className="block text-sm">
                <span className="text-cream/80">Reason</span>
                <select
                  name="reason"
                  className="mt-2 w-full rounded-xl bg-black/30 border border-gold/20 px-3 py-2 outline-none focus:border-gold/60"
                  defaultValue="General Inquiry"
                >
                  <option>General Inquiry</option>
                  <option>Wholesale</option>
                  <option>Custom/Private Label</option>
                  <option>Event / Collaboration</option>
                  <option>Support</option>
                </select>
              </label>

              <label className="block text-sm">
                <span className="text-cream/80">Budget (optional)</span>
                <input
                  name="budget"
                  type="text"
                  className="mt-2 w-full rounded-xl bg-black/30 border border-gold/20 px-3 py-2 outline-none focus:border-gold/60"
                  placeholder="$ —"
                />
              </label>

              <label className="block text-sm">
                <span className="text-cream/80">Timeline (optional)</span>
                <input
                  name="timeline"
                  type="text"
                  className="mt-2 w-full rounded-xl bg-black/30 border border-gold/20 px-3 py-2 outline-none focus:border-gold/60"
                  placeholder="e.g., mid-December"
                />
              </label>

              <label className="block text-sm md:col-span-2">
                <span className="text-cream/80">Message</span>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="mt-2 w-full rounded-xl bg-black/30 border border-gold/20 px-3 py-2 outline-none focus:border-gold/60"
                  placeholder="Tell us about your request…"
                />
              </label>

              <div className="md:col-span-2 flex items-center justify-between gap-3">
                <label className="inline-flex items-center gap-2 text-sm text-cream/80">
                  <input type="checkbox" className="accent-gold" defaultChecked />
                  <span>Email me a copy</span>
                </label>

                <button type="submit" className="btn-gold sheen">
                  Send Message
                </button>
              </div>
            </form>
          </Card>

          {/* FAQ */}
          <Card className="p-6 md:p-7 mt-6">
            <h3 className="text-lg font-semibold">Common Questions</h3>
            <div className="mt-4 divide-y divide-gold/15">
              {[
                {
                  q: "Do you offer wholesale pricing?",
                  a: "Yes. We provide tiered wholesale pricing for qualified retailers. Include estimated monthly volume and preferred blends in your message.",
                },
                {
                  q: "Can you do custom/private label cigars?",
                  a: "We can explore custom bands and curated blends for events or brands. Lead times vary by batch size (typically 4–8 weeks).",
                },
                {
                  q: "Where do you ship?",
                  a: "Currently U.S. domestic and select international regions from Santiago, D.R. Provide your city/ZIP for a precise quote.",
                },
              ].map((item, i) => (
                <details key={i} className="group py-3">
                  <summary className="cursor-pointer list-none flex items-center justify-between">
                    <span className="font-medium">{item.q}</span>
                    <span className="text-gold group-open:rotate-45 transition">＋</span>
                  </summary>
                  <p className="mt-2 text-cream/80 text-sm">{item.a}</p>
                </details>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Sidebar */}
        <motion.aside
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <Card className="p-6 md:p-7 relative overflow-hidden">
            {/* subtle watermark */}
            <div
              className="pointer-events-none absolute -right-2 -top-2 text-[140px] leading-none opacity-[0.06] select-none"
              style={{ background: "linear-gradient(180deg,#f6e7c7,#b98a3a)", WebkitBackgroundClip: "text", color: "transparent" }}
            >
              ❧
            </div>

            <h2 className="text-xl font-semibold">Contact Details</h2>
            <ul className="mt-4 space-y-3 text-cream/85 relative">
              <li>
                <span className="block text-cream/60 text-xs">Email</span>
                <a className="hover:underline" href="mailto:hello@lahermitacigars.com">
                  hello@lahermitacigars.com
                </a>
              </li>
              <li>
                <span className="block text-cream/60 text-xs">Phone / WhatsApp</span>
                <a className="hover:underline" href="tel:+15715550123">
                  +1 (571) 555-0123
                </a>
              </li>
              <li>
                <span className="block text-cream/60 text-xs">Locations</span>
                Santiago, Dominican Republic • Harrisburg, PA
              </li>
              <li>
                <span className="block text-cream/60 text-xs">Hours (EST)</span>
                Mon–Fri 10:00–18:00
              </li>
            </ul>

            <div className="mt-5 flex gap-3">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="btn-gold sheen text-sm"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="btn-gold sheen text-sm"
              >
                LinkedIn
              </a>
            </div>
          </Card>

          <Card className="p-0 overflow-hidden">
            <div className="p-6 md:p-7">
              <h3 className="text-lg font-semibold">Showroom / Pickup</h3>
              <p className="text-cream/80 text-sm mt-1">
                Visits by appointment. Include desired date/time in your message.
              </p>
            </div>
            <div className="h-[220px] bg-black/30 border-t border-gold/20">
              <div className="h-full w-full grid place-items-center text-cream/60 text-sm">
                Map embed placeholder
              </div>
            </div>
          </Card>

          <Card className="p-6 md:p-7 text-center">
            <h3 className="text-lg font-semibold">Stay in the Loop</h3>
            <p className="text-cream/80 text-sm mt-1">
              Limited releases & events — a few emails per year.
            </p>
            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                const email = new FormData(e.currentTarget).get("nlemail") || "";
                window.location.href =
                  `mailto:hello@lahermitacigars.com?subject=${encodeURIComponent(
                    "Newsletter Signup"
                  )}&body=${encodeURIComponent(`Please add ${email} to the newsletter.`)}`;
              }}
            >
              <input
                name="nlemail"
                type="email"
                required
                placeholder="you@example.com"
                className="flex-1 rounded-xl bg-black/30 border border-gold/20 px-3 py-2 outline-none focus:border-gold/60"
              />
              <button className="btn-gold sheen">Join</button>
            </form>
          </Card>
        </motion.aside>
      </div>

      <div className="hr-line opacity-40" />
      <div className="container-x py-8 text-center text-xs text-cream/60">
        By contacting us you confirm you are of legal age to purchase tobacco in your jurisdiction.
      </div>
    </section>
  );
}
