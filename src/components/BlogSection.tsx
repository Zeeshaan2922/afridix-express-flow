
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  imageSrc: string;
}

const BlogCard = ({ title, excerpt, imageSrc }: BlogCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div 
        className="h-48 bg-cover bg-center" 
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-brand-blue mb-3 font-poppins">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <a href="#" className="inline-flex items-center text-brand-red font-medium group">
          Read More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const blogs = [
    {
      title: "Cold Chain in the UAE: Challenges & Solutions",
      excerpt: "Maintaining temperature integrity across UAE's diverse climate zones presents unique challenges. Learn how modern reefer technology is solving them.",
      imageSrc: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
    },
    {
      title: "Lowbed vs. Flatbed Trailers: Which One Do You Need?",
      excerpt: "Confused about which trailer type suits your freight needs? This guide breaks down the key differences to help you make the right choice.",
      imageSrc: "https://images.unsplash.com/photo-1469041797191-50ace28483c3"
    },
    {
      title: "Cross-Border Freight Rules Every B2B Must Know",
      excerpt: "Navigating customs and regulatory requirements when shipping across GCC borders? Here's what you need to know to keep your freight moving.",
      imageSrc: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="blog">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4 font-poppins">
            What's New in Freight & Logistics?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tips, market insights & updates from the road
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              excerpt={blog.excerpt}
              imageSrc={blog.imageSrc}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a href="#" className="inline-flex items-center text-brand-red font-medium text-lg group">
            View All Blog Posts <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
