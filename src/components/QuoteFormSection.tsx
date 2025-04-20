
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const QuoteFormSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fromLocation: "",
    toLocation: "",
    vehicleType: "",
    numberOfVehicles: "",
    desiredDate: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send data to an email or API
    console.log("Form submitted:", formData);
    toast({
      title: "Quote Request Sent",
      description: "We'll get back to you as soon as possible!",
    });
    // Reset form
    setFormData({
      fromLocation: "",
      toLocation: "",
      vehicleType: "",
      numberOfVehicles: "",
      desiredDate: ""
    });
  };

  return (
    <section className="py-20 bg-gray-50" id="quote">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="bg-brand-blue text-white p-8 md:p-12 md:w-2/5 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4 font-poppins">Let's Price It Right.</h2>
              <p className="mb-6">
                Get a tailored estimate based on your specific requirements. We provide transparent pricing with no hidden fees.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Transparent Pricing
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> No Hidden Fees
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Competitive Rates
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Fast Response Time
                </li>
              </ul>
            </div>
            
            <div className="p-8 md:p-12 md:w-3/5">
              <h3 className="text-2xl font-bold text-brand-blue mb-6 font-poppins">Request a Quote</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fromLocation">From Location</Label>
                    <Input 
                      id="fromLocation" 
                      name="fromLocation" 
                      value={formData.fromLocation} 
                      onChange={handleChange} 
                      placeholder="e.g., Dubai" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="toLocation">To Location</Label>
                    <Input 
                      id="toLocation" 
                      name="toLocation" 
                      value={formData.toLocation} 
                      onChange={handleChange} 
                      placeholder="e.g., Abu Dhabi" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="vehicleType">Vehicle Type</Label>
                  <Select 
                    onValueChange={(value) => handleSelectChange(value, "vehicleType")} 
                    value={formData.vehicleType}
                  >
                    <SelectTrigger id="vehicleType">
                      <SelectValue placeholder="Select vehicle type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="flatbed">Flatbed Trailer</SelectItem>
                      <SelectItem value="lowbed">Lowbed Trailer</SelectItem>
                      <SelectItem value="reefer">Temperature-Controlled (Reefer)</SelectItem>
                      <SelectItem value="truck">Truck</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="numberOfVehicles">Number of Vehicles</Label>
                    <Input 
                      id="numberOfVehicles" 
                      name="numberOfVehicles" 
                      type="number"
                      min="1"
                      value={formData.numberOfVehicles} 
                      onChange={handleChange} 
                      placeholder="e.g., 1" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="desiredDate">Desired Date</Label>
                    <Input 
                      id="desiredDate" 
                      name="desiredDate" 
                      type="date" 
                      value={formData.desiredDate} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                </div>
                
                <Button type="submit" className="w-full bg-brand-red hover:bg-brand-red/90 text-white font-medium py-6">
                  Get Instant Quote
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteFormSection;
