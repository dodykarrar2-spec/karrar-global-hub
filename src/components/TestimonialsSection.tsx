import { useState } from "react";
import { Quote, Star, ChevronRight, ChevronLeft } from "lucide-react";
import { AnimatedSection } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/contexts/LanguageContext";

interface Testimonial {
  id: number;
  name: string;
  nameEn: string;
  role: string;
  roleEn: string;
  company: string;
  companyEn: string;
  content: string;
  contentEn: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1, name: "محمد أحمد الفاضل", nameEn: "Mohammed Ahmed Al-Fadel",
    role: "مدير المشتريات", roleEn: "Procurement Manager",
    company: "شركة الخليج للتجارة - الإمارات", companyEn: "Gulf Trading Co. - UAE",
    content: "تعاملنا مع أحمد كرار للتجارة منذ أكثر من ٣ سنوات، ونحن سعداء جداً بجودة المنتجات والالتزام بمواعيد التسليم. شريك تجاري موثوق ومحترف.",
    contentEn: "We have been working with Ahmed Karrar Trading for over 3 years, and we are very satisfied with the product quality and delivery commitment. A reliable and professional trading partner.",
    rating: 5, avatar: "م",
  },
  {
    id: 2, name: "عبدالله سعيد المنصور", nameEn: "Abdullah Saeed Al-Mansour",
    role: "المدير التنفيذي", roleEn: "CEO",
    company: "مجموعة المنصور التجارية - السعودية", companyEn: "Al-Mansour Trading Group - KSA",
    content: "جودة الصمغ العربي والمنتجات الزراعية ممتازة. فريق العمل متعاون ويقدم حلولاً مرنة تناسب احتياجاتنا. ننصح بالتعامل معهم.",
    contentEn: "The quality of gum arabic and agricultural products is excellent. The team is cooperative and provides flexible solutions that suit our needs. We highly recommend working with them.",
    rating: 5, avatar: "ع",
  },
  {
    id: 3, name: "خالد إبراهيم العمري", nameEn: "Khalid Ibrahim Al-Omari",
    role: "مدير سلسلة التوريد", roleEn: "Supply Chain Manager",
    company: "شركة الواحة للأغذية - قطر", companyEn: "Al-Waha Foods - Qatar",
    content: "الماشية السودانية التي نستوردها من كرار للتجارة تتميز بجودة عالية. الأسعار تنافسية والخدمة ممتازة من البداية للنهاية.",
    contentEn: "The Sudanese livestock we import from Karrar Trading is of exceptional quality. Competitive prices and excellent service from start to finish.",
    rating: 5, avatar: "خ",
  },
  {
    id: 4, name: "أحمد علي الهاشمي", nameEn: "Ahmed Ali Al-Hashimi",
    role: "مدير العمليات", roleEn: "Operations Manager",
    company: "شركة البحر الأحمر للتصدير - مصر", companyEn: "Red Sea Export Co. - Egypt",
    content: "شراكة استراتيجية ناجحة. التزام تام بالمواصفات والمعايير الدولية. نفخر بتعاوننا مع أحمد كرار للتجارة.",
    contentEn: "A successful strategic partnership. Full commitment to international specifications and standards. We are proud of our collaboration with Ahmed Karrar Trading.",
    rating: 5, avatar: "أ",
  },
];

const TestimonialCard = ({ testimonial, isActive, isArabic }: { testimonial: Testimonial; isActive: boolean; isArabic: boolean }) => {
  return (
    <div className={`relative bg-card rounded-3xl p-8 shadow-xl border border-border/50 transition-all duration-500 ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-50'}`}>
      <div className="absolute -top-4 right-8">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
          <Quote className="h-6 w-6 text-primary-foreground" />
        </div>
      </div>
      <div className="flex gap-1 mb-6 mt-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-muted-foreground/30'}`} />
        ))}
      </div>
      <p className="text-foreground/90 text-lg leading-relaxed mb-8 min-h-[120px]">
        "{isArabic ? testimonial.content : testimonial.contentEn}"
      </p>
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center text-primary-foreground text-xl font-bold shadow-lg">
          {testimonial.avatar}
        </div>
        <div>
          <h4 className="font-bold text-foreground text-lg">{isArabic ? testimonial.name : testimonial.nameEn}</h4>
          <p className="text-muted-foreground text-sm">{isArabic ? testimonial.role : testimonial.roleEn}</p>
          <p className="text-primary text-sm font-medium">{isArabic ? testimonial.company : testimonial.companyEn}</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-b-3xl" />
    </div>
  );
};

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t, isArabic } = useLanguage();

  const nextTestimonial = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-24 overflow-hidden bg-muted/30">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">{t("testimonials.badge")}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("testimonials.title1")}<span className="text-primary">{t("testimonials.title2")}</span>{t("testimonials.title3")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("testimonials.description")}</p>
        </AnimatedSection>

        <div className="hidden lg:grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.id} animation="fade-up" delay={index * 150}>
              <TestimonialCard testimonial={testimonial} isActive={true} isArabic={isArabic} />
            </AnimatedSection>
          ))}
        </div>

        <div className="lg:hidden">
          <AnimatedSection animation="fade-up">
            <TestimonialCard testimonial={testimonials[activeIndex]} isActive={true} isArabic={isArabic} />
          </AnimatedSection>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prevTestimonial} className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg">
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button key={index} onClick={() => setActiveIndex(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'}`} />
              ))}
            </div>
            <button onClick={nextTestimonial} className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg">
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
