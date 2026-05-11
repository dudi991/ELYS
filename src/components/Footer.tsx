import { Star, Mail, Gift, Camera, Link } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      {/* Top Pre-Footer */}
      <div className="w-full border-b border-primary/10">
        <div className="px-8 py-8 max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 items-center">
          
          <div className="lg:col-span-1">
            <h2 className="text-3xl lg:text-4xl leading-tight text-primary">
              A new standard for<br />nervous system recovery.
            </h2>
          </div>

          <div className="lg:col-span-1 flex flex-col lg:items-center text-center">
            <p className="text-sm text-primary/80 mb-6">
              ELYS Night Reset launches soon.<br />Join the waitlist and be the first to know.
            </p>
            <button className="bg-accent px-8 py-4 text-xs tracking-widest font-semibold text-primary uppercase hover:bg-opacity-90 transition-opacity w-max mx-auto">
              JOIN THE WAITLIST
            </button>
          </div>

          <div className="lg:col-span-1 flex justify-between lg:justify-end gap-8 lg:gap-16">
            <div className="flex flex-col items-center text-center max-w-[120px]">
              <Star className="w-10 h-10 mb-4 text-primary/30" strokeWidth={1} />
              <span className="text-[9px] tracking-widest font-bold uppercase leading-snug text-primary/40">
                LAUNCH EXCLUSIVE EARLY ACCESS
              </span>
            </div>
            <div className="flex flex-col items-center text-center max-w-[120px]">
              <Mail className="w-10 h-10 mb-4 text-primary/30" strokeWidth={1} />
              <span className="text-[9px] tracking-widest font-bold uppercase leading-snug text-primary/40">
                EXCLUSIVE FOUNDER UPDATES
              </span>
            </div>
            <div className="flex flex-col items-center text-center max-w-[120px]">
              <Gift className="w-10 h-10 mb-4 text-primary/30" strokeWidth={1} />
              <span className="text-[9px] tracking-widest font-bold uppercase leading-snug text-primary/40">
                SPECIAL OFFERS FOR EARLY SUPPORTERS
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-10 max-w-[1800px] mx-auto">
        <div className="text-xl tracking-[0.4em] font-sans font-medium text-primary">E L Y S</div>
        
        <div className="flex gap-10 text-[10px] font-semibold tracking-widest uppercase text-primary/40">
          <a href="#" className="hover:text-primary transition-colors">ABOUT</a>
          <a href="#" className="hover:text-primary transition-colors">CONTACT</a>
          <a href="#" className="hover:text-primary transition-colors">PRIVACY</a>
          <a href="#" className="hover:text-primary transition-colors">IMPRINT</a>
        </div>

        <div className="flex gap-6 text-primary/30">
          <a href="#" className="hover:text-primary transition-colors">
            <Camera className="w-5 h-5" strokeWidth={1} />
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            <Link className="w-5 h-5" strokeWidth={1} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
