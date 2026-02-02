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
import { z } from "zod";
import heroImage from "@/assets/hero-gum-arabic.png";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "الاسم مطلوب" }).max(100, { message: "يجب أن يكون الاسم أقل من 100 حرف" }),
  email: z.string().trim().email({ message: "عنوان البريد الإلكتروني غير صالح" }).max(255, { message: "يجب أن يكون البريد الإلكتروني أقل من 255 حرف" }),
  phone: z.string().trim().min(1, { message: "رقم الهاتف مطلوب" }).max(20, { message: "يجب أن يكون رقم الهاتف أقل من 20 حرف" }),
  company: z.string().trim().max(100, { message: "يجب أن يكون اسم الشركة أقل من 100 حرف" }).optional(),
  message: z.string().trim().min(1, { message: "الرسالة مطلوبة" }).max(1000, { message: "يجب أن تكون الرسالة أقل من 1000 حرف" })
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);

      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "تم إرسال الرسالة بنجاح!",
        description: "شكراً لتواصلك معنا. سنرد عليك خلال 24 ساعة.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "خطأ في التحقق",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "خطأ",
          description: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen" dir="rtl">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 text-primary-foreground overflow-hidden">
        <ParallaxHero image={heroImage} speed={0.3} />
        <div className="section-container relative z-10">
          <h1 className="heading-display text-5xl sm:text-6xl mb-6 text-center">تواصل معنا</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-primary-foreground/90">
            لنبدأ محادثة حول احتياجاتك التجارية
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-container">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <AnimatedSection animation="fade-right">
            <h2 className="text-3xl font-bold mb-6">تواصل معنا</h2>
            <p className="text-lg text-muted-foreground mb-8">
              هل لديك سؤال أو مستعد لمناقشة شراكة؟ نحن هنا للمساعدة. تواصل معنا من خلال أي من القنوات التالية.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-rose-500/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-rose-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">مكتبنا</h3>
                  <p className="text-muted-foreground">
                    شارع KK 325، كيكوكيرو<br />
                    كيغالي، رواندا
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-500/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">الهاتف</h3>
                  <a href="tel:+250795200389" className="text-muted-foreground hover:text-primary transition-colors">
                    +250 795 200 389
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-sky-500/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-sky-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">البريد الإلكتروني</h3>
                  <a href="mailto:ahmedkarrar003@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    ahmedkarrar003@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">ساعات العمل</h3>
                  <p className="text-muted-foreground">
                    الأحد - الخميس: 9:00 ص - 6:00 م<br />
                    السبت: 9:00 ص - 2:00 م<br />
                    الجمعة: مغلق
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5308688808996!2d30.0925!3d-1.9705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0x7de9d8e8e2a9e8a9!2sKicukiro%2C%20Kigali%2C%20Rwanda!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع أحمد كرار للتجارة"
              />
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="fade-left" delay={200}>
            <div className="card-elegant">
              <h2 className="text-3xl font-bold mb-6">أرسل لنا رسالة</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    الاسم الكامل *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    placeholder="أحمد محمد"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    البريد الإلكتروني *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={255}
                    placeholder="ahmed@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    رقم الهاتف *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    maxLength={20}
                    placeholder="+250 795 200 389"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    اسم الشركة (اختياري)
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    maxLength={100}
                    placeholder="شركتك"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    الرسالة *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={1000}
                    rows={5}
                    placeholder="أخبرنا عن احتياجاتك التجارية..."
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    {formData.message.length}/1000 حرف
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
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
