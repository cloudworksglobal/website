"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "ES" | "EN";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "ES",
  setLang: () => {},
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("ES");

  useEffect(() => {
    const saved = localStorage.getItem("cw_lang") as Language;
    if (saved === "EN" || saved === "ES") {
      setLangState(saved);
    }
  }, []);

  const toggleLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("cw_lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: setLangState, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
