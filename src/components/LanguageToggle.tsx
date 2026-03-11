import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center gap-2 px-3 py-2 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
      aria-label={language === "ar" ? "Switch to English" : "التبديل للعربية"}
    >
      <Languages className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
      <span className="text-xs font-bold text-primary tracking-wide">
        {language === "ar" ? "EN" : "عربي"}
      </span>
    </button>
  );
};

export default LanguageToggle;
