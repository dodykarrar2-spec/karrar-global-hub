import { Ship, Package, TrendingUp, Search, Shield, Truck } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/use-scroll-animation";
import heroImage from "@/assets/hero-legumes.png";

const Services = () => {
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
        <div className="section-container relative z-10">
          <h1 className="heading-display text-5xl sm:text-6xl mb-6 text-center">خدماتنا</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-primary-foreground/90">
            حلول تجارية شاملة مصممة لتلبية احتياجات عملك
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Import Services */}
          <AnimatedSection animation="fade-right" delay={0}>
            <div className="card-elegant h-full">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Ship className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">خدمات الاستيراد</h2>
              <p className="text-muted-foreground mb-6">
                نوفر منتجات عالية الجودة من موردين دوليين موثوقين، مع ضمان الامتثال لجميع المتطلبات التنظيمية ومعايير الجودة.
              </p>
              <ul className="space-y-3">
                {[
                  "توريد المنتجات من موردين معتمدين",
                  "فحص الجودة والشهادات",
                  "التخليص الجمركي والتوثيق",
                  "أسعار شحن تنافسية",
                  "خيارات التسليم من الباب إلى الباب"
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
          </AnimatedSection>

          {/* Export Services */}
          <AnimatedSection animation="fade-left" delay={150}>
            <div className="card-elegant h-full">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Package className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-3xl font-bold mb-4">خدمات التصدير</h2>
              <p className="text-muted-foreground mb-6">
                اربط منتجاتك بالأسواق الدولية. نتولى جميع جوانب عملية التصدير، من التوثيق إلى التسليم النهائي.
              </p>
              <ul className="space-y-3">
                {[
                  "بحث السوق وتحديد المشترين",
                  "توثيق التصدير والتراخيص",
                  "تنسيق الشحن الدولي",
                  "معالجة المدفوعات والتمويل التجاري",
                  "دعم ما بعد البيع والتتبع"
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
          </AnimatedSection>

          {/* Logistics Management */}
          <AnimatedSection animation="fade-right" delay={300}>
            <div className="card-elegant h-full">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">إدارة اللوجستيات</h2>
              <p className="text-muted-foreground mb-6">
                حلول سلسلة توريد شاملة تضمن وصول منتجاتك إلى وجهتها بأمان وفي الوقت المحدد وبتكلفة فعالة.
              </p>
              <ul className="space-y-3">
                {[
                  "خيارات الشحن البحري والجوي والبري",
                  "حلول التخزين والمستودعات",
                  "إدارة المخزون",
                  "تتبع الشحنات في الوقت الفعلي",
                  "تنسيق التسليم للميل الأخير"
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
          </AnimatedSection>

          {/* Product Sourcing */}
          <AnimatedSection animation="fade-left" delay={450}>
            <div className="card-elegant h-full">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Search className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-3xl font-bold mb-4">توريد المنتجات</h2>
              <p className="text-muted-foreground mb-6">
                استفد من شبكتنا الواسعة للعثور على المنتجات المناسبة بالسعر المناسب، مع ضمان الجودة.
              </p>
              <ul className="space-y-3">
                {[
                  "التحقق من الموردين وتقييمهم",
                  "التفاوض على الأسعار والمقارنة",
                  "الحصول على العينات واختبارها",
                  "خدمات التخصيص والتصنيع",
                  "إدارة علاقات الموردين المستمرة"
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
          </AnimatedSection>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-muted py-20">
        <div className="section-container">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl font-bold text-center mb-12">خدمات إضافية</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "ضمان الجودة",
                description: "خدمات شاملة لمراقبة الجودة وفحص المنتجات"
              },
              {
                icon: TrendingUp,
                title: "تحليل السوق",
                description: "أبحاث سوق متعمقة وتحديد الفرص التجارية"
              },
              {
                icon: Package,
                title: "حلول مخصصة",
                description: "حلول تجارية مصممة خصيصاً لاحتياجاتك المحددة"
              }
            ].map((service, index) => (
              <AnimatedSection key={index} animation="scale" delay={index * 150}>
                <div className="bg-card p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300 h-full">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection animation="fade-up">
        <section className="section-container text-center">
          <h2 className="text-4xl font-bold mb-6">هل أنت مستعد للبدء؟</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم لمناقشة كيف يمكننا دعم احتياجاتك التجارية الدولية.
          </p>
          <Link to="/contact">
            <Button size="lg" className="btn-primary">
              اطلب عرض سعر
            </Button>
          </Link>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default Services;
