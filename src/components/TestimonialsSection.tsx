import { useState } from "react";
import { Quote, Star, ChevronRight, ChevronLeft } from "lucide-react";
import { AnimatedSection } from "@/hooks/use-scroll-animation";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "محمد أحمد الفاضل",
    role: "مدير المشتريات",
    company: "شركة الخليج للتجارة - الإمارات",
    content: "تعاملنا مع أحمد كرار للتجارة منذ أكثر من ٣ سنوات، ونحن سعداء جداً بجودة المنتجات والالتزام بمواعيد التسليم. شريك تجاري موثوق ومحترف.",
    rating: 5,
    avatar: "م",
  },
  {
    id: 2,
    name: "عبدالله سعيد المنصور",
    role: "المدير التنفيذي",
    company: "مجموعة المنصور التجارية - السعودية",
    content: "جودة الصمغ العربي والمنتجات الزراعية ممتازة. فريق العمل متعاون ويقدم حلولاً مرنة تناسب احتياجاتنا. ننصح بالتعامل معهم.",
    rating: 5,
    avatar: "ع",
  },
  {
    id: 3,
    name: "خالد إبراهيم العمري",
    role: "مدير سلسلة التوريد",
    company: "شركة الواحة للأغذية - قطر",
    content: "الماشية السودانية التي نستوردها من كرار للتجارة تتميز بجودة عالية. الأسعار تنافسية والخدمة ممتازة من البداية للنهاية.",
    rating: 5,
    avatar: "خ",
  },
  {
    id: 4,
    name: "أحمد علي الهاشمي",
    role: "مدير العمليات",
    company: "شركة البحر الأحمر للتصدير - مصر",
    content: "شراكة استراتيجية ناجحة. التزام تام بالمواصفات والمعايير الدولية. نفخر بتعاوننا مع أحمد كرار للتجارة.",
    rating: 5,
    avatar: "أ",
  },
];

const TestimonialCard = ({ testimonial, isActive }: { testimonial: Testimonial; isActive: boolean }) => {
  return (
    <div 
      className={`relative bg-card rounded-3xl p-8 shadow-xl border border-border/50 transition-all duration-500 ${
        isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-50'
      }`}
    >
      {/* Quote icon */}
      <div className="absolute -top-4 right-8">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
          <Quote className="h-6 w-6 text-primary-foreground" />
        </div>
      </div>

      {/* Rating stars */}
      <div className="flex gap-1 mb-6 mt-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < testimonial.rating
                ? 'text-amber-400 fill-amber-400'
                : 'text-muted-foreground/30'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-foreground/90 text-lg leading-relaxed mb-8 min-h-[120px]">
        "{testimonial.content}"
      </p>

      {/* Author info */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center text-primary-foreground text-xl font-bold shadow-lg">
          {testimonial.avatar}
        </div>
        
        <div>
          <h4 className="font-bold text-foreground text-lg">{testimonial.name}</h4>
          <p className="text-muted-foreground text-sm">{testimonial.role}</p>
          <p className="text-primary text-sm font-medium">{testimonial.company}</p>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-b-3xl" />
    </div>
  );
};

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-24 overflow-hidden bg-muted/30">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            آراء عملائنا
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ماذا يقول <span className="text-primary">عملاؤنا</span> عنا
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نفخر بثقة عملائنا وشراكاتنا الناجحة في مختلف أنحاء العالم
          </p>
        </AnimatedSection>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.id} animation="fade-up" delay={index * 150}>
              <TestimonialCard testimonial={testimonial} isActive={true} />
            </AnimatedSection>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <AnimatedSection animation="fade-up">
            <TestimonialCard testimonial={testimonials[activeIndex]} isActive={true} />
          </AnimatedSection>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-primary w-8'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
