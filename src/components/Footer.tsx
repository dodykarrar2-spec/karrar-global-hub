import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const { t, dir } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 space-x-reverse mb-4">
              <img src={logo} alt={t("nav.companyName")} className="h-10 w-10 object-contain" />
              <h3 className="text-lg font-bold">{t("nav.companyName")}</h3>
            </div>
            <p className="text-primary-foreground/70 text-sm mb-3 font-['Amiri',serif] italic leading-relaxed">
              "{t("footer.quote")}"
            </p>
            <p className="text-primary-foreground/80 text-sm mb-4">{t("footer.description")}</p>
            <div className="flex space-x-3 space-x-reverse">
              <a href="#" className="hover:text-accent transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-accent transition-colors">{t("nav.home")}</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">{t("nav.about")}</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">{t("nav.services")}</Link></li>
              <li><Link to="/products" className="hover:text-accent transition-colors">{t("nav.products")}</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.services")}</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>{t("footer.importExport")}</li>
              <li>{t("footer.logistics")}</li>
              <li>{t("footer.sourcing")}</li>
              <li>{t("footer.supply")}</li>
              <li>{t("footer.qa")}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.contactUs")}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2 space-x-reverse">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  KK 325 St, Kicukiro<br />Kigali, Rwanda
                </span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+250795200389" className="hover:text-accent transition-colors text-primary-foreground/80">+250 795 200 389</a>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:ahmedkarrar003@gmail.com" className="hover:text-accent transition-colors text-primary-foreground/80">ahmedkarrar003@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} {t("footer.copyright")}
            </p>
            <div className="flex space-x-6 space-x-reverse text-sm">
              <a href="#" className="hover:text-accent transition-colors text-primary-foreground/60">{t("footer.privacy")}</a>
              <a href="#" className="hover:text-accent transition-colors text-primary-foreground/60">{t("footer.terms")}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
