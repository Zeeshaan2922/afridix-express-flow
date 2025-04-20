
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen 
          ? "bg-white text-brand-blue shadow-md py-3" 
          : "bg-transparent text-white py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold font-poppins">
            <span className="text-brand-red">Afridi</span> Express
          </a>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="hover:text-brand-red transition-colors">Services</a>
            <a href="#why-choose-us" className="hover:text-brand-red transition-colors">Why Us</a>
            <a href="#about" className="hover:text-brand-red transition-colors">About</a>
            <a href="#blog" className="hover:text-brand-red transition-colors">Blog</a>
            <a 
              href="#quote" 
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 ${
                isScrolled ? "bg-brand-red hover:bg-brand-red/90 text-white" : "bg-white text-brand-blue hover:bg-white/90"
              }`}
            >
              Get a Quote
            </a>
          </nav>
          
          <button 
            className="md:hidden focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-brand-blue" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-brand-blue" : "text-white"}`} />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-3">
              <a 
                href="#services" 
                className="py-2 px-4 hover:bg-gray-100 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#why-choose-us" 
                className="py-2 px-4 hover:bg-gray-100 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Why Us
              </a>
              <a 
                href="#about" 
                className="py-2 px-4 hover:bg-gray-100 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#blog" 
                className="py-2 px-4 hover:bg-gray-100 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </a>
              <Button 
                className="bg-brand-red hover:bg-brand-red/90 text-white w-full justify-center"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get a Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
