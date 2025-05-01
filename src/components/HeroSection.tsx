
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center w-full overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 to-brand-blue/70 z-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 z-20 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-poppins leading-tight">
            Reliable Freight & Trucking Services Across UAE
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-sans">
            Specialized in Flatbed, Lowbed & Temperature-Controlled Trailers
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-brand-red hover:bg-brand-red/90 text-white font-medium px-8 py-6 text-lg">
              Get a Quote
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 font-medium px-8 py-6 text-lg">
              Speak with Us on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
