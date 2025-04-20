
import { Truck } from "lucide-react";

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  cta 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  cta: string; 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] flex flex-col">
      <div className="mb-4">
        <Icon className="h-12 w-12 text-brand-red" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-bold text-brand-blue mb-3 font-poppins">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <button className="text-brand-red font-medium flex items-center group">
        {cta} 
        <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
      </button>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: Truck,
      title: "Flatbed Trailer Transport",
      description: "Built for Heavy-Duty Hauls. From construction steel to industrial generators, our flatbed trailers are ready for the long haul.",
      cta: "Get Flatbed Pricing"
    },
    {
      icon: Truck,
      title: "Lowbed Trailer Transport",
      description: "Low Clearance, High Performance. Specialized for oversized machinery and heavy equipment. Perfect for on-site delivery.",
      cta: "Book a Lowbed Job"
    },
    {
      icon: Truck,
      title: "Temperature-Controlled Trailers",
      description: "Cold Chain, Always Maintained. We move perishable goods in climate-optimized 40-foot reefers — ideal for food and pharma.",
      cta: "Send Us Your Requirements"
    },
    {
      icon: Truck,
      title: "UAE/GCC-Wide Trucking",
      description: "Wherever You Need It, We're Already Rolling. Full-service trucking across Dubai, Sharjah, Abu Dhabi, and into KSA & Oman.",
      cta: "Request Cross-GCC Quote"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4 font-poppins">Services We Offer</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional logistics solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
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
