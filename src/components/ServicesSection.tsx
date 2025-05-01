
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

type ServiceCardProps = { 
  title: string; 
  description: string; 
  cta: string; 
  imagePath: string;
  hoverDescription: string;
};

const ServiceCard = ({ title, description, cta, imagePath, hoverDescription }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="overflow-hidden group transition-all duration-300 hover:shadow-xl h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-[16/9]">
        <img 
          src={imagePath}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-brand-blue/80 text-white p-4 flex items-center justify-center text-center transition-opacity duration-300">
            <p className="text-sm">{hoverDescription}</p>
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="text-brand-red font-medium flex items-center group">
          {cta}
          <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </CardContent>
    </Card>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Flatbed Trailer Transport",
      description: "Built for Heavy-Duty Hauls. From construction steel to industrial generators, our flatbed trailers are ready for the long haul.",
      cta: "Get Flatbed Pricing",
      imagePath: "https://images.unsplash.com/photo-1582473761197-8813f1eb4774?q=80&w=1000&auto=format&fit=crop",
      hoverDescription: "Flat Bed Trailers are open platforms perfect for hauling heavy steel beams, farm tractors, or event stages. Their wide, accessible deck allows quick loading with cranes or forklifts."
    },
    {
      title: "Lowbed Trailer Transport",
      description: "Low Clearance, High Performance. Specialized for oversized machinery and heavy equipment. Perfect for on-site delivery.",
      cta: "Book a Lowbed Job",
      imagePath: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1000&auto=format&fit=crop",
      hoverDescription: "Low Bed Trailers carry massive excavators or tall concrete slabs. Their low deck keeps heavy or oversized loads stable and road-legal, perfect for moving cranes to factories or beams to highway projects."
    },
    {
      title: "Temperature-Controlled Trailers",
      description: "Cold Chain, Always Maintained. We move perishable goods in climate-optimized 40-foot reefers — ideal for food and pharma.",
      cta: "Send Us Your Requirements",
      imagePath: "https://images.unsplash.com/photo-1516467717650-98db38d66196?q=80&w=1000&auto=format&fit=crop",
      hoverDescription: "Temperature Controlled Trailers keep frozen beef, fresh apples, or vaccines cold. With adjustable cooling zones, they're perfect for delivering mixed goods to supermarkets, hospitals, or big events."
    },
    {
      title: "UAE/GCC-Wide Trucking",
      description: "Wherever You Need It, We're Already Rolling. Full-service trucking across Dubai, Sharjah, Abu Dhabi, and into KSA & Oman.",
      cta: "Request Cross-GCC Quote",
      imagePath: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1000&auto=format&fit=crop",
      hoverDescription: "We provide seamless cross-border logistics across the UAE and GCC countries, handling all customs documentation and regulatory requirements for smooth transit."
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
              title={service.title}
              description={service.description}
              cta={service.cta}
              imagePath={service.imagePath}
              hoverDescription={service.hoverDescription}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
