import { Target, Eye, Heart, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/hooks/use-scroll-animation";
import { ParallaxHero } from "@/hooks/use-parallax";
import aboutImage from "@/assets/about-global.jpg";
import chairmanPhoto from "@/assets/chairman-photo.jpg";
import heroImage from "@/assets/hero-camels.png";

const About = () => {
  return (
    <div className="min-h-screen" dir="rtl">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 text-primary-foreground overflow-hidden">
        <ParallaxHero image={heroImage} speed={0.3} />
        <div className="section-container relative z-10">
          <h1 className="heading-display text-5xl sm:text-6xl mb-6 text-center">من نحن</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-primary-foreground/90">
            نبني جسوراً بين الشركات والأسواق عبر القارات
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-right">
            <h2 className="text-4xl font-bold mb-6">من نحن</h2>
            <p className="text-lg text-muted-foreground mb-4">
              أحمد كرار للتجارة هي شركة تجارة دولية ديناميكية متخصصة في خدمات الاستيراد والتصدير والتجارة العامة. نربط الشركات عبر الحدود، مع التركيز على المنتجات عالية الجودة وسلاسل التوريد الموثوقة والشراكات القوية.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              مع خبرة واسعة في الأسواق الأفريقية والشرق أوسطية والآسيوية، بنينا سمعة راسخة في التميز والموثوقية والنزاهة في جميع تعاملاتنا التجارية.
            </p>
            <p className="text-lg text-muted-foreground">
              التزامنا بالجودة ورضا العملاء جعلنا شريكاً موثوقاً للشركات التي تسعى لتوسيع نطاقها العالمي.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fade-left" delay={200}>
            <img 
              src={aboutImage} 
              alt="شبكة التجارة العالمية" 
              className="rounded-2xl shadow-2xl"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-muted py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-up" delay={0}>
              <div className="card-elegant text-center h-full">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">مهمتنا</h3>
                <p className="text-muted-foreground">
                  تسهيل التجارة الدولية السلسة من خلال ربط الموردين ذوي الجودة بالمشترين الموثوقين، مما يضمن النمو المتبادل وعلاقات تجارية مستدامة.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={150}>
              <div className="card-elegant text-center h-full">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">رؤيتنا</h3>
                <p className="text-muted-foreground">
                  أن نصبح الشريك التجاري الرائد في أفريقيا والشرق الأوسط وآسيا، معروفين بنزاهتنا وكفاءتنا والتزامنا بالتميز.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <div className="card-elegant text-center h-full">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">قيمنا</h3>
                <p className="text-muted-foreground">
                  النزاهة، الشفافية، التركيز على العملاء، التميز في الجودة، وبناء شراكات طويلة الأمد قائمة على الثقة والاحترام المتبادل.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-container">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">قيادتنا</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            تعرف على أصحاب الرؤية الذين يقودون نجاحنا
          </p>
        </AnimatedSection>

        <AnimatedSection animation="scale" delay={200}>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="text-center max-w-sm">
              <div className="mb-6">
                <img 
                  src={chairmanPhoto} 
                  alt="أحمد حسن - رئيس مجلس الإدارة" 
                  className="w-48 h-48 rounded-full mx-auto object-cover shadow-xl border-4 border-primary/20"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">أحمد حسن</h3>
              <p className="text-primary font-semibold mb-3">رئيس مجلس الإدارة</p>
              <p className="text-muted-foreground">
                يقود أحمد كرار للتجارة برؤية للتميز والتزام ببناء علاقات تجارية دائمة عبر القارات.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Why Choose Us */}
      <section className="section-container">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">لماذا تشاركنا؟</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نجلب الخبرة والموثوقية والالتزام بنجاحك
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "معرفة واسعة بالسوق",
              description: "فهم عميق للأسواق الأفريقية والشرق أوسطية والآسيوية مع خبرة محلية."
            },
            {
              title: "ضمان الجودة",
              description: "عمليات رقابة جودة صارمة لضمان أن معايير المنتجات تلبي المتطلبات الدولية."
            },
            {
              title: "أسعار تنافسية",
              description: "علاقات قوية مع الموردين تمكننا من تقديم أسعار تنافسية دون المساومة على الجودة."
            },
            {
              title: "لوجستيات موثوقة",
              description: "إدارة سلسلة توريد فعالة تضمن التسليم في الوقت المحدد والتتبع الشفاف."
            },
            {
              title: "خدمة شخصية",
              description: "مديرو حسابات مخصصون يفهمون احتياجات عملك ويقدمون حلولاً مخصصة."
            },
            {
              title: "شبكة عالمية",
              description: "اتصالات راسخة مع موردين موثوقين وشركاء لوجستيين حول العالم."
            }
          ].map((item, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <div className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 h-full">
                <div className="flex-shrink-0">
                  <Award className="h-6 w-6 text-primary mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
