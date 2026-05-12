import { Droplets, RefreshCw, Moon, Check } from 'lucide-react';

const Ritual = () => {
  return (
    <section id="ritual" className="w-full bg-white py-32 border-b border-primary/5">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
        
        {/* Main Grid: 3 Columns [Text] [Image] [Steps] */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* LEFT COLUMN: Introduction */}
          <div className="lg:col-span-3 pt-4">
            <span className="text-[10px] tracking-[0.3em] font-semibold text-primary/40 uppercase mb-6 block">The Ritual</span>
            <div className="w-12 h-[1px] bg-primary/20 mb-10"></div>
            
            <h2 className="text-4xl lg:text-5xl mb-8 leading-[1.1] text-primary">
              The Night Reset <br/>
              <span className="italic">Ritual.</span>
            </h2>
            
            <p className="text-lg text-primary/80 mb-12 leading-relaxed font-light italic">
              An intentional sequence designed to signal to your nervous system that it's time to decompress.
            </p>

            {/* Sub-list for extra "Professional" feel */}
            <div className="flex flex-col gap-6 pt-6 border-t border-primary/5">
               <div className="flex items-center gap-4 text-primary/60">
                  <Check className="w-4 h-4" strokeWidth={1} />
                  <span className="text-[10px] tracking-widest font-semibold uppercase">Cortisol Balance</span>
               </div>
               <div className="flex items-center gap-4 text-primary/60">
                  <Check className="w-4 h-4" strokeWidth={1} />
                  <span className="text-[10px] tracking-widest font-semibold uppercase">Nervous System Calm</span>
               </div>
               <div className="flex items-center gap-4 text-primary/60">
                  <Check className="w-4 h-4" strokeWidth={1} />
                  <span className="text-[10px] tracking-widest font-semibold uppercase">Deep Recovery</span>
               </div>
            </div>
          </div>

          {/* MIDDLE COLUMN: The Anchor Image */}
          <div className="lg:col-span-5 px-4">
            <div className="aspect-[4/5] bg-primary/5 overflow-hidden shadow-lg">
              <img 
                src="images/ritual.png" 
                alt="ELYS Ritual Preparation"
                className="w-full h-full object-cover object-center grayscale-[0.1] hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: The Steps */}
          <div className="lg:col-span-4 pt-4 flex flex-col gap-16">
            
            <div className="flex gap-8 items-start group">
              <div className="w-14 h-14 shrink-0 flex items-center justify-center border border-primary/10 group-hover:border-primary/30 transition-colors">
                <Droplets className="w-7 h-7 text-primary/70" strokeWidth={1} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] font-sans font-bold text-primary/30 tracking-widest">01</span>
                  <h4 className="font-sans text-[13px] tracking-[0.2em] font-bold uppercase text-primary">ARRIVAL</h4>
                </div>
                <p className="text-[15px] text-primary/70 leading-relaxed italic font-light max-w-[280px]">
                  Add one scoop (7g) to 200 ml of water. Let the day begin to fade.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start group">
              <div className="w-14 h-14 shrink-0 flex items-center justify-center border border-primary/10 group-hover:border-primary/30 transition-colors">
                <RefreshCw className="w-7 h-7 text-primary/70" strokeWidth={1} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] font-sans font-bold text-primary/30 tracking-widest">02</span>
                  <h4 className="font-sans text-[13px] tracking-[0.2em] font-bold uppercase text-primary">PRESENCE</h4>
                </div>
                <p className="text-[15px] text-primary/70 leading-relaxed italic font-light max-w-[280px]">
                  Stir well and take a moment for yourself. Deep, slow breaths.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start group">
              <div className="w-14 h-14 shrink-0 flex items-center justify-center border border-primary/10 group-hover:border-primary/30 transition-colors">
                <Moon className="w-7 h-7 text-primary/70" strokeWidth={1} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] font-sans font-bold text-primary/30 tracking-widest">03</span>
                  <h4 className="font-sans text-[13px] tracking-[0.2em] font-bold uppercase text-primary">REST</h4>
                </div>
                <p className="text-[15px] text-primary/70 leading-relaxed italic font-light max-w-[280px]">
                  Enjoy your evening ritual 30–60 minutes before scheduled rest.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Ritual;
