import { useLanguage } from "@/contexts/LanguageContext";
import { AnimatedSection } from "@/hooks/use-scroll-animation";
import { Shield } from "lucide-react";
import certIso9001 from "@/assets/cert-iso9001.png";
import certHaccp from "@/assets/cert-haccp.png";
import certHalal from "@/assets/cert-halal.png";
import certIso22000 from "@/assets/cert-iso22000.png";
import certGmp from "@/assets/cert-gmp.png";
import certOrganic from "@/assets/cert-organic.png";

const CertificationsSection = () => {
  const { t } = useLanguage();

  const certifications = [
    { image: certIso9001, name: "ISO 9001", desc: t("cert.iso9001") },
    { image: certHaccp, name: "HACCP", desc: t("cert.haccp") },
    { image: certHalal, name: t("cert.halal.name"), desc: t("cert.halal") },
    { image: certIso22000, name: "ISO 22000", desc: t("cert.iso22000") },
    { image: certGmp, name: "GMP", desc: t("cert.gmp") },
    { image: certOrganic, name: t("cert.organic.name"), desc: t("cert.organic") },
  ];

  return (
    <section className="section-container bg-muted/30">
      <AnimatedSection animation="fade-up" className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Shield className="h-8 w-8 text-primary" />
          <h2 className="text-4xl font-bold">{t("cert.title")}</h2>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("cert.description")}</p>
      </AnimatedSection>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {certifications.map((cert, index) => (
          <AnimatedSection key={index} animation="scale" delay={index * 100}>
            <div className="group flex flex-col items-center text-center p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-24 h-24 mb-4 relative">
                <img
                  src={cert.image}
                  alt={cert.name}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-bold text-sm mb-1">{cert.name}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{cert.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
