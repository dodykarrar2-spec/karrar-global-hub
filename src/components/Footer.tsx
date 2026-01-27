import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 space-x-reverse mb-4">
              <img 
                src={logo} 
                alt="شعار أحمد كرار للتجارة" 
                className="h-10 w-10 object-contain"
              />
              <h3 className="text-lg font-bold">أحمد كرار للتجارة</h3>
            </div>
            <p className="text-primary-foreground/70 text-sm mb-3 font-['Amiri',serif] italic leading-relaxed">
              "هب يا كريم بلا مقدار لعبدك أحمد الكرار"
            </p>
            <p className="text-primary-foreground/80 text-sm mb-4">
              شريكك الموثوق في التجارة الدولية. نربط الأسواق ونصنع القيمة عبر أفريقيا والشرق الأوسط وآسيا.
            </p>
            <div className="flex space-x-3 space-x-reverse">
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">الرئيسية</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">من نحن</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent transition-colors">خدماتنا</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-accent transition-colors">المنتجات</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">تواصل معنا</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">خدماتنا</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>الاستيراد والتصدير</li>
              <li>إدارة اللوجستيات</li>
              <li>توريد المنتجات</li>
              <li>حلول سلسلة التوريد</li>
              <li>ضمان الجودة</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2 space-x-reverse">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  شارع KK 325، كيكوكيرو<br />
                  كيغالي، رواندا
                </span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+250795200389" className="hover:text-accent transition-colors text-primary-foreground/80">
                  +250 795 200 389
                </a>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:ahmedkarrar003@gmail.com" className="hover:text-accent transition-colors text-primary-foreground/80">
                  ahmedkarrar003@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} أحمد كرار للتجارة. جميع الحقوق محفوظة.
            </p>
            <div className="flex space-x-6 space-x-reverse text-sm">
              <a href="#" className="hover:text-accent transition-colors text-primary-foreground/60">
                سياسة الخصوصية
              </a>
              <a href="#" className="hover:text-accent transition-colors text-primary-foreground/60">
                شروط الخدمة
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;