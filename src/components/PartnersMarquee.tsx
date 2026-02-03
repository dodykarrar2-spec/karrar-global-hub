import { Building2, Globe2, Landmark, Factory, Ship, Store } from "lucide-react";

interface Partner {
  name: string;
  icon: React.ElementType;
  country: string;
}

const partners: Partner[] = [
  { name: "شركة الخليج للتجارة", icon: Building2, country: "الإمارات" },
  { name: "مجموعة المنصور التجارية", icon: Landmark, country: "السعودية" },
  { name: "شركة الواحة للأغذية", icon: Store, country: "قطر" },
  { name: "البحر الأحمر للتصدير", icon: Ship, country: "مصر" },
  { name: "الشرق الأوسط للاستيراد", icon: Globe2, country: "الكويت" },
  { name: "المصانع المتحدة", icon: Factory, country: "البحرين" },
  { name: "تجارة عُمان الدولية", icon: Building2, country: "عُمان" },
  { name: "الأردن للصناعات الغذائية", icon: Factory, country: "الأردن" },
];

const PartnerCard = ({ partner }: { partner: Partner }) => {
  const Icon = partner.icon;
  
  return (
    <div className="flex-shrink-0 group">
      <div className="flex items-center gap-4 px-8 py-5 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 shadow-md hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-colors">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div className="text-right">
          <h4 className="font-bold text-foreground whitespace-nowrap">{partner.name}</h4>
          <p className="text-sm text-muted-foreground">{partner.country}</p>
        </div>
      </div>
    </div>
  );
};

const PartnersMarquee = () => {
  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            شركاؤنا في النجاح
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            نفخر بشراكاتنا <span className="text-primary">الاستراتيجية</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            نتعاون مع أفضل الشركات في المنطقة لتقديم خدمات متميزة
          </p>
        </div>
      </div>

      {/* First Row - Right to Left */}
      <div className="relative mb-6">
        <div className="flex gap-6 animate-marquee-rtl">
          {duplicatedPartners.map((partner, index) => (
            <PartnerCard key={`row1-${index}`} partner={partner} />
          ))}
        </div>
      </div>

      {/* Second Row - Left to Right */}
      <div className="relative">
        <div className="flex gap-6 animate-marquee-ltr">
          {duplicatedPartners.reverse().map((partner, index) => (
            <PartnerCard key={`row2-${index}`} partner={partner} />
          ))}
        </div>
      </div>

      {/* Gradient overlays for smooth edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
    </section>
  );
};

export default PartnersMarquee;
