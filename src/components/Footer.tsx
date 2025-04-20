
import { MapPin, Phone, Mail, Linkedin, Facebook } from "lucide-react";
import GoogleMap from "./GoogleMap";

const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-5">
            <h3 className="text-2xl font-bold mb-4 font-poppins">Afridi Express Transport LLC</h3>
            <p className="mb-6 text-gray-300">
              Your trusted logistics partner in the UAE. Reliable, on-time transport solutions for businesses of every size.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-lg font-bold mb-4 font-poppins">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Flatbed Trailer Transport</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Lowbed Trailer Transport</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Temperature-Controlled Trailers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">UAE/GCC-Wide Trucking</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="text-lg font-bold mb-4 font-poppins">Contact Us</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-brand-red" />
                <span className="text-gray-300">Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-brand-red" />
                <span className="text-gray-300">+971 XXX XXX XXX</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-brand-red" />
                <a href="mailto:sales@afridiexpresstransport.com" className="text-gray-300 hover:text-white transition-colors">
                  sales@afridiexpresstransport.com
                </a>
              </li>
            </ul>
            <GoogleMap />
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            Copyright © 2025 Afridi Express Transport LLC. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
