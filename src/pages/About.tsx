import { Target, Eye, Heart, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/hooks/use-scroll-animation";
import { ParallaxHero } from "@/hooks/use-parallax";
import { useLanguage } from "@/contexts/LanguageContext";
import aboutImage from "@/assets/about-global.jpg";
import chairmanPhoto from "@/assets/chairman-photo.jpg";
import heroImage from "@/assets/hero-camels.png";
import logo from "@/assets/logo.jpg";

const About = () => {
  const { t, dir } = useLanguage();

  return (
    <div className="min-h-screen" dir={dir}>
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 text-primary-foreground overflow-hidden">
        <ParallaxHero image={heroImage} speed={0.3} />
        <div className="absolute top-8 left-8 opacity-10 z-10">
          <img src={logo} alt="" className="w-28 h-28 object-contain" />
        </div>
        <div className="absolute bottom-8 right-8 opacity-10 z-10">
          <img src={logo} alt="" className="w-20 h-20 object-contain" />
        </div>
        <div className="section-container relative z-10">
          <h1 className="heading-display text-5xl sm:text-6xl mb-6 text-center">{t("about.hero.title")}</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-primary-foreground/90">{t("about.hero.desc")}</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-right">
            <h2 className="text-4xl font-bold mb-6">{t("about.overview.title")}</h2>
            <p className="text-lg text-muted-foreground mb-4">{t("about.overview.p1")}</p>
            <p className="text-lg text-muted-foreground mb-4">{t("about.overview.p2")}</p>
            <p className="text-lg text-muted-foreground">{t("about.overview.p3")}</p>
          </AnimatedSection>
          <AnimatedSection animation="fade-left" delay={200}>
            <img src={aboutImage} alt={t("about.overview.title")} className="rounded-2xl shadow-2xl" />
          </AnimatedSection>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-muted py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]">
          <img src={logo} alt="" className="w-96 h-96 object-contain" />
        </div>
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: t("about.mission.title"), desc: t("about.mission.desc"), color: "red" },
              { icon: Eye, title: t("about.vision.title"), desc: t("about.vision.desc"), color: "blue" },
              { icon: Heart, title: t("about.values.title"), desc: t("about.values.desc"), color: "pink" },
            ].map((item, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
                <div className="card-elegant text-center h-full">
                  <div className={`bg-${item.color}-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className={`h-8 w-8 text-${item.color}-500`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-container">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t("about.leadership.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("about.leadership.desc")}</p>
        </AnimatedSection>
        <AnimatedSection animation="scale" delay={200}>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="text-center max-w-sm">
              <div className="mb-6">
                <img src={chairmanPhoto} alt={t("about.chairman.name")} className="w-48 h-48 rounded-full mx-auto object-cover shadow-xl border-4 border-primary/20" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{t("about.chairman.name")}</h3>
              <p className="text-primary font-semibold mb-3">{t("about.chairman.role")}</p>
              <p className="text-muted-foreground">{t("about.chairman.desc")}</p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Why Choose Us */}
      <section className="section-container relative">
        <div className="absolute -top-4 right-0 opacity-[0.04]">
          <img src={logo} alt="" className="w-48 h-48 object-contain" />
        </div>
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <img src={logo} alt="" className="w-12 h-12 mx-auto rounded-full shadow-md border-2 border-primary/20 object-contain mb-4 opacity-60" />
          <h2 className="text-4xl font-bold mb-4">{t("about.whyPartner.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("about.whyPartner.desc")}</p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: t("about.market.title"), desc: t("about.market.desc"), iconColor: "text-amber-500" },
            { title: t("about.qa.title"), desc: t("about.qa.desc"), iconColor: "text-emerald-500" },
            { title: t("about.competitive.title"), desc: t("about.competitive.desc"), iconColor: "text-sky-500" },
            { title: t("about.logistics.title"), desc: t("about.logistics.desc"), iconColor: "text-violet-500" },
            { title: t("about.personal.title"), desc: t("about.personal.desc"), iconColor: "text-rose-500" },
            { title: t("about.network.title"), desc: t("about.network.desc"), iconColor: "text-teal-500" },
          ].map((item, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <div className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 h-full">
                <div className="flex-shrink-0">
                  <Award className={`h-6 w-6 ${item.iconColor} mt-1`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
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
