export default function Footer() {
    return (
      <footer id="contact" className="border-t border-gold/60 bg-burgundy">
        <div className="luxe-container py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-gold to-yellow-200" />
            <span className="text-parchment/85">© {new Date().getFullYear()} La Hermita Cigars</span>
          </div>
          <nav className="flex gap-6">
            <a className="hover:text-gold transition" href="#about">About</a>
            <a className="hover:text-gold transition" href="#products">Products</a>
            <a className="hover:text-gold transition" href="#contact">Contact</a>
          </nav>
        </div>
      </footer>
    );
  }
  