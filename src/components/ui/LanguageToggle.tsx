import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: "en" | "jp") => {
    if (lang !== language) {
      setLanguage(lang);
    }
  };

  return (
    <div className="flex items-center gap-0 rounded-lg border border-border overflow-hidden">
      <button
        type="button"
        aria-label="Switch to English"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleLanguageChange("en");
        }}
        className={cn(
          "px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base font-medium transition-all duration-300 cursor-pointer",
          language === "en"
            ? "bg-gold text-purple-900"
            : "bg-transparent text-muted-foreground hover:text-foreground hover:bg-foreground/5"
        )}
      >
        EN
      </button>
      <div className="w-px h-6 md:h-7 bg-border" />
      <button
        type="button"
        aria-label="Switch to Japanese"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleLanguageChange("jp");
        }}
        className={cn(
          "px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base font-medium transition-all duration-300 cursor-pointer",
          language === "jp"
            ? "bg-gold text-purple-900"
            : "bg-transparent text-muted-foreground hover:text-foreground hover:bg-foreground/5"
        )}
      >
        JP
      </button>
    </div>
  );
};