import { Ship, Package, TrendingUp, Search, Shield, Truck } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/use-scroll-animation";
import { ParallaxHero } from "@/hooks/use-parallax";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-legumes.png";
import logo from "@/assets/logo.jpg";

const Services = () => {
  const { t, dir, isArabic } = useLanguage();

  const importItems = isArabic
    ? ["توريد المنتجات من موردين معتمدين", "فحص الجودة والشهادات", "التخليص الجمركي والتوثيق", "أسعار شحن تنافسية", "خيارات التسليم من الباب إلى الباب"]
    : ["Sourcing from certified suppliers", "Quality inspection & certification", "Customs clearance & documentation", "Competitive shipping rates", "Door-to-door delivery options"];

  const exportItems = isArabic
    ? ["بحث السوق وتحديد المشترين", "توثيق التصدير والتراخيص", "تنسيق الشحن الدولي", "معالجة المدفوعات والتمويل التجاري", "دعم ما بعد البيع والتتبع"]
    : ["Market research & buyer identification", "Export documentation & licensing", "International shipping coordination", "Payment processing & trade finance", "After-sales support & tracking"];

  const logisticsItems = isArabic
    ? ["خيارات الشحن البحري والجوي والبري", "حلول التخزين والمستودعات", "إدارة المخزون", "تتبع الشحنات في الوقت الفعلي", "تنسيق التسليم للميل الأخير"]
    : ["Sea, air & land shipping options", "Storage & warehousing solutions", "Inventory management", "Real-time shipment tracking", "Last-mile delivery coordination"];

  const sourcingItems = isArabic
    ? ["التحقق من الموردين وتقييمهم", "التفاوض على الأسعار والمقارنة", "الحصول على العينات واختبارها", "خدمات التخصيص والتصنيع", "إدارة علاقات الموردين المستمرة"]
    : ["Supplier verification & evaluation", "Price negotiation & comparison", "Sample procurement & testing", "Customization & manufacturing", "Ongoing supplier relationship management"];

  return (
    <div className="min-h-screen" dir={dir}>
      <Navigation />

      <section className="relative pt-32 pb-16 text-primary-foreground overflow-hidden">
        <ParallaxHero image={heroImage} speed={0.3} />
        <div className="absolute top-10 left-10 opacity-10 z-10">
          <img src={logo} alt="" className="w-28 h-28 object-contain" />
        </div>
        <div className="section-container relative z-10">
          <h1 className="heading-display text-5xl sm:text-6xl mb-6 text-center">{t("services.hero.title")}</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-primary-foreground/90">{t("services.hero.desc")}</p>
        </div>
      </section>

      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { icon: Ship, title: t("services.import.title"), desc: t("services.import.desc"), items: importItems, color: "sky" },
            { icon: Package, title: t("services.export.title"), desc: t("services.export.desc"), items: exportItems, color: "amber" },
            { icon: Truck, title: t("services.logistics.title"), desc: t("services.logistics.desc"), items: logisticsItems, color: "emerald" },
            { icon: Search, title: t("services.sourcing.title"), desc: t("services.sourcing.desc"), items: sourcingItems, color: "violet" },
          ].map((service, idx) => (
            <AnimatedSection key={idx} animation={idx % 2 === 0 ? "fade-right" : "fade-left"} delay={idx * 150}>
              <div className="card-elegant h-full">
                <div className={`bg-${service.color}-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                  <service.icon className={`h-8 w-8 text-${service.color}-500`} />
                </div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-muted-foreground mb-6">{service.desc}</p>
                <ul className="space-y-3">
                  {service.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className={`bg-${service.color}-500 rounded-full p-1 mt-0.5`}>
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="section-container">
          <AnimatedSection animation="fade-up">
            <div className="flex flex-col items-center mb-12">
              <img src={logo} alt="" className="w-14 h-14 rounded-full shadow-lg border-2 border-primary/20 object-contain mb-4 opacity-50" />
              <h2 className="text-4xl font-bold text-center">{t("services.additional")}</h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: t("services.qaService"), description: t("services.qaDesc"), iconColor: "text-indigo-500", bgColor: "bg-indigo-500/10" },
              { icon: TrendingUp, title: t("services.analysis"), description: t("services.analysisDesc"), iconColor: "text-teal-500", bgColor: "bg-teal-500/10" },
              { icon: Package, title: t("services.custom"), description: t("services.customDesc"), iconColor: "text-rose-500", bgColor: "bg-rose-500/10" },
            ].map((service, index) => (
              <AnimatedSection key={index} animation="scale" delay={index * 150}>
                <div className="bg-card p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300 h-full group">
                  <div className={`${service.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors`}>
                    <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <AnimatedSection animation="fade-up">
        <section className="section-container text-center relative overflow-hidden">
          <div className="absolute top-5 left-5 opacity-5">
            <img src={logo} alt="" className="w-24 h-24 object-contain" />
          </div>
          <div className="absolute bottom-5 right-5 opacity-5">
            <img src={logo} alt="" className="w-32 h-32 object-contain" />
          </div>
          <div className="relative z-10">
            <img src={logo} alt="" className="w-14 h-14 mx-auto rounded-full shadow-md border-2 border-primary/20 object-contain mb-4 opacity-60" />
            <h2 className="text-4xl font-bold mb-6">{t("services.ctaTitle")}</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{t("services.ctaDesc")}</p>
            <Link to="/contact">
              <Button size="lg" className="btn-primary">{t("services.ctaButton")}</Button>
            </Link>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default Services;
