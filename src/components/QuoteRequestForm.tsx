import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { AnimatedSection } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { FileText, Send, Package, MapPin, Scale, User, Mail, Phone, Building2 } from "lucide-react";
import { z } from "zod";

const QuoteRequestForm = () => {
  const { t, isArabic } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productCategory: "",
    productType: "",
    quantity: "",
    unit: "",
    destination: "",
    notes: "",
  });

  const productCategories = [
    { value: "livestock", label: t("quote.cat.livestock") },
    { value: "crops", label: t("quote.cat.crops") },
    { value: "meat", label: t("quote.cat.meat") },
  ];

  const productTypes: Record<string, { value: string; label: string }[]> = {
    livestock: [
      { value: "sheep", label: t("trade.sheep") },
      { value: "camels", label: t("trade.camels") },
      { value: "cattle", label: t("trade.cattle") },
    ],
    crops: [
      { value: "gum_arabic", label: t("trade.gum") },
      { value: "peanuts", label: t("trade.peanuts") },
      { value: "cotton", label: isArabic ? "القطن" : "Cotton" },
      { value: "sesame", label: isArabic ? "السمسم" : "Sesame" },
      { value: "sunflower", label: isArabic ? "زهرة الشمس" : "Sunflower" },
      { value: "hibiscus", label: isArabic ? "الكركديه" : "Hibiscus" },
      { value: "watermelon_seeds", label: isArabic ? "حب البطيخ" : "Watermelon Seeds" },
      { value: "red_onion", label: isArabic ? "البصل الأحمر" : "Red Onion" },
      { value: "alfalfa", label: isArabic ? "البرسيم" : "Alfalfa" },
    ],
    meat: [
      { value: "chilled", label: isArabic ? "لحوم مبردة" : "Chilled Meat" },
      { value: "frozen", label: isArabic ? "لحوم مجمدة" : "Frozen Meat" },
      { value: "canned", label: isArabic ? "لحوم معلبة" : "Canned Meat" },
    ],
  };

  const units = [
    { value: "ton", label: isArabic ? "طن" : "Ton" },
    { value: "kg", label: isArabic ? "كيلوغرام" : "Kilogram" },
    { value: "head", label: isArabic ? "رأس" : "Head" },
    { value: "container", label: isArabic ? "حاوية (20 قدم)" : "Container (20ft)" },
    { value: "container40", label: isArabic ? "حاوية (40 قدم)" : "Container (40ft)" },
  ];

  const destinations = [
    { value: "saudi", label: isArabic ? "المملكة العربية السعودية" : "Saudi Arabia" },
    { value: "uae", label: isArabic ? "الإمارات العربية المتحدة" : "UAE" },
    { value: "egypt", label: isArabic ? "مصر" : "Egypt" },
    { value: "oman", label: isArabic ? "سلطنة عمان" : "Oman" },
    { value: "turkey", label: isArabic ? "تركيا" : "Turkey" },
    { value: "china", label: isArabic ? "الصين" : "China" },
    { value: "thailand", label: isArabic ? "تايلاند" : "Thailand" },
    { value: "rwanda", label: isArabic ? "رواندا" : "Rwanda" },
    { value: "uganda", label: isArabic ? "يوغندا" : "Uganda" },
    { value: "kenya", label: isArabic ? "كينيا" : "Kenya" },
    { value: "tanzania", label: isArabic ? "تنزانيا" : "Tanzania" },
    { value: "other", label: isArabic ? "وجهة أخرى" : "Other Destination" },
  ];

  const schema = z.object({
    name: z.string().trim().min(1).max(100),
    email: z.string().trim().email().max(255),
    phone: z.string().trim().min(1).max(20),
    company: z.string().trim().max(100).optional(),
    productCategory: z.string().min(1),
    productType: z.string().min(1),
    quantity: z.string().trim().min(1),
    unit: z.string().min(1),
    destination: z.string().min(1),
    notes: z.string().trim().max(1000).optional(),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      schema.parse(formData);
      await new Promise((r) => setTimeout(r, 1000));
      toast({ title: t("quote.successTitle"), description: t("quote.successDesc") });
      setFormData({ name: "", email: "", phone: "", company: "", productCategory: "", productType: "", quantity: "", unit: "", destination: "", notes: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({ title: t("quote.validationError"), description: t("quote.fillRequired"), variant: "destructive" });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelect = (name: string, value: string) => {
    if (name === "productCategory") {
      setFormData({ ...formData, productCategory: value, productType: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <section className="section-container" id="quote-form">
      <AnimatedSection animation="fade-up" className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
          <FileText className="h-4 w-4" />
          <span className="text-sm font-semibold">{t("quote.badge")}</span>
        </div>
        <h2 className="text-4xl font-bold mb-4">{t("quote.title")}</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("quote.description")}</p>
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={200}>
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="card-elegant p-8 space-y-8">
            {/* Personal Info */}
            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                {t("quote.personalInfo")}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">{t("contact.fullName")}</label>
                  <div className="relative">
                    <User className="absolute top-3 text-muted-foreground h-4 w-4 start-3" />
                    <Input name="name" value={formData.name} onChange={handleChange} required maxLength={100} className="ps-10" placeholder={isArabic ? "أحمد محمد" : "John Doe"} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t("contact.emailLabel")}</label>
                  <div className="relative">
                    <Mail className="absolute top-3 text-muted-foreground h-4 w-4 start-3" />
                    <Input name="email" type="email" value={formData.email} onChange={handleChange} required maxLength={255} className="ps-10" placeholder="ahmed@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t("contact.phoneLabel")}</label>
                  <div className="relative">
                    <Phone className="absolute top-3 text-muted-foreground h-4 w-4 start-3" />
                    <Input name="phone" type="tel" value={formData.phone} onChange={handleChange} required maxLength={20} className="ps-10" placeholder="+250 795 200 389" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t("contact.company")}</label>
                  <div className="relative">
                    <Building2 className="absolute top-3 text-muted-foreground h-4 w-4 start-3" />
                    <Input name="company" value={formData.company} onChange={handleChange} maxLength={100} className="ps-10" placeholder={isArabic ? "شركتك" : "Your Company"} />
                  </div>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                {t("quote.productDetails")}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">{t("quote.productCategory")} *</label>
                  <Select value={formData.productCategory} onValueChange={(v) => handleSelect("productCategory", v)}>
                    <SelectTrigger><SelectValue placeholder={t("quote.selectCategory")} /></SelectTrigger>
                    <SelectContent>
                      {productCategories.map((c) => (
                        <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t("quote.productType")} *</label>
                  <Select value={formData.productType} onValueChange={(v) => handleSelect("productType", v)} disabled={!formData.productCategory}>
                    <SelectTrigger><SelectValue placeholder={t("quote.selectProduct")} /></SelectTrigger>
                    <SelectContent>
                      {(productTypes[formData.productCategory] || []).map((p) => (
                        <SelectItem key={p.value} value={p.value}>{p.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t("quote.quantity")} *</label>
                  <div className="relative">
                    <Scale className="absolute top-3 text-muted-foreground h-4 w-4 start-3" />
                    <Input name="quantity" value={formData.quantity} onChange={handleChange} required className="ps-10" placeholder={isArabic ? "مثال: 100" : "e.g. 100"} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t("quote.unit")} *</label>
                  <Select value={formData.unit} onValueChange={(v) => handleSelect("unit", v)}>
                    <SelectTrigger><SelectValue placeholder={t("quote.selectUnit")} /></SelectTrigger>
                    <SelectContent>
                      {units.map((u) => (
                        <SelectItem key={u.value} value={u.value}>{u.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Destination */}
            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                {t("quote.destination")}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">{t("quote.destinationCountry")} *</label>
                  <Select value={formData.destination} onValueChange={(v) => handleSelect("destination", v)}>
                    <SelectTrigger><SelectValue placeholder={t("quote.selectDestination")} /></SelectTrigger>
                    <SelectContent>
                      {destinations.map((d) => (
                        <SelectItem key={d.value} value={d.value}>{d.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium mb-2">{t("quote.additionalNotes")}</label>
                  <Textarea name="notes" value={formData.notes} onChange={handleChange} maxLength={1000} rows={4} placeholder={t("quote.notesPlaceholder")} />
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full btn-primary h-12 text-base gap-2" disabled={isSubmitting}>
              <Send className="h-4 w-4" />
              {isSubmitting ? t("quote.submitting") : t("quote.submit")}
            </Button>
          </form>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default QuoteRequestForm;
