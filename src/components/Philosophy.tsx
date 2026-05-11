import { Brain, Wifi, Clock, Moon } from 'lucide-react';

const Philosophy = () => {
  return (
    <section id="philosophy" className="w-full bg-white border-b border-primary/10 overflow-hidden relative">
      <div className="max-w-[1800px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
        
        {/* Left Content Column - Perfectly aligned with Hero */}
        <div className="lg:col-span-5 flex flex-col justify-center pt-12 pb-10">
          <p className="text-[10px] tracking-[0.3em] font-semibold text-primary/40 mb-8 uppercase">
            THE PHILOSOPHY
          </p>
          
          <h2 className="text-3xl lg:text-[2.75rem] leading-[1.1] mb-6 font-serif">
            Modern life is<br />relentless.
          </h2>
          
          <div className="w-12 h-[1px] bg-primary/20 mb-8" />
          
          <div className="space-y-6 text-primary/80 mb-10 text-sm lg:text-base leading-relaxed max-w-md">
            <p>
              Long days. Constant decisions. A mind that refuses to slow down.
            </p>
            <p>
              ELYS was created for those who carry more than they show. It is not about sleep — it is about the transition.
            </p>
          </div>

          {/* Icons Row - Responsive Stacking */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-0 max-w-lg">
            <div className="flex flex-col items-start gap-3 pr-4">
              <Brain className="w-4 h-4 text-primary/70" strokeWidth={1} />
              <span className="text-[8px] tracking-widest font-bold uppercase leading-tight">
                Cognitive<br/>Overload
              </span>
            </div>
            <div className="flex flex-col items-start gap-3 px-4 md:border-l border-primary/10">
              <Wifi className="w-4 h-4 text-primary/70" strokeWidth={1} />
              <span className="text-[8px] tracking-widest font-bold uppercase leading-tight">
                Digital<br/>Fatigue
              </span>
            </div>
            <div className="flex flex-col items-start gap-3 md:px-4 md:border-l border-primary/10">
              <Clock className="w-4 h-4 text-primary/70" strokeWidth={1} />
              <span className="text-[8px] tracking-widest font-bold uppercase leading-tight">
                Always<br/>On
              </span>
            </div>
            <div className="flex flex-col items-start gap-3 px-4 border-l md:border-l border-primary/10">
              <Moon className="w-4 h-4 text-primary/70" strokeWidth={1} />
              <span className="text-[8px] tracking-widest font-bold uppercase leading-tight">
                No True<br/>Disconnect
              </span>
            </div>
          </div>
        </div>

        {/* Right Image Column - Final Widescreen Bleed Fix */}
        <div className="lg:col-span-7 relative min-h-[450px]">
          <div className="absolute top-0 bottom-[4px] right-[-100vw] left-0 overflow-hidden">
            <img 
              src="/images/philo.png" 
              alt="Calm interior space"
              className="w-full h-full object-contain object-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
