import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import constructionImg from "@/assets/product-construction.jpg";
import electronicsImg from "@/assets/product-electronics.jpg";
import textilesImg from "@/assets/product-textiles.jpg";
import agricultureImg from "@/assets/product-agriculture.jpg";

const Products = () => {
  const categories = [
    {
      title: "Construction Materials",
      image: constructionImg,
      description: "High-quality building materials including steel, cement, and industrial components for construction projects.",
      items: ["Steel & Iron Products", "Cement & Concrete", "Building Hardware", "Industrial Materials"]
    },
    {
      title: "Electronics & Technology",
      image: electronicsImg,
      description: "Latest electronics and technology products from leading manufacturers worldwide.",
      items: ["Consumer Electronics", "Computer Hardware", "Telecommunications", "Smart Devices"]
    },
    {
      title: "Textiles & Fabrics",
      image: textilesImg,
      description: "Premium textiles, fabrics, and garments for both industrial and retail markets.",
      items: ["Cotton & Synthetic Fabrics", "Ready-Made Garments", "Industrial Textiles", "Home Textiles"]
    },
    {
      title: "Agricultural Products",
      image: agricultureImg,
      description: "Fresh and processed agricultural commodities from reliable sources.",
      items: ["Grains & Cereals", "Coffee & Spices", "Dried Fruits", "Food Commodities"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
        <div className="section-container">
          <h1 className="heading-display text-5xl sm:text-6xl mb-6 text-center">Our Products</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-primary-foreground/90">
            Discover our wide range of high-quality products sourced from trusted suppliers worldwide
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-container">
        <div className="space-y-16">
          {categories.map((category, index) => (
            <div 
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <h2 className="text-4xl font-bold mb-4">{category.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {category.description}
                </p>
                <div className="space-y-3 mb-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3">
                      <div className="bg-primary rounded-full p-1">
                        <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact">
                  <Button className="btn-primary">
                    Inquire About {category.title}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Categories */}
      <section className="bg-muted py-20">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-center mb-12">More Product Categories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Industrial Equipment",
                description: "Machinery and equipment for various industrial applications"
              },
              {
                title: "Automotive Parts",
                description: "Genuine and aftermarket parts for vehicles and machinery"
              },
              {
                title: "Medical Supplies",
                description: "Healthcare equipment and medical consumables"
              },
              {
                title: "Chemicals",
                description: "Industrial and specialty chemicals for various uses"
              },
              {
                title: "Packaging Materials",
                description: "Comprehensive packaging solutions for all industries"
              },
              {
                title: "Consumer Goods",
                description: "Wide range of FMCG and consumer products"
              }
            ].map((item, index) => (
              <div key={index} className="bg-card p-8 rounded-xl hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <Link to="/contact" className="text-primary font-medium hover:underline">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Orders */}
      <section className="section-container text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            We specialize in sourcing custom products tailored to your specific requirements. Our extensive network of suppliers can help you find exactly what you need.
          </p>
          <Link to="/contact">
            <Button size="lg" className="btn-primary">
              Request Custom Product Sourcing
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
