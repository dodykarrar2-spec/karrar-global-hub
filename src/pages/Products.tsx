import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, TrendingDown, Ship, Package } from "lucide-react";
import { AnimatedSection } from "@/hooks/use-scroll-animation";
import { ParallaxHero } from "@/hooks/use-parallax";
import { useLanguage } from "@/contexts/LanguageContext";
import sheepImage from "@/assets/sheep-export.jpg";
import camelsImage from "@/assets/camels-export.jpg";
import cattleImage from "@/assets/cattle-export.jpg";
import gumArabicImage from "@/assets/gum-arabic-real.jpg";
import peanutsImage from "@/assets/peanuts-real.jpg";
import cottonImage from "@/assets/cotton.png";
import sunflowerImage from "@/assets/sunflower-seeds.png";
import sesameImage from "@/assets/sesame.png";
import redOnionImage from "@/assets/red-onion.png";
import chilledMeatImage from "@/assets/chilled-meat.png";
import frozenMeatImage from "@/assets/frozen-meat-pack.png";
import cannedMeatImage from "@/assets/canned-meat.png";
import alfalfaImage from "@/assets/alfalfa.png";
import hibiscusImage from "@/assets/hibiscus.png";
import watermelonSeedsImage from "@/assets/watermelon-seeds.png";
import logo from "@/assets/logo.jpg";
import heroImage from "@/assets/hero-sheep.png";

const Products = () => {
  const { t, dir, isArabic } = useLanguage();

  const services = [
    { icon: TrendingUp, title: isArabic ? "التصدير" : "Export", titleEn: "Export", description: isArabic ? "نصدر أجود المنتجات السودانية إلى الأسواق العالمية" : "We export premium Sudanese products to global markets", color: "bg-green-500" },
    { icon: TrendingDown, title: isArabic ? "الاستيراد" : "Import", titleEn: "Import", description: isArabic ? "نستورد المنتجات والمعدات من مختلف أنحاء العالم" : "We import products and equipment from around the world", color: "bg-blue-500" },
    { icon: Ship, title: isArabic ? "الشحن والتوصيل" : "Shipping", titleEn: "Shipping", description: isArabic ? "خدمات شحن موثوقة إلى جميع الوجهات العالمية" : "Reliable shipping services to all global destinations", color: "bg-purple-500" },
    { icon: Package, title: isArabic ? "البيع والشراء" : "Trading", titleEn: "Trading", description: isArabic ? "نشتري ونبيع المواشي والمحاصيل بأفضل الأسعار" : "We buy and sell livestock and crops at the best prices", color: "bg-orange-500" },
  ];

  const livestockProducts = [
    {
      image: sheepImage, title: isArabic ? "الضأن" : "Sheep", titleEn: "Sheep",
      description: isArabic ? "أجود أنواع الضأن السوداني للتصدير. نوفر كميات كبيرة للأسواق الخليجية والعربية مع ضمان الجودة والصحة البيطرية." : "Premium Sudanese sheep for export. We supply large quantities to Gulf and Arab markets with guaranteed quality and veterinary health.",
      features: isArabic ? ["تصدير مباشر", "فحص بيطري معتمد", "شحن بحري وجوي", "كميات كبيرة"] : ["Direct export", "Certified veterinary inspection", "Sea & air shipping", "Large quantities"],
    },
    {
      image: camelsImage, title: isArabic ? "الجمال" : "Camels", titleEn: "Camels",
      description: isArabic ? "إبل سودانية أصيلة للتصدير إلى دول الخليج والشرق الأوسط. نختار أفضل السلالات مع رعاية صحية كاملة." : "Authentic Sudanese camels for export to Gulf and Middle Eastern countries. We select the finest breeds with complete healthcare.",
      features: isArabic ? ["سلالات أصيلة", "رعاية صحية", "توثيق رسمي", "نقل آمن"] : ["Authentic breeds", "Healthcare", "Official documentation", "Safe transport"],
    },
    {
      image: cattleImage, title: isArabic ? "الأبقار" : "Cattle", titleEn: "Cattle",
      description: isArabic ? "أبقار عالية الجودة من المراعي السودانية الطبيعية. نوفر أبقار للتربية والذبح بمواصفات عالمية." : "High-quality cattle from natural Sudanese pastures. We provide cattle for breeding and slaughter to international standards.",
      features: isArabic ? ["مراعي طبيعية", "وزن مضمون", "صحة ممتازة", "أسعار تنافسية"] : ["Natural pastures", "Guaranteed weight", "Excellent health", "Competitive prices"],
    },
  ];

  const agriculturalProducts = [
    { image: gumArabicImage, title: isArabic ? "الصمغ العربي" : "Gum Arabic", titleEn: "Gum Arabic", description: isArabic ? "صمغ عربي سوداني فاخر للصناعات الغذائية والدوائية. السودان هو المصدر الأول عالمياً للصمغ العربي." : "Premium Sudanese gum arabic for food and pharmaceutical industries. Sudan is the world's leading source of gum arabic." },
    { image: peanutsImage, title: isArabic ? "الفول السوداني" : "Peanuts", titleEn: "Peanuts", description: isArabic ? "فول سوداني عالي الجودة للأسواق التصديرية العالمية. متوفر بأحجام مختلفة ودرجات نقاء متعددة." : "High-quality peanuts for global export markets. Available in various sizes and purity grades." },
    { image: cottonImage, title: isArabic ? "القطن" : "Cotton", titleEn: "Cotton", description: isArabic ? "قطن سوداني فاخر طويل التيلة للصناعات النسيجية العالمية. جودة عالية ونقاء استثنائي." : "Premium long-staple Sudanese cotton for global textile industries. High quality and exceptional purity." },
    { image: sesameImage, title: isArabic ? "السمسم" : "Sesame", titleEn: "Sesame", description: isArabic ? "سمسم سوداني عالي الجودة للتصدير. مثالي لاستخراج الزيوت والصناعات الغذائية." : "High-quality Sudanese sesame for export. Ideal for oil extraction and food industries." },
    { image: sunflowerImage, title: isArabic ? "زهرة الشمس" : "Sunflower Seeds", titleEn: "Sunflower Seeds", description: isArabic ? "بذور زهرة الشمس الفاخرة للتصدير. مصدر ممتاز للزيوت الطبيعية والاستخدامات الغذائية." : "Premium sunflower seeds for export. An excellent source of natural oils and food uses." },
    { image: hibiscusImage, title: isArabic ? "الكركدي" : "Hibiscus", titleEn: "Hibiscus", description: isArabic ? "كركدي سوداني فاخر معروف عالمياً بجودته العالية. يستخدم في المشروبات والصناعات الدوائية." : "Premium Sudanese hibiscus known worldwide for its high quality. Used in beverages and pharmaceutical industries." },
    { image: watermelonSeedsImage, title: isArabic ? "حب البطيخ" : "Watermelon Seeds", titleEn: "Watermelon Seeds", description: isArabic ? "حب البطيخ السوداني الفاخر للتصدير. منتج تقليدي عالي القيمة الغذائية." : "Premium Sudanese watermelon seeds for export. A traditional product with high nutritional value." },
    { image: redOnionImage, title: isArabic ? "البصل الأحمر" : "Red Onion", titleEn: "Red Onion", description: isArabic ? "بصل أحمر سوداني طازج للتصدير. جودة ممتازة وطعم مميز للأسواق العالمية." : "Fresh Sudanese red onion for export. Excellent quality and distinctive taste for global markets." },
    { image: alfalfaImage, title: isArabic ? "البرسيم" : "Alfalfa", titleEn: "Alfalfa", description: isArabic ? "برسيم سوداني عالي الجودة للتصدير. علف ممتاز للمواشي غني بالبروتين والعناصر الغذائية." : "High-quality Sudanese alfalfa for export. Excellent livestock feed rich in protein and nutrients." },
  ];

  const meatProducts = [
    { image: frozenMeatImage, title: isArabic ? "لحوم مبردة" : "Chilled Meat", titleEn: "Chilled Meat", description: isArabic ? "لحوم طازجة مبردة بأعلى معايير الجودة والنظافة" : "Fresh chilled meat with the highest quality and hygiene standards" },
    { image: frozenMeatImage, title: isArabic ? "لحوم مجمدة" : "Frozen Meat", titleEn: "Frozen Meat", description: isArabic ? "لحوم مجمدة للتصدير مع الحفاظ على القيمة الغذائية" : "Frozen meat for export while preserving nutritional value" },
    { image: frozenMeatImage, title: isArabic ? "لحوم معلبة" : "Canned Meat", titleEn: "Canned Meat", description: isArabic ? "منتجات لحوم معلبة للأسواق المحلية والعالمية" : "Canned meat products for local and global markets" },
  ];

  const arrowClass = dir === 'rtl' ? 'mr-2 group-hover:-translate-x-1 rotate-180' : 'ml-2 group-hover:translate-x-1';

  return (
    <div className="min-h-screen" dir={dir}>
      <Navigation />

      <section className="relative pt-32 pb-16 text-primary-foreground overflow-hidden">
        <ParallaxHero image={heroImage} speed={0.3} />
        <div className="absolute top-10 right-10 opacity-10 z-10">
          <img src={logo} alt="" className="w-40 h-40 object-contain" />
        </div>
        <div className="section-container relative z-10">
          <h1 className="heading-display text-5xl sm:text-6xl mb-6 text-center">{t("products.hero.title")}</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-primary-foreground/90">{t("products.hero.desc")}</p>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="section-container">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl font-bold text-center mb-4">{t("products.servicesTitle")}</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">{t("products.servicesDesc")}</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={index} animation="scale" delay={index * 100}>
                <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2 h-full">
                  <div className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
                  {isArabic && <p className="text-sm text-primary font-medium mb-3">{service.titleEn}</p>}
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container">
        <AnimatedSection animation="fade-up">
          <h2 className="text-4xl font-bold text-center mb-4">{t("products.livestock")}</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">{t("products.livestockDesc")}</p>
        </AnimatedSection>
        <div className="space-y-16">
          {livestockProducts.map((product, index) => (
            <AnimatedSection key={index} animation={index % 2 === 0 ? "fade-right" : "fade-left"}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                    <img src={product.image} alt={product.title} className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <h2 className="text-4xl font-bold mb-2">{product.title}</h2>
                  {isArabic && <p className="text-primary font-medium text-lg mb-4">{product.titleEn}</p>}
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {product.features.map((feature, fi) => (
                      <div key={fi} className="flex items-center gap-3 bg-muted/50 p-3 rounded-lg">
                        <div className="bg-primary rounded-full p-1"><div className="w-2 h-2 bg-primary-foreground rounded-full" /></div>
                        <span className="text-foreground font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact">
                    <Button className="btn-primary group">
                      {t("products.inquire")} {product.title}
                      <ArrowRight className={`h-5 w-5 transition-transform ${arrowClass}`} />
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="section-container">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl font-bold text-center mb-4">{t("products.agricultural")}</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">{t("products.agriculturalDesc")}</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {agriculturalProducts.map((product, index) => (
              <AnimatedSection key={index} animation="scale" delay={index * 80}>
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-card h-full">
                  <div className="aspect-square overflow-hidden">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <h3 className="text-2xl font-bold mb-1">{product.title}</h3>
                    {isArabic && <p className="text-sm text-primary-foreground/80 font-medium mb-3">{product.titleEn}</p>}
                    <p className="text-sm text-primary-foreground/90 leading-relaxed line-clamp-3">{product.description}</p>
                    <Link to="/contact" className="mt-4 inline-flex items-center gap-2 text-white font-medium hover:underline">
                      {t("products.inquireNow")}
                      <ArrowRight className={`h-4 w-4 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container">
        <AnimatedSection animation="fade-up">
          <h2 className="text-4xl font-bold text-center mb-4">{t("products.meat")}</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">{t("products.meatDesc")}</p>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          {meatProducts.map((item, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
              <div className="bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 h-full">
                <div className="aspect-video overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  {isArabic && <p className="text-primary font-medium mb-4">{item.titleEn}</p>}
                  <p className="text-muted-foreground mb-6">{item.description}</p>
                  <Link to="/contact" className="text-primary font-medium hover:underline inline-flex items-center gap-2">
                    {t("products.orderNow")}
                    <ArrowRight className={`h-4 w-4 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <AnimatedSection animation="scale">
        <section className="section-container text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary to-primary/80 p-12 rounded-3xl text-primary-foreground relative overflow-hidden">
            <div className="absolute top-5 left-5 opacity-10">
              <img src={logo} alt="" className="w-24 h-24 object-contain" />
            </div>
            <div className="absolute bottom-5 right-5 opacity-10">
              <img src={logo} alt="" className="w-32 h-32 object-contain" />
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">{t("products.ctaTitle")}</h2>
              <p className="text-xl text-primary-foreground/90 mb-8">{t("products.ctaDesc")}</p>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="group">
                  {t("products.ctaButton")}
                  <ArrowRight className={`h-5 w-5 transition-transform ${arrowClass}`} />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default Products;
