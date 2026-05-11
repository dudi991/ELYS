

const Navbar = () => {
  return (
    <nav className="w-full bg-transparent flex items-center justify-between px-8 py-8 absolute top-0 left-0 z-50">
      <div className="text-3xl tracking-[0.3em] font-sans">E L Y S</div>
      
      <div className="hidden lg:flex items-center gap-10 text-[13px] font-semibold tracking-widest text-primary/60">
        <a href="#philosophy" className="hover:text-primary transition-colors">PHILOSOPHY</a>
        <a href="#formula" className="hover:text-primary transition-colors">THE FORMULA</a>
        <a href="#ritual" className="hover:text-primary transition-colors">THE RITUAL</a>
        <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
      </div>

      <button className="hidden md:block bg-accent px-8 py-3 text-[13px] tracking-widest font-semibold text-primary hover:bg-opacity-90 transition-opacity">
        JOIN WAITLIST
      </button>

      {/* Mobile Menu Icon Placeholder */}
      <button className="md:hidden text-primary">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
