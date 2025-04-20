
const AboutSection = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="w-full h-96 bg-[url('https://images.unsplash.com/photo-1469041797191-50ace28483c3')] bg-cover bg-center rounded-lg shadow-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-red rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[url('https://images.unsplash.com/photo-1452378174528-3090a4bba7b2')] bg-cover bg-center rounded-lg shadow-lg transform rotate-6"></div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6 font-poppins">
              Driven by Trust. Powered by Precision.
            </h2>
            <p className="text-gray-600 mb-4">
              Afridi Express Transport LLC (AET) is a trusted logistics partner in the UAE. Our fleet supports retailers, freight forwarders, FMCGs, chemical suppliers, and more with reliable, on-time transport solutions.
            </p>
            <p className="text-gray-600 mb-6">
              Based in Dubai, we've been trusted by contractors, manufacturers, and supply chains for consistent, compliant, and cost-efficient freight operations. We speak logistics fluently — so you don't have to.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-brand-blue mb-2">Industries We Serve</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Construction & Infrastructure</li>
                  <li>• Retail & FMCG</li>
                  <li>• Events & Exhibition</li>
                  <li>• Cold Chain & Pharmaceuticals</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-brand-blue mb-2">Our Coverage</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• UAE (All Emirates)</li>
                  <li>• Saudi Arabia</li>
                  <li>• Oman</li>
                  <li>• Qatar & Bahrain</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
