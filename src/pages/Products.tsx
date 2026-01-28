import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, TrendingDown, Ship, Package } from "lucide-react";
import sheepImage from "@/assets/sheep-export.jpg";
import camelsImage from "@/assets/camels-export.jpg";
import cattleImage from "@/assets/cattle-export.jpg";
import gumArabicImage from "@/assets/gum-arabic-real.jpg";
import peanutsImage from "@/assets/peanuts-real.jpg";
import cottonImage from "@/assets/cotton.png";
import sunflowerImage from "@/assets/sunflower-seeds.png";
import sesameImage from "@/assets/sesame.png";
import redOnionImage from "@/assets/red-onion.png";
import frozenMeatImage from "@/assets/frozen-meat-new.png";
import alfalfaImage from "@/assets/alfalfa.png";
import hibiscusImage from "@/assets/hibiscus.png";
import watermelonSeedsImage from "@/assets/watermelon-seeds.png";
import logo from "@/assets/logo.jpg";
import heroImage from "@/assets/hero-sheep.png";

const Products = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "التصدير",
      titleEn: "Export",
      description: "نصدر أجود المنتجات السودانية إلى الأسواق العالمية",
      color: "bg-green-500"
    },
    {
      icon: TrendingDown,
      title: "الاستيراد",
      titleEn: "Import",
      description: "نستورد المنتجات والمعدات من مختلف أنحاء العالم",
      color: "bg-blue-500"
    },
    {
      icon: Ship,
      title: "الشحن والتوصيل",
      titleEn: "Shipping",
      description: "خدمات شحن موثوقة إلى جميع الوجهات العالمية",
      color: "bg-purple-500"
    },
    {
      icon: Package,
      title: "البيع والشراء",
      titleEn: "Trading",
      description: "نشتري ونبيع المواشي والمحاصيل بأفضل الأسعار",
      color: "bg-orange-500"
    }
  ];

  const livestockProducts = [
    {
      image: sheepImage,
      title: "الضأن",
      titleEn: "Sheep",
      description: "أجود أنواع الضأن السوداني للتصدير. نوفر كميات كبيرة للأسواق الخليجية والعربية مع ضمان الجودة والصحة البيطرية.",
      features: ["تصدير مباشر", "فحص بيطري معتمد", "شحن بحري وجوي", "كميات كبيرة"]
    },
    {
      image: camelsImage,
      title: "الجمال",
      titleEn: "Camels",
      description: "إبل سودانية أصيلة للتصدير إلى دول الخليج والشرق الأوسط. نختار أفضل السلالات مع رعاية صحية كاملة.",
      features: ["سلالات أصيلة", "رعاية صحية", "توثيق رسمي", "نقل آمن"]
    },
    {
      image: cattleImage,
      title: "الأبقار",
      titleEn: "Cattle",
      description: "أبقار عالية الجودة من المراعي السودانية الطبيعية. نوفر أبقار للتربية والذبح بمواصفات عالمية.",
      features: ["مراعي طبيعية", "وزن مضمون", "صحة ممتازة", "أسعار تنافسية"]
    }
  ];

  const agriculturalProducts = [
    {
      image: gumArabicImage,
      title: "الصمغ العربي",
      titleEn: "Gum Arabic",
      description: "صمغ عربي سوداني فاخر للصناعات الغذائية والدوائية. السودان هو المصدر الأول عالمياً للصمغ العربي."
    },
    {
      image: peanutsImage,
      title: "الفول السوداني",
      titleEn: "Peanuts",
      description: "فول سوداني عالي الجودة للأسواق التصديرية العالمية. متوفر بأحجام مختلفة ودرجات نقاء متعددة."
    },
    {
      image: cottonImage,
      title: "القطن",
      titleEn: "Cotton",
      description: "قطن سوداني فاخر طويل التيلة للصناعات النسيجية العالمية. جودة عالية ونقاء استثنائي."
    },
    {
      image: sesameImage,
      title: "السمسم",
      titleEn: "Sesame",
      description: "سمسم سوداني عالي الجودة للتصدير. مثالي لاستخراج الزيوت والصناعات الغذائية."
    },
    {
      image: sunflowerImage,
      title: "زهرة الشمس",
      titleEn: "Sunflower Seeds",
      description: "بذور زهرة الشمس الفاخرة للتصدير. مصدر ممتاز للزيوت الطبيعية والاستخدامات الغذائية."
    },
    {
      image: hibiscusImage,
      title: "الكركدي",
      titleEn: "Hibiscus",
      description: "كركدي سوداني فاخر معروف عالمياً بجودته العالية. يستخدم في المشروبات والصناعات الدوائية."
    },
    {
      image: watermelonSeedsImage,
      title: "حب البطيخ",
      titleEn: "Watermelon Seeds",
      description: "حب البطيخ السوداني الفاخر للتصدير. منتج تقليدي عالي القيمة الغذائية."
    },
    {
      image: redOnionImage,
      title: "البصل الأحمر",
      titleEn: "Red Onion",
      description: "بصل أحمر سوداني طازج للتصدير. جودة ممتازة وطعم مميز للأسواق العالمية."
    },
    {
      image: alfalfaImage,
      title: "البرسيم",
      titleEn: "Alfalfa",
      description: "برسيم سوداني عالي الجودة للتصدير. علف ممتاز للمواشي غني بالبروتين والعناصر الغذائية."
    }
  ];

  const meatProducts = [
    {
      image: frozenMeatImage,
      title: "لحوم مبردة",
      titleEn: "Chilled Meat",
      description: "لحوم طازجة مبردة بأعلى معايير الجودة والنظافة"
    },
    {
      image: frozenMeatImage,
      title: "لحوم مجمدة",
      titleEn: "Frozen Meat",
      description: "لحوم مجمدة للتصدير مع الحفاظ على القيمة الغذائية"
    },
    {
      image: frozenMeatImage,
      title: "لحوم معلبة",
      titleEn: "Canned Meat",
      description: "منتجات لحوم معلبة للأسواق المحلية والعالمية"
    }
  ];

  return (
    <div className="min-h-screen" dir="rtl">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 text-primary-foreground overflow-hidden">
        <div 
          className="absolute inset-0 z-0 animate-hero-zoom"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-primary/90 via-primary/80 to-primary/70" />
        </div>
        <div className="absolute top-10 right-10 opacity-10 z-10">
          <img src={logo} alt="" className="w-40 h-40 object-contain" />
        </div>
        <div className="section-container relative z-10">
          <h1 className="heading-display text-5xl sm:text-6xl mb-6 text-center">منتجاتنا وخدماتنا</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-primary-foreground/90">
            بيع وشراء وتصدير واستيراد المواشي والمحاصيل الزراعية واللحوم المبردة
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-muted/30">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-center mb-4">خدماتنا التجارية</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            نقدم خدمات تجارية متكاملة تشمل البيع والشراء والتصدير والاستيراد
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2"
              >
                <div className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
                <p className="text-sm text-primary font-medium mb-3">{service.titleEn}</p>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Livestock Products */}
      <section className="section-container">
        <h2 className="text-4xl font-bold text-center mb-4">المواشي</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          نتخصص في تجارة وتصدير المواشي السودانية عالية الجودة
        </p>
        <div className="space-y-16">
          {livestockProducts.map((product, index) => (
            <div 
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <h2 className="text-4xl font-bold mb-2">{product.title}</h2>
                <p className="text-primary font-medium text-lg mb-4">{product.titleEn}</p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3 bg-muted/50 p-3 rounded-lg">
                      <div className="bg-primary rounded-full p-1">
                        <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                      </div>
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact">
                  <Button className="btn-primary group">
                    استفسر عن {product.title}
                    <ArrowRight className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1 rotate-180" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Agricultural Products Grid */}
      <section className="bg-muted py-20">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-center mb-4">المحاصيل الزراعية</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            نصدر أجود المحاصيل الزراعية السودانية إلى الأسواق العالمية
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {agriculturalProducts.map((product, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-card"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <h3 className="text-2xl font-bold mb-1">{product.title}</h3>
                  <p className="text-sm text-primary-foreground/80 font-medium mb-3">{product.titleEn}</p>
                  <p className="text-sm text-primary-foreground/90 leading-relaxed line-clamp-3">{product.description}</p>
                  <Link to="/contact" className="mt-4 inline-flex items-center gap-2 text-white font-medium hover:underline">
                    استفسر الآن
                    <ArrowRight className="h-4 w-4 rotate-180" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meat Products Section */}
      <section className="section-container">
        <h2 className="text-4xl font-bold text-center mb-4">اللحوم المبردة والمجمدة</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          نوفر اللحوم المبردة والمجمدة بأعلى معايير الجودة للتصدير
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {meatProducts.map((item, index) => (
            <div key={index} className="bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-primary font-medium mb-4">{item.titleEn}</p>
                <p className="text-muted-foreground mb-6">{item.description}</p>
                <Link to="/contact" className="text-primary font-medium hover:underline inline-flex items-center gap-2">
                  اطلب الآن
                  <ArrowRight className="h-4 w-4 rotate-180" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container text-center">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary to-primary/80 p-12 rounded-3xl text-primary-foreground relative overflow-hidden">
          <div className="absolute top-5 left-5 opacity-10">
            <img src={logo} alt="" className="w-24 h-24 object-contain" />
          </div>
          <div className="absolute bottom-5 right-5 opacity-10">
            <img src={logo} alt="" className="w-32 h-32 object-contain" />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">هل تبحث عن منتج معين؟</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              نحن متخصصون في توفير جميع أنواع المواشي والمحاصيل الزراعية. تواصل معنا للحصول على أفضل العروض والأسعار.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="group">
                تواصل معنا الآن
                <ArrowRight className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1 rotate-180" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
