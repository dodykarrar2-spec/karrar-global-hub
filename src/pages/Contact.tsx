import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { AnimatedSection } from "@/hooks/use-scroll-animation";
import { ParallaxHero } from "@/hooks/use-parallax";
import { useLanguage } from "@/contexts/LanguageContext";
import { z } from "zod";
import heroImage from "@/assets/hero-gum-arabic.png";
import logo from "@/assets/logo.jpg";

const Contact = () => {
  const { toast } = useToast();
  const { t, dir, isArabic } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactSchema = z.object({
    name: z.string().trim().min(1, { message: isArabic ? "الاسم مطلوب" : "Name is required" }).max(100),
    email: z.string().trim().email({ message: isArabic ? "عنوان البريد الإلكتروني غير صالح" : "Invalid email address" }).max(255),
    phone: z.string().trim().min(1, { message: isArabic ? "رقم الهاتف مطلوب" : "Phone number is required" }).max(20),
    company: z.string().trim().max(100).optional(),
    message: z.string().trim().min(1, { message: isArabic ? "الرسالة مطلوبة" : "Message is required" }).max(1000),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      contactSchema.parse(formData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({ title: t("contact.successTitle"), description: t("contact.successDesc") });
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({ title: t("contact.validationError"), description: error.errors[0].message, variant: "destructive" });
      } else {
        toast({ title: t("contact.error"), description: t("contact.errorDesc"), variant: "destructive" });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const hoursLines = t("contact.hoursDetail").split("\n");

  return (
    <div className="min-h-screen" dir={dir}>
      <Navigation />

      <section className="relative pt-32 pb-16 text-primary-foreground overflow-hidden">
        <ParallaxHero image={heroImage} speed={0.3} />
        <div className="absolute top-10 right-10 opacity-10 z-10">
          <img src={logo} alt="" className="w-32 h-32 object-contain" />
        </div>
        <div className="absolute bottom-6 left-10 opacity-10 z-10">
          <img src={logo} alt="" className="w-20 h-20 object-contain" />
        </div>
        <div className="section-container relative z-10">
          <h1 className="heading-display text-5xl sm:text-6xl mb-6 text-center">{t("contact.hero.title")}</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-primary-foreground/90">{t("contact.hero.desc")}</p>
        </div>
      </section>

      <section className="section-container">
        <div className="grid lg:grid-cols-2 gap-12">
          <AnimatedSection animation="fade-right">
            <h2 className="text-3xl font-bold mb-6">{t("contact.getInTouch")}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t("contact.getInTouchDesc")}</p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-rose-500/10 p-3 rounded-lg"><MapPin className="h-6 w-6 text-rose-500" /></div>
                <div>
                  <h3 className="font-semibold mb-1">{t("contact.office")}</h3>
                  <p className="text-muted-foreground">KK 325 St, Kicukiro<br />Kigali, Rwanda</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-emerald-500/10 p-3 rounded-lg"><Phone className="h-6 w-6 text-emerald-500" /></div>
                <div>
                  <h3 className="font-semibold mb-1">{t("contact.phone")}</h3>
                  <a href="tel:+250795200389" className="text-muted-foreground hover:text-primary transition-colors">+250 795 200 389</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-sky-500/10 p-3 rounded-lg"><Mail className="h-6 w-6 text-sky-500" /></div>
                <div>
                  <h3 className="font-semibold mb-1">{t("contact.email")}</h3>
                  <a href="mailto:ahmedkarrar003@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">ahmedkarrar003@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-lg"><Clock className="h-6 w-6 text-amber-500" /></div>
                <div>
                  <h3 className="font-semibold mb-1">{t("contact.hours")}</h3>
                  <p className="text-muted-foreground">
                    {hoursLines.map((line, i) => (<span key={i}>{line}{i < hoursLines.length - 1 && <br />}</span>))}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5308688808996!2d30.0925!3d-1.9705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0x7de9d8e8e2a9e8a9!2sKicukiro%2C%20Kigali%2C%20Rwanda!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%" height="300" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title={t("contact.office")}
              />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={200}>
            <div className="card-elegant relative overflow-hidden">
              <div className="absolute -bottom-6 -left-6 opacity-[0.04]">
                <img src={logo} alt="" className="w-40 h-40 object-contain" />
              </div>
              <h2 className="text-3xl font-bold mb-6">{t("contact.sendMessage")}</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">{t("contact.fullName")}</label>
                  <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required maxLength={100} placeholder={isArabic ? "أحمد محمد" : "John Doe"} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">{t("contact.emailLabel")}</label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required maxLength={255} placeholder="ahmed@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">{t("contact.phoneLabel")}</label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required maxLength={20} placeholder="+250 795 200 389" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">{t("contact.company")}</label>
                  <Input id="company" name="company" type="text" value={formData.company} onChange={handleChange} maxLength={100} placeholder={isArabic ? "شركتك" : "Your Company"} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">{t("contact.message")}</label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required maxLength={1000} rows={5} placeholder={isArabic ? "أخبرنا عن احتياجاتك التجارية..." : "Tell us about your trading needs..."} />
                  <p className="text-xs text-muted-foreground mt-1">{formData.message.length}/1000 {t("contact.chars")}</p>
                </div>
                <Button type="submit" className="w-full btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? t("contact.sending") : t("contact.send")}
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
