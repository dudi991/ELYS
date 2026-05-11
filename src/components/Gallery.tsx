

const Gallery = () => {
  const images = [
    "images/gallery1.png",
    "images/gallery2.png",
    "images/gallery1.png",
    "images/gallery2.png",
    "images/gallery1.png"
  ];

  return (
    <section className="w-full bg-white">
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
        {images.map((src, index) => (
          <div key={index} className="aspect-[2/1] relative bg-primary/5 hover:opacity-90 transition-opacity cursor-pointer overflow-hidden">
            <img 
              src={src} 
              alt={`Lifestyle ${index + 1}`} 
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] opacity-90"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
