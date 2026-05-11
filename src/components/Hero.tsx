
import { Brain, Target, Sun } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[70vh] lg:h-[70vh] flex items-center overflow-hidden bg-white border-b border-primary/10 py-32 lg:py-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero.png" 
          alt="ELYS Night Reset Background" 
          className="w-full h-full object-cover object-center opacity-80"
        />
        {/* Subtle gradient to ensure text readability if the image is too busy on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent lg:from-white/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-8 pt-32 lg:pt-24 pb-4">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col justify-center max-w-2xl">
            <h1 className="text-5xl lg:text-[5rem] leading-[1.1] mb-6 font-serif">
              The day is<br />behind you.
            </h1>
            <p className="text-primary/80 text-base lg:text-lg mb-12 max-w-md leading-relaxed italic">
              A gentle transition out of performance mode. ELYS is your evening ritual for nervous system relief and quiet presence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="flex flex-col items-start">
                <Brain className="w-8 h-8 mb-4 text-primary" strokeWidth={1} />
                <span className="text-[10px] tracking-widest font-semibold uppercase leading-tight">Emotional<br/>Decompression</span>
              </div>
              <div className="flex flex-col items-start">
                <Target className="w-8 h-8 mb-4 text-primary" strokeWidth={1} />
                <span className="text-[10px] tracking-widest font-semibold uppercase leading-tight">Nervous System<br/>Relief</span>
              </div>
              <div className="flex flex-col items-start">
                <Sun className="w-8 h-8 mb-4 text-primary" strokeWidth={1} />
                <span className="text-[10px] tracking-widest font-semibold uppercase leading-tight">Quiet<br/>Presence</span>
              </div>
            </div>

            <div>
              <button className="bg-accent px-12 w-full max-w-[320px] py-4 text-xs tracking-widest font-semibold uppercase mb-4 text-primary hover:bg-opacity-80 transition-opacity">
                JOIN THE WAITLIST
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
