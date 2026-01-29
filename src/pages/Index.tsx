import { ArrowRight, Globe, TrendingUp, Users, Shield, CheckCircle, Leaf, Handshake, Award, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/use-scroll-animation";
import heroImage from "@/assets/hero-agricultural.png";
import logo from "@/assets/logo.jpg";
import sheepImage from "@/assets/sheep-export.jpg";
import camelsImage from "@/assets/camels-export.jpg";
import cattleImage from "@/assets/cattle-export.jpg";
import gumArabicImage from "@/assets/gum-arabic-real.jpg";
import peanutsImage from "@/assets/peanuts-real.jpg";
import businessSectorsBg from "@/assets/business-sectors-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen" dir="rtl">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 animate-hero-zoom"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-primary/90 via-primary/75 to-primary/60" />
        </div>
        
        <div className="relative z-10 section-container text-center text-primary-foreground">
          <div className="mb-8 animate-fade-in">
            <img 
              src={logo} 
              alt="أحمد كرار للتجارة" 
              className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full shadow-2xl border-4 border-white/30 object-contain bg-white/10 backdrop-blur-sm"
            />
          </div>
          <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl mb-6 animate-fade-in">
            أحمد كرار للتجارة
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-4xl mx-auto text-primary-foreground/90 animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
            مؤسسة تجارية وطنية رائدة تُعنى بإنتاج وتطوير وتسويق صادرات السودان من المنتجات الزراعية والحيوانية وتعظيم القيمة لها ومضاعفة العائد منها بما يسهم في دعم الاقتصاد الوطني
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="group">
                ابدأ الآن
                <ArrowRight className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1 rotate-180" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                خدماتنا
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-container bg-muted/30">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">قيمنا التي نعتز بها</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            تضم الهيئة الاستشارية لأحمد كرار للتجارة نخبة من الخبراء والمتخصصين، الذين يقدمون رؤى استراتيجية وحلول مبتكرة لدعم تطور المجموعة وتعزيز تنافسيتها في الأسواق المحلية والدولية
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: Eye,
              title: "الالتزام والشفافية",
              description: "إتباع تشريعات ولوائح وسياسات الدولة والالتزام بكافة العقود والمواثيق مع المتعاملين وتهيئة بيئة ومتطلبات العمل والعدالة المجتمعية في توزيع فرص العمل"
            },
            {
              icon: Award,
              title: "الإتقان والتميز",
              description: "تقديم المنتجات والخدمات بصورة احترافية وإتقان وتميز وكفاءة وفاعلية في أداء العمليات والأنشطة التي تلبي رغبات المتعاملين"
            },
            {
              icon: Handshake,
              title: "التعاون والتكامل",
              description: "تنفيذ موجهات وسياسات المنظومة والتواصل مع المتعاملين وتشجيع العاملين بالاشتراك في أنشطة المجموعة والعمل بروح الفريق"
            },
            {
              icon: Leaf,
              title: "الصداقة مع البيئة",
              description: "تعزيز الممارسات المميزة في التعامل مع البيئة والصحة والسلامة للعاملين والمساهمة في التنمية المستدامة"
            }
          ].map((value, index) => (
            <AnimatedSection 
              key={index} 
              animation="fade-up"
              delay={index * 100}
            >
              <div className="card-elegant text-center group h-full">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-8 w-8 text-primary" />
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
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${businessSectorsBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center">
            <h2 className="text-4xl font-bold mb-6 text-primary-foreground">قطاعات الأعمال</h2>
            <p className="text-xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
              تضم أحمد كرار للتجارة وحدات أعمال متكاملة تعمل معًا لتحقيق خطتها الاستراتيجية وتعزيز الصادرات. تشمل هذه الوحدات خدمات الاستشارات التجارية، والتسويق الدولي، وتطوير سلاسل الإمداد، والدعم اللوجستي، وبحوث الأسواق. تهدف المجموعة إلى تمكين الشركات من الوصول إلى الأسواق العالمية عبر حلول مبتكرة تعمل المجموعة وفق أحدث المعايير الدولية لضمان تحقيق نمو مستدام في قطاع الصادرات
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What We Trade Section */}
      <section className="section-container bg-muted/30">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">ما نتاجر به</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            منتجات متميزة من أفضل الموردين في أفريقيا والشرق الأوسط وآسيا.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {[
            {
              image: sheepImage,
              title: "الضأن",
              description: "أجود أنواع الضأن السوداني للتصدير للأسواق العالمية"
            },
            {
              image: camelsImage,
              title: "الجمال",
              description: "إبل سودانية أصيلة للتصدير إلى دول الخليج والشرق الأوسط"
            },
            {
              image: cattleImage,
              title: "الأبقار",
              description: "أبقار عالية الجودة من المراعي السودانية الطبيعية"
            },
            {
              image: gumArabicImage,
              title: "الصمغ العربي",
              description: "صمغ عربي سوداني فاخر للصناعات الغذائية والدوائية"
            },
            {
              image: peanutsImage,
              title: "الفول السوداني",
              description: "فول سوداني عالي الجودة للأسواق التصديرية العالمية"
            }
          ].map((item, index) => (
            <AnimatedSection 
              key={index} 
              animation="scale"
              delay={index * 100}
            >
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
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
              عرض جميع المنتجات
              <ArrowRight className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1 rotate-180" />
            </Button>
          </Link>
        </AnimatedSection>
      </section>

      {/* Features Section */}
      <section className="section-container">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">لماذا تختار كرار للتجارة؟</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نقدم حلول تجارية شاملة مع التركيز على الجودة والموثوقية والشراكات طويلة الأمد.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Globe,
              title: "انتشار عالمي",
              description: "شبكة واسعة في أفريقيا والشرق الأوسط وآسيا، تربطك بالأسواق حول العالم."
            },
            {
              icon: Shield,
              title: "ضمان الجودة",
              description: "عمليات رقابة جودة صارمة تضمن حصولك على أفضل المنتجات والخدمات."
            },
            {
              icon: TrendingUp,
              title: "أسعار تنافسية",
              description: "علاقات قوية مع الموردين ولوجستيات فعالة توفر قيمة استثنائية."
            },
            {
              icon: Users,
              title: "فريق خبراء",
              description: "محترفون ذوو خبرة ملتزمون بفهم وتلبية احتياجات عملك الفريدة."
            },
            {
              icon: CheckCircle,
              title: "خدمة موثوقة",
              description: "تسليم منتظم في الوقت المحدد وتواصل شفاف طوال كل معاملة."
            },
            {
              icon: Globe,
              title: "حلول مخصصة",
              description: "حلول تجارية مصممة خصيصاً لمتطلبات وأهداف عملك."
            }
          ].map((feature, index) => (
            <AnimatedSection 
              key={index} 
              animation="fade-up"
              delay={index * 100}
            >
              <div className="card-elegant text-center h-full">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </AnimatedSection>
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
        <AnimatedSection animation="scale" className="section-container text-center relative z-10">
          <div className="mb-6">
            <img 
              src={logo} 
              alt="أحمد كرار للتجارة" 
              className="w-16 h-16 mx-auto rounded-full shadow-lg border-2 border-primary/20 object-contain"
            />
          </div>
          <p className="text-lg text-primary/70 mb-4 font-['Amiri',serif] italic">
            "هب يا كريم بلا مقدار لعبدك أحمد الكرار"
          </p>
          <h2 className="text-4xl font-bold mb-6">هل أنت مستعد لتوسيع أعمالك؟</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            تشارك مع أحمد كرار للتجارة واكتشف فرصاً جديدة في الأسواق الدولية.
          </p>
          <Link to="/contact">
            <Button size="lg" className="btn-primary">
              تواصل معنا اليوم
              <ArrowRight className="mr-2 h-5 w-5 rotate-180" />
            </Button>
          </Link>
        </AnimatedSection>
      </section>

      <Footer />
    </div>
  );
};

export default Index;