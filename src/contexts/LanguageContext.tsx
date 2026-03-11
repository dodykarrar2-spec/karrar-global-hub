import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  dir: "rtl" | "ltr";
  isArabic: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Import translations
import { translations } from "@/i18n/translations";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved === "en" ? "en" : "ar") as Language;
  });

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => {
      const next = prev === "ar" ? "en" : "ar";
      localStorage.setItem("language", next);
      return next;
    });
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[language]?.[key] || translations["ar"]?.[key] || key;
    },
    [language]
  );

  const dir = language === "ar" ? "rtl" : "ltr";
  const isArabic = language === "ar";

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, dir, isArabic }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
