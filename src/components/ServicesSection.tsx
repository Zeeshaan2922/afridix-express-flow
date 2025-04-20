
const ServiceCard = ({ 
  imagePath,
  title, 
  description, 
  cta 
}: { 
  imagePath: string;
  title: string; 
  description: string; 
  cta: string; 
}) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:shadow-xl">
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={imagePath}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="text-brand-red font-medium flex items-center group">
          {cta}
          <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      imagePath: "https://images.unsplash.com/photo-1586191582056-b7f0eafa4b30",
      title: "Flatbed Trailer Transport",
      description: "Built for Heavy-Duty Hauls. From construction steel to industrial generators, our flatbed trailers are ready for the long haul.",
      cta: "Get Flatbed Pricing"
    },
    {
      imagePath: "https://images.unsplash.com/photo-1586191582039-36417d1b49bf",
      title: "Lowbed Trailer Transport",
      description: "Low Clearance, High Performance. Specialized for oversized machinery and heavy equipment. Perfect for on-site delivery.",
      cta: "Book a Lowbed Job"
    },
    {
      imagePath: "https://images.unsplash.com/photo-1586191582083-34b593f96b45",
      title: "Temperature-Controlled Trailers",
      description: "Cold Chain, Always Maintained. We move perishable goods in climate-optimized 40-foot reefers — ideal for food and pharma.",
      cta: "Send Us Your Requirements"
    },
    {
      imagePath: "https://images.unsplash.com/photo-1586191582040-63d0f6fe54d9",
      title: "UAE/GCC-Wide Trucking",
      description: "Wherever You Need It, We're Already Rolling. Full-service trucking across Dubai, Sharjah, Abu Dhabi, and into KSA & Oman.",
      cta: "Request Cross-GCC Quote"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">Services We Offer</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional logistics solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              imagePath={service.imagePath}
              title={service.title}
              description={service.description}
              cta={service.cta}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
