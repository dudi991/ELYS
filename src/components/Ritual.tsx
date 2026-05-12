import { Droplets, RefreshCw, Moon } from 'lucide-react';

const Ritual = () => {
  return (
    <section id="ritual" className="w-full bg-white pt-6 pb-12">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Image */}
          <div className="lg:col-span-8 aspect-[16/9] bg-primary/5 overflow-hidden">
            <img 
              src="images/ritual.png" 
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
      </div>
    </section>
  );
};

export default Ritual;
