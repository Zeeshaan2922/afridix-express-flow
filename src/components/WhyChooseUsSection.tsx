
import { Clock, Shield, TruckIcon, MapPin, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const Feature = ({ icon: Icon, title, description }: FeatureProps) => {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-start">
          <div className="mr-4 p-3 bg-brand-red rounded-lg">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 font-poppins">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface StepProps {
  number: number;
  title: string;
  description: string;
}

const Step = ({ number, title, description }: StepProps) => {
  return (
    <div className="flex items-start">
      <div className="mr-4 flex-shrink-0 w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center font-bold">
        {number}
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
      title: "Extensive Nation-Wide Coverage",
      description: "Seamless transport across the UAE, for your growing needs."
    },
    {
      icon: Shield,
      title: "Expert Licensed Drivers",
      description: "Our skilled, certified drivers handle your cargo with care, ensuring safe and timely deliveries every time."
    },
    {
      icon: Clock,
      title: "24/7 Dedicated Support",
      description: "Our team is always ready to assist, day or night, resolving queries or emergencies to keep your operations smooth."
    },
    {
      icon: TruckIcon,
      title: "Diverse On-Demand Fleet",
      description: "From flatbeds to chiller vans, our varied fleet meets your unique logistics demands instantly."
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Contact Us",
      description: "Share your transport needs via phone, email, or our online form, and we'll get started."
    },
    {
      number: 2,
      title: "Get a Quote",
      description: "Receive a clear, customized quote designed for your cargo and delivery requirements."
    },
    {
      number: 3,
      title: "Vehicle Dispatch",
      description: "We match your goods with the perfect vehicle and driver for secure, efficient transport."
    },
    {
      number: 4,
      title: "Timely Delivery",
      description: "Your cargo arrives safely and on schedule, keeping your supply chain on track."
    }
  ];

  return (
    <section className="py-20 bg-white" id="why-choose-us">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4 font-poppins">
            Why Choose Afridi Express Transport?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just move freight—we fuel your supply chain with reliability and precision across the UAE and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Feature 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-8 mt-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-brand-blue mb-4 font-poppins">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our simple, efficient process delivers your goods with speed and reliability, tailored to your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Step 
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
