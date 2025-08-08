"use client";

import { useLanguage } from "../../hooks/useLanguage";
import { Language, SUPPORTED_LANGUAGES } from "@/lib/language";

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className = "" }: LanguageSwitcherProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-sm font-medium text-secondary">
        {t("common.language")}:
      </span>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as Language)}
        className="px-3 py-1 border border-muted rounded-md bg-surface-muted text-primary-text text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent hover:border-accent-alt transition-colors"
      >
        {Object.entries(SUPPORTED_LANGUAGES).map(([code, name]) => (
          <option
            key={code}
            value={code}
            className="bg-surface-light text-primary-text"
          >
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}
