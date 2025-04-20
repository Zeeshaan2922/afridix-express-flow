
import { Clock, Shield, TruckIcon, MapPin } from "lucide-react";

interface FeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const Feature = ({ icon: Icon, title, description }: FeatureProps) => {
  return (
    <div className="flex items-start">
      <div className="mr-4 p-3 bg-brand-red rounded-lg">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 font-poppins">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: MapPin,
      title: "Reliable UAE Coverage",
      description: "We operate all across the UAE with planned transit into Saudi Arabia, Oman, Qatar, Bahrain, and Kuwait."
    },
    {
      icon: Shield,
      title: "Licensed & Professional Drivers",
      description: "Our team consists of skilled, licensed professionals who ensure safe and reliable transportation."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Our support team is available around the clock to assist you with any queries or emergencies."
    },
    {
      icon: TruckIcon,
      title: "Fleet Availability On Demand",
      description: "We maintain a large fleet of vehicles to ensure availability whenever you need it."
    }
  ];

  return (
    <section className="py-20 bg-white" id="why-choose-us">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4 font-poppins">
            Why Afridi Express Transport?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just transport freight — we power supply chains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <Feature 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
