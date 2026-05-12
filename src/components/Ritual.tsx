import { Droplets, RefreshCw, Moon, Check } from 'lucide-react';

const Ritual = () => {
  return (
    <section id="ritual" className="w-full bg-white py-24">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-12">
        {/* Added items-center to keep all three columns vertically aligned */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Intro Text */}
          <div className="lg:col-span-4 flex flex-col py-2">
            <span className="text-[10px] tracking-[0.3em] font-semibold text-primary/40 uppercase mb-6 block">The Ritual</span>
            <div className="w-12 h-[1px] bg-primary/20 mb-8"></div>
            <h2 className="text-4xl lg:text-5xl mb-8 leading-[1.1]">
              The Night Reset <br/>
              <span className="italic">Ritual.</span>
            </h2>
            <p className="text-lg text-primary/80 mb-10 max-w-md leading-relaxed font-light">
              An intentional sequence designed to signal to your nervous system that it's time to decompress and prepare for deep restoration.
            </p>
            
            <div className="flex items-center gap-4 text-primary/40 mt-4">
              <Check className="w-5 h-5" strokeWidth={1} />
              <span className="text-[10px] tracking-widest font-semibold uppercase">Optimized for deep recovery</span>
            </div>
          </div>

          {/* Middle Column - Image (Slightly smaller for better balance) */}
          <div className="lg:col-span-4 aspect-[3/4] bg-primary/5 overflow-hidden shadow-sm">
            <img 
              src="images/ritual.png" 
              alt="Product Preparation"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Right Column - Steps */}
          <div className="lg:col-span-4 flex flex-col gap-10 lg:pl-4">
            <div className="flex gap-8 items-start">
              <Droplets className="w-12 h-12 shrink-0 text-primary/60" strokeWidth={1} />
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[12px] font-sans font-bold text-primary/30 tracking-widest">I.</span>
                  <h4 className="font-sans text-[13px] tracking-[0.2em] font-bold uppercase leading-tight">ARRIVAL</h4>
                </div>
                <p className="text-[15px] text-primary/70 leading-relaxed italic font-light max-w-[280px]">
                  Add one scoop (7g) to 200 ml of water. Let the day begin to fade.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <RefreshCw className="w-12 h-12 shrink-0 text-primary/60" strokeWidth={1} />
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[12px] font-sans font-bold text-primary/30 tracking-widest">II.</span>
                  <h4 className="font-sans text-[13px] tracking-[0.2em] font-bold uppercase leading-tight">PRESENCE</h4>
                </div>
                <p className="text-[15px] text-primary/70 leading-relaxed italic font-light max-w-[280px]">
                  Stir well and take a moment for yourself. Take a breath.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <Moon className="w-12 h-12 shrink-0 text-primary/60" strokeWidth={1} />
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[12px] font-sans font-bold text-primary/30 tracking-widest">III.</span>
                  <h4 className="font-sans text-[12px] tracking-[0.2em] font-bold uppercase leading-tight text-primary/80">REST</h4>
                </div>
                <p className="text-[15px] text-primary/70 leading-relaxed italic font-light max-w-[280px]">
                  Enjoy your evening ritual 30–60 minutes before rest.
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
