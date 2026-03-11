import { ArrowRight, Globe, TrendingUp, Users, Shield, CheckCircle, Leaf, Handshake, Award, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/use-scroll-animation";
import StatisticsSection from "@/components/StatisticsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersMarquee from "@/components/PartnersMarquee";
import OfficesSection from "@/components/OfficesSection";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.jpg";
import sheepImage from "@/assets/sheep-export.jpg";
import camelsImage from "@/assets/camels-export.jpg";
import cattleImage from "@/assets/cattle-export.jpg";
import gumArabicImage from "@/assets/gum-arabic-real.jpg";
import peanutsImage from "@/assets/peanuts-real.jpg";
import businessSectorsBg from "@/assets/business-sectors-bg.jpg";
import heroImage from "@/assets/hero-spices-bg.png";

const Index = () => {
  const { t, dir } = useLanguage();

  const tradeItems = [
    { image: sheepImage, title: t("trade.sheep"), description: t("trade.sheep.desc") },
    { image: camelsImage, title: t("trade.camels"), description: t("trade.camels.desc") },
    { image: cattleImage, title: t("trade.cattle"), description: t("trade.cattle.desc") },
    { image: gumArabicImage, title: t("trade.gum"), description: t("trade.gum.desc") },
    { image: peanutsImage, title: t("trade.peanuts"), description: t("trade.peanuts.desc") },
  ];

  const values = [
    { icon: Eye, title: t("values.transparency.title"), description: t("values.transparency.desc"), iconColor: "text-blue-500", bgColor: "bg-blue-500/10", hoverBg: "group-hover:bg-blue-500/20" },
    { icon: Award, title: t("values.excellence.title"), description: t("values.excellence.desc"), iconColor: "text-amber-500", bgColor: "bg-amber-500/10", hoverBg: "group-hover:bg-amber-500/20" },
    { icon: Handshake, title: t("values.cooperation.title"), description: t("values.cooperation.desc"), iconColor: "text-emerald-500", bgColor: "bg-emerald-500/10", hoverBg: "group-hover:bg-emerald-500/20" },
    { icon: Leaf, title: t("values.environment.title"), description: t("values.environment.desc"), iconColor: "text-green-500", bgColor: "bg-green-500/10", hoverBg: "group-hover:bg-green-500/20" },
  ];

  const features = [
    { icon: Globe, title: t("why.global.title"), description: t("why.global.desc"), iconColor: "text-sky-500", bgColor: "bg-sky-500/10", hoverBg: "group-hover:bg-sky-500/20" },
    { icon: Shield, title: t("why.quality.title"), description: t("why.quality.desc"), iconColor: "text-indigo-500", bgColor: "bg-indigo-500/10", hoverBg: "group-hover:bg-indigo-500/20" },
    { icon: TrendingUp, title: t("why.pricing.title"), description: t("why.pricing.desc"), iconColor: "text-emerald-500", bgColor: "bg-emerald-500/10", hoverBg: "group-hover:bg-emerald-500/20" },
    { icon: Users, title: t("why.team.title"), description: t("why.team.desc"), iconColor: "text-violet-500", bgColor: "bg-violet-500/10", hoverBg: "group-hover:bg-violet-500/20" },
    { icon: CheckCircle, title: t("why.reliable.title"), description: t("why.reliable.desc"), iconColor: "text-teal-500", bgColor: "bg-teal-500/10", hoverBg: "group-hover:bg-teal-500/20" },
    { icon: Globe, title: t("why.custom.title"), description: t("why.custom.desc"), iconColor: "text-rose-500", bgColor: "bg-rose-500/10", hoverBg: "group-hover:bg-rose-500/20" },
  ];

  return (
    <div className="min-h-screen" dir={dir}>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0 bg-primary" aria-hidden="true" />
        <div
          className="absolute -inset-12 sm:-inset-16 z-0 bg-cover bg-center animate-slow-zoom"
          style={{ backgroundImage: `url(${heroImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 z-[1] bg-primary/70" aria-hidden="true" />
        
        <div className="relative z-10 section-container text-center text-white">
          <div className="mb-8 animate-slide-up">
            <img src={logo} alt={t("hero.title")} className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full shadow-2xl border-4 border-white/30 object-contain bg-white/10 backdrop-blur-sm animate-float" />
          </div>
          <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl mb-6 text-white drop-shadow-lg animate-slide-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            {t("hero.title")}
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-4xl mx-auto text-white/95 leading-relaxed drop-shadow-md animate-slide-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            {t("hero.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="group hover:scale-105 transition-transform">
                {t("hero.cta")}
                <ArrowRight className={`h-5 w-5 transition-transform ${dir === 'rtl' ? 'mr-2 group-hover:-translate-x-1 rotate-180' : 'ml-2 group-hover:translate-x-1'}`} />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 hover:scale-105 transition-transform">
                {t("hero.services")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-container bg-muted/30">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t("values.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("values.description")}</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <div className="card-elegant text-center group h-full">
                <div className={`${value.bgColor} ${value.hoverBg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors`}>
                  <value.icon className={`h-8 w-8 ${value.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Business Sectors Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${businessSectorsBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-4xl font-bold mb-6 text-primary-foreground">{t("sectors.title")}</h2>
            <p className="text-xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">{t("sectors.description")}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* What We Trade Section */}
      <section className="section-container bg-muted/30">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t("trade.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("trade.description")}</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {tradeItems.map((item, index) => (
            <AnimatedSection key={index} animation="scale" delay={index * 100}>
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground text-center">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-primary-foreground/90 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection animation="fade-up" delay={500} className="text-center mt-10">
          <Link to="/products">
            <Button size="lg" variant="outline" className="group">
              {t("trade.viewAll")}
              <ArrowRight className={`h-5 w-5 transition-transform ${dir === 'rtl' ? 'mr-2 group-hover:-translate-x-1 rotate-180' : 'ml-2 group-hover:translate-x-1'}`} />
            </Button>
          </Link>
        </AnimatedSection>
      </section>

      <StatisticsSection />
      <OfficesSection />
      <PartnersMarquee />

      {/* Features Section */}
      <section className="section-container">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t("why.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("why.description")}</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <div className="card-elegant text-center h-full group">
                <div className={`${feature.bgColor} ${feature.hoverBg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors`}>
                  <feature.icon className={`h-8 w-8 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <TestimonialsSection />

      {/* CTA Section */}
      <section className="bg-muted py-20 relative overflow-hidden">
        <div className="absolute top-10 left-10 opacity-5">
          <img src={logo} alt="" className="w-32 h-32 object-contain" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-5">
          <img src={logo} alt="" className="w-40 h-40 object-contain" />
        </div>
        <AnimatedSection animation="scale" className="section-container text-center relative z-10">
          <div className="mb-6">
            <img src={logo} alt={t("hero.title")} className="w-16 h-16 mx-auto rounded-full shadow-lg border-2 border-primary/20 object-contain" />
          </div>
          <p className="text-lg text-primary/70 mb-4 font-['Amiri',serif] italic">"{t("cta.quote")}"</p>
          <h2 className="text-4xl font-bold mb-6">{t("cta.title")}</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{t("cta.description")}</p>
          <Link to="/contact">
            <Button size="lg" className="btn-primary">
              {t("cta.button")}
              <ArrowRight className={`h-5 w-5 ${dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Button>
          </Link>
        </AnimatedSection>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
