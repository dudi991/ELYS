

const ingredientData = [
  {
    name: "MAGNESIUM BISGLYCINATE",
    desc: "Supports relaxation & muscle recovery",
    image: "/images/magnesia.png"
  },
  {
    name: "MAGNESIUM L-THREONATE (MAGTEIN®)",
    desc: "Supports cognitive recovery",
    image: "/images/threo.png"
  },
  {
    name: "SHODEN® ASHWAGANDHA",
    desc: "Reduces stress & supports resilience",
    image: "/images/ash.png"
  },
  {
    name: "SUNTHEANINE® L-THEANINE",
    desc: "Promotes calm without drowsiness",
    image: "/images/thea.png"
  },
  {
    name: "AFFRON® SAFFRON EXTRACT",
    desc: "Supports mood & emotional balance",
    image: "/images/saffron.png"
  },
  {
    name: "PHOSPHATIDYLSERINE",
    desc: "Supports cortisol balance & cognitive performance",
    image: "/images/phos.png"
  },
  {
    name: "REISHI DUAL EXTRACT",
    desc: "Supports immune health & recovery",
    image: "/images/mush.png"
  },
  {
    name: "APIGENIN",
    desc: "Promotes relaxation & sleep quality",
    image: "/images/chamo.png"
  },
  {
    name: "GLYCINE",
    desc: "Supports deeper recovery & sleep quality",
    image: "/images/gly.png"
  }
];

const Ingredients = () => {
  return (
    <section id="formula" className="w-full bg-white border-b border-primary/10">
      <div className="px-8 py-6 grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-[1800px] mx-auto">
        <div className="lg:col-span-4 flex flex-col justify-start">
          <p className="text-[10px] tracking-[0.2em] font-semibold text-primary/50 mb-6 uppercase">
            The evening synergy
          </p>
          <h2 className="text-4xl lg:text-[2.75rem] leading-tight mb-6 font-serif">
            A dialogue with<br />your biology.
          </h2>
          <p className="text-primary/80 mb-12 max-w-sm italic font-light">
            A curated selection of natural elements designed to gently signal to your nervous system that the day is done.
          </p>
          <button className="bg-accent px-8 py-4 text-xs tracking-widest font-semibold uppercase text-primary hover:bg-opacity-80 transition-opacity w-max">
            DISCOVER THE INGREDIENTS
          </button>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 pt-4 lg:pt-2">
          {ingredientData.map((item, index) => (
            <div 
              key={index} 
              className={`flex gap-4 items-start p-6 border-primary/10
                /* Desktop: 3 columns */
                ${(index + 1) % 3 !== 0 ? 'lg:border-r' : 'lg:border-r-0'}
                ${index < 6 ? 'lg:border-b' : 'lg:border-b-0'}
                /* Tablet: 2 columns */
                ${(index + 1) % 2 !== 0 && index < 8 ? 'md:border-r' : 'md:border-r-0'}
                ${index < 8 ? 'md:border-b' : 'md:border-b-0'}
                /* Mobile: 1 column */
                ${index < 8 ? 'border-b' : 'border-b-0'}
              `}
            >
              <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 bg-primary/5 border border-primary/10 grayscale-[0.5]">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply opacity-80" />
              </div>
              <div className="flex flex-col pt-1">
                <h4 className="font-sans text-[11px] tracking-[0.2em] font-bold uppercase mb-2 leading-tight text-primary/80">
                  {item.name}
                </h4>
                <p className="text-[13px] text-primary/60 leading-relaxed pr-4 italic font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full pt-0 pb-4 text-center">
        <p className="text-[11px] tracking-[0.3em] font-medium text-primary/40 uppercase italic">
          No Melatonin. No Compromises. Just Quiet Recovery.
        </p>
      </div>
    </section>
  );
};

export default Ingredients;
