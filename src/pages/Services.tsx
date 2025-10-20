import { Ship, Package, TrendingUp, Search, Shield, Truck } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
        <div className="section-container">
          <h1 className="heading-display text-5xl sm:text-6xl mb-6 text-center">Our Services</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-primary-foreground/90">
            Comprehensive trading solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Import Services */}
          <div className="card-elegant">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Ship className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Import Services</h2>
            <p className="text-muted-foreground mb-6">
              We source high-quality products from trusted international suppliers, ensuring compliance with all regulatory requirements and quality standards.
            </p>
            <ul className="space-y-3">
              {[
                "Product sourcing from verified suppliers",
                "Quality inspection and certification",
                "Customs clearance and documentation",
                "Competitive shipping rates",
                "Door-to-door delivery options"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-primary rounded-full p-1 mt-0.5">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Export Services */}
          <div className="card-elegant">
            <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Package className="h-8 w-8 text-accent" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Export Services</h2>
            <p className="text-muted-foreground mb-6">
              Connect your products with international markets. We handle all aspects of the export process, from documentation to final delivery.
            </p>
            <ul className="space-y-3">
              {[
                "Market research and buyer identification",
                "Export documentation and licensing",
                "International shipping coordination",
                "Payment processing and trade finance",
                "After-sales support and tracking"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-accent rounded-full p-1 mt-0.5">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Logistics Management */}
          <div className="card-elegant">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Truck className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Logistics Management</h2>
            <p className="text-muted-foreground mb-6">
              End-to-end supply chain solutions that ensure your products reach their destination safely, on time, and cost-effectively.
            </p>
            <ul className="space-y-3">
              {[
                "Sea, air, and land freight options",
                "Warehousing and storage solutions",
                "Inventory management",
                "Real-time shipment tracking",
                "Last-mile delivery coordination"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-primary rounded-full p-1 mt-0.5">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Sourcing */}
          <div className="card-elegant">
            <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Search className="h-8 w-8 text-accent" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Product Sourcing</h2>
            <p className="text-muted-foreground mb-6">
              Leverage our extensive network to find the right products at the right price, with quality guaranteed.
            </p>
            <ul className="space-y-3">
              {[
                "Supplier verification and evaluation",
                "Price negotiation and comparison",
                "Sample procurement and testing",
                "Customization and OEM services",
                "Ongoing supplier relationship management"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-accent rounded-full p-1 mt-0.5">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-muted py-20">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-center mb-12">Additional Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Quality Assurance",
                description: "Comprehensive quality control and product inspection services"
              },
              {
                icon: TrendingUp,
                title: "Market Analysis",
                description: "In-depth market research and trade opportunity identification"
              },
              {
                icon: Package,
                title: "Custom Solutions",
                description: "Tailored trading solutions designed for your specific needs"
              }
            ].map((service, index) => (
              <div key={index} className="bg-card p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Contact us today to discuss how we can support your international trading needs.
        </p>
        <Link to="/contact">
          <Button size="lg" className="btn-primary">
            Request a Quote
          </Button>
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
