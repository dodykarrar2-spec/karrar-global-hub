import { ArrowRight, Globe, TrendingUp, Users, Shield, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-trading.jpg";
import logo from "@/assets/logo.jpg";
import sheepImage from "@/assets/sheep-export.jpg";
import camelsImage from "@/assets/camels-export.jpg";
import cattleImage from "@/assets/cattle-export.jpg";
import gumArabicImage from "@/assets/gum-arabic-real.jpg";
import peanutsImage from "@/assets/peanuts-real.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
        </div>
        
        <div className="relative z-10 section-container text-center text-primary-foreground">
          <div className="mb-8 animate-fade-in">
            <img 
              src={logo} 
              alt="AHMED Karrar Trading" 
              className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full shadow-2xl border-4 border-white/30 object-contain bg-white/10 backdrop-blur-sm"
            />
          </div>
          <h1 className="heading-display text-5xl sm:text-6xl lg:text-7xl mb-6 animate-fade-in">
            Connecting Markets,<br />Creating Value
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto text-primary-foreground/90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Your trusted partner in international trade. Bridging businesses across Africa, the Middle East, and Asia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What We Trade Section */}
      <section className="section-container bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What We Trade</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium products sourced from the finest suppliers across Africa, the Middle East, and Asia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {[
            {
              image: sheepImage,
              title: "الضأن",
              titleEn: "Sheep",
              description: "أجود أنواع الضأن السوداني للتصدير للأسواق العالمية"
            },
            {
              image: camelsImage,
              title: "الجمال",
              titleEn: "Camels",
              description: "إبل سودانية أصيلة للتصدير إلى دول الخليج والشرق الأوسط"
            },
            {
              image: cattleImage,
              title: "الأبقار",
              titleEn: "Cattle",
              description: "أبقار عالية الجودة من المراعي السودانية الطبيعية"
            },
            {
              image: gumArabicImage,
              title: "الصمغ العربي",
              titleEn: "Gum Arabic",
              description: "صمغ عربي سوداني فاخر للصناعات الغذائية والدوائية"
            },
            {
              image: peanutsImage,
              title: "الفول السوداني",
              titleEn: "Peanuts",
              description: "فول سوداني عالي الجودة للأسواق التصديرية العالمية"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground text-center">
                <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                <p className="text-sm font-medium text-primary-foreground/80 mb-2">{item.titleEn}</p>
                <p className="text-sm text-primary-foreground/90 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/products">
            <Button size="lg" variant="outline" className="group">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Karrar Trading?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive trading solutions with a focus on quality, reliability, and long-term partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Globe,
              title: "Global Reach",
              description: "Extensive network across Africa, the Middle East, and Asia, connecting you to markets worldwide."
            },
            {
              icon: Shield,
              title: "Quality Assurance",
              description: "Rigorous quality control processes ensure you receive only the best products and services."
            },
            {
              icon: TrendingUp,
              title: "Competitive Pricing",
              description: "Strong supplier relationships and efficient logistics deliver exceptional value for your investment."
            },
            {
              icon: Users,
              title: "Expert Team",
              description: "Experienced professionals dedicated to understanding and meeting your unique business needs."
            },
            {
              icon: CheckCircle,
              title: "Reliable Service",
              description: "Consistent, on-time delivery and transparent communication throughout every transaction."
            },
            {
              icon: Globe,
              title: "Custom Solutions",
              description: "Tailored trading solutions designed specifically for your business requirements and goals."
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="card-elegant text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-20 relative overflow-hidden">
        {/* Decorative Logo Watermarks */}
        <div className="absolute top-10 left-10 opacity-5">
          <img src={logo} alt="" className="w-32 h-32 object-contain" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-5">
          <img src={logo} alt="" className="w-40 h-40 object-contain" />
        </div>
        <div className="section-container text-center relative z-10">
          <div className="mb-6">
            <img 
              src={logo} 
              alt="AHMED Karrar Trading" 
              className="w-16 h-16 mx-auto rounded-full shadow-lg border-2 border-primary/20 object-contain"
            />
          </div>
          <h2 className="text-4xl font-bold mb-6">Ready to Expand Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with AHMED Karrar Trading and unlock new opportunities in international markets.
          </p>
          <Link to="/contact">
            <Button size="lg" className="btn-primary">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
