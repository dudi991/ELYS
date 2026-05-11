import { Brain, Droplets, RefreshCw, Moon, Check } from 'lucide-react';

const Ritual = () => {
  return (
    <section id="ritual" className="w-full bg-white pt-6 pb-12">
      <div className="max-w-[1800px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column - Compact & Refined */}
        <div className="lg:col-span-4 flex flex-col gap-8 py-2">
          <div>
            <p className="text-[10px] tracking-[0.3em] font-semibold text-primary/40 mb-6 uppercase">
              The evening transition
            </p>
            <h2 className="text-4xl lg:text-[3rem] leading-[1.1] mb-6 font-serif">
              A moment for<br />yourself.
            </h2>
            <p className="text-sm lg:text-base text-primary/80 max-w-sm italic font-light leading-relaxed">
              One scoop. Your time. A gentle boundary between the noise of the day and the quiet of the night.
            </p>
          </div>
          
          <ul className="space-y-3">
            {[
              "Notes of vanilla and subtle tonka bean",
              "Pure, ethically sourced elements",
              "Gentle on the mind and body",
              "30 evenings of quiet presence"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm lg:text-base text-primary/80 italic font-light">
                <Check className="w-3.5 h-3.5 text-primary shrink-0" strokeWidth={3} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Center Column - Reduced Height Image */}
        <div className="lg:col-span-4 h-[400px] relative bg-primary/5 overflow-hidden grayscale-[0.2]">
          <img 
            src="/images/ritual.png" 
            alt="Product Preparation"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Right Column - Compact, larger icons/text */}
        <div className="lg:col-span-4 flex flex-col gap-10 py-2 lg:pl-8">
          <div className="flex gap-8 items-start">
            <Droplets className="w-14 h-14 shrink-0 text-primary/60" strokeWidth={1} />
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[12px] font-sans font-bold text-primary/30 tracking-widest">I.</span>
                <h4 className="font-sans text-[14px] tracking-[0.2em] font-bold uppercase leading-tight">ARRIVAL</h4>
              </div>
              <p className="text-base text-primary/70 leading-relaxed italic font-light max-w-[320px]">
                Add one scoop (7g) to 200 ml of water. Let the day begin to fade.
              </p>
            </div>
          </div>

          <div className="flex gap-8 items-start">
            <RefreshCw className="w-14 h-14 shrink-0 text-primary/60" strokeWidth={1} />
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[12px] font-sans font-bold text-primary/30 tracking-widest">II.</span>
                <h4 className="font-sans text-[14px] tracking-[0.2em] font-bold uppercase leading-tight">PRESENCE</h4>
              </div>
              <p className="text-base text-primary/70 leading-relaxed italic font-light max-w-[320px]">
                Stir well and take a moment for yourself. Take a breath.
              </p>
            </div>
          </div>

          <div className="flex gap-8 items-start">
            <Moon className="w-14 h-14 shrink-0 text-primary/60" strokeWidth={1} />
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[12px] font-sans font-bold text-primary/30 tracking-widest">III.</span>
                <h4 className="font-sans text-[12px] tracking-[0.2em] font-bold uppercase leading-tight text-primary/80">REST</h4>
              </div>
              <p className="text-base text-primary/70 leading-relaxed italic font-light max-w-[320px]">
                Enjoy your evening ritual 30–60 minutes before rest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ritual;
