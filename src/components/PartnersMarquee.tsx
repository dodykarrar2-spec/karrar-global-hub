import { Building2, Globe2, Landmark, Factory, Ship, Store } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Partner {
  name: string;
  nameEn: string;
  icon: React.ElementType;
  country: string;
  countryEn: string;
}

const partners: Partner[] = [
  { name: "شركة الخليج للتجارة", nameEn: "Gulf Trading Co.", icon: Building2, country: "الإمارات", countryEn: "UAE" },
  { name: "مجموعة المنصور التجارية", nameEn: "Al-Mansour Trading", icon: Landmark, country: "السعودية", countryEn: "KSA" },
  { name: "شركة الواحة للأغذية", nameEn: "Al-Waha Foods", icon: Store, country: "قطر", countryEn: "Qatar" },
  { name: "البحر الأحمر للتصدير", nameEn: "Red Sea Export", icon: Ship, country: "مصر", countryEn: "Egypt" },
  { name: "الشرق الأوسط للاستيراد", nameEn: "ME Import Co.", icon: Globe2, country: "الكويت", countryEn: "Kuwait" },
  { name: "المصانع المتحدة", nameEn: "United Factories", icon: Factory, country: "البحرين", countryEn: "Bahrain" },
  { name: "تجارة عُمان الدولية", nameEn: "Oman Int'l Trade", icon: Building2, country: "عُمان", countryEn: "Oman" },
  { name: "الأردن للصناعات الغذائية", nameEn: "Jordan Food Industries", icon: Factory, country: "الأردن", countryEn: "Jordan" },
];

const PartnerCard = ({ partner, isArabic }: { partner: Partner; isArabic: boolean }) => {
  const Icon = partner.icon;
  return (
    <div className="flex-shrink-0 group">
      <div className="flex items-center gap-4 px-8 py-5 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 shadow-md hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-colors">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div className={isArabic ? "text-right" : "text-left"}>
          <h4 className="font-bold text-foreground whitespace-nowrap">{isArabic ? partner.name : partner.nameEn}</h4>
          <p className="text-sm text-muted-foreground">{isArabic ? partner.country : partner.countryEn}</p>
        </div>
      </div>
    </div>
  );
};

const PartnersMarquee = () => {
  const { t, isArabic } = useLanguage();
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">{t("partners.badge")}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {t("partners.title1")}<span className="text-primary">{t("partners.title2")}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{t("partners.description")}</p>
        </div>
      </div>
      <div className="relative mb-6">
        <div className="flex gap-6 animate-marquee-rtl">
          {duplicatedPartners.map((partner, index) => (
            <PartnerCard key={`row1-${index}`} partner={partner} isArabic={isArabic} />
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="flex gap-6 animate-marquee-ltr">
          {[...duplicatedPartners].reverse().map((partner, index) => (
            <PartnerCard key={`row2-${index}`} partner={partner} isArabic={isArabic} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
