import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import kpcLogoJp from "@/assets/kpc-logo-jp-gold.png";
import kpcLogoEn from "@/assets/kpc-logo-jp.png";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false);
  const location = useLocation();
  const { language } = useLanguage();


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOpenMenu = () => {
      setIsMobileOpen(true);
      setIsAboutOpen(true);
    };
    window.addEventListener("open-nav-menu", handleOpenMenu);
    return () => window.removeEventListener("open-nav-menu", handleOpenMenu);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl",
        isScrolled
          ? "bg-background/70 shadow-silk"
          : "bg-background/50"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <Link
            to="/"
            className="flex flex-col group"
          >
            {language === "jp" ? (
              <div className="flex items-center gap-4 group-hover:opacity-80 transition-opacity duration-300">
                <div className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 overflow-hidden">
                  <img
                    src={kpcLogoEn}
                    alt="Kyoto Pacific Capital logo"
                    loading="lazy"
                    className="h-full w-auto object-cover object-left"
                  />
                </div>
                <img
                  src={kpcLogoJp}
                  alt="京都パシフィックキャピタル ロゴ"
                  loading="lazy"
                  className="h-10 md:h-14 lg:h-16"
                />
              </div>
            ) : (
              <img src={kpcLogoEn} alt="Kyoto Pacific Capital logo" loading="lazy" className="h-20 md:h-24 lg:h-28 group-hover:opacity-80 transition-opacity duration-300" />
            )}
          </Link>

          {/* Right side icons */}
          <div className="flex items-center gap-2">
            {location.pathname !== "/" && (
              <Link
                to="/"
                aria-label="Back Home"
                className="flex h-12 w-12 items-center justify-center rounded-lg text-gold transition-all duration-300 hover:shadow-gold-glow"
              >
                <Home className="h-8 w-8" />
              </Link>
            )}
            <LanguageToggle />
            <Button
              variant="ghost"
              aria-label={isMobileOpen ? (language === "jp" ? "メニューを閉じる" : "Close navigation menu") : (language === "jp" ? "メニューを開く" : "Open navigation menu")}
              className="text-foreground hover:text-gold h-14 w-14 p-0 [&_svg]:!h-10 [&_svg]:!w-10"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {isMobileOpen ? (
                <X size={40} strokeWidth={2.5} />
              ) : (
                <Menu size={40} strokeWidth={2.5} />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Menu Dropdown */}
      <div
        className={cn(
          "absolute top-full left-0 right-0 backdrop-blur-xl bg-background/80 transition-all duration-300 overflow-hidden shadow-silk",
          isMobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-6 py-6">
          {/* About Us — Level 1: expandable parent, does NOT navigate */}
          <button
            onClick={() => setIsAboutOpen(!isAboutOpen)}
            className="flex items-center gap-2 w-full py-2 text-3xl md:text-4xl text-foreground/80 hover:text-gold transition-colors"
          >
            <span>{language === "jp" ? "会社概要" : "About Us"}</span>
            <span className={cn("text-[8px] inline-block transition-transform duration-200", isAboutOpen ? "rotate-90" : "")}>►</span>
          </button>

          {/* Level 2 items */}
          <div className={cn("pl-4 space-y-2 overflow-hidden transition-all duration-300", isAboutOpen ? "max-h-[40rem] opacity-100 mt-2" : "max-h-0 opacity-0")}>
            <Link to="/founder" className="block py-2 text-2xl md:text-3xl text-foreground/60 hover:text-gold transition-colors">
              {language === "jp" ? "創業者紹介" : "Founder"}
            </Link>

            {/* Experience — navigates AND expands to show Case Studies */}
            <div className="flex items-center gap-2 py-2">
              <Link to="/experience" className="text-2xl md:text-3xl text-foreground/60 hover:text-gold transition-colors">
                {language === "jp" ? "投資実績" : "Experience"}
              </Link>
              <button
                onClick={() => setIsExperienceOpen(!isExperienceOpen)}
                className="text-foreground/60 hover:text-gold transition-colors"
              >
                <span className={cn("text-[8px] inline-block transition-transform duration-200", isExperienceOpen ? "rotate-90" : "")}>►</span>
              </button>
            </div>

            {/* Experience children */}
            <div className={cn("pl-4 space-y-2 overflow-hidden transition-all duration-300", isExperienceOpen ? "max-h-[20rem] opacity-100 mt-1" : "max-h-0 opacity-0")}>
              {/* Case Studies — expandable, does NOT navigate */}
              <div className="pl-4">
                <button
                  onClick={() => setIsCaseStudiesOpen(!isCaseStudiesOpen)}
                  className="flex items-center gap-2 w-full py-2 text-xl md:text-2xl text-foreground/50 hover:text-gold transition-colors"
                >
                  <span>{language === "jp" ? "ケーススタディ" : "Case Studies"}</span>
                  <span className={cn("text-[8px] inline-block transition-transform duration-200", isCaseStudiesOpen ? "rotate-90" : "")}>►</span>
                </button>

                {/* Case study pages */}
                <div className={cn("pl-4 space-y-2 overflow-hidden transition-all duration-300", isCaseStudiesOpen ? "max-h-40 opacity-100 mt-1" : "max-h-0 opacity-0")}>
                  <Link to="/case-studies/usj" className="block py-2 text-lg md:text-xl text-foreground/40 hover:text-gold transition-colors">
                    {language === "jp" ? "ユニバーサル・スタジオ・ジャパン" : "Universal Studios Japan"}
                  </Link>
                  <Link to="/case-studies/renew" className="block py-2 text-lg md:text-xl text-foreground/40 hover:text-gold transition-colors">
                    {language === "jp" ? "リニュー・パワー" : "ReNew Power"}
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/strategy" className="block py-2 text-2xl md:text-3xl text-foreground/60 hover:text-gold transition-colors">
              {language === "jp" ? "投資戦略" : "Strategy"}
            </Link>
            <Link to="/contact" className="block py-2 text-2xl md:text-3xl text-foreground/60 hover:text-gold transition-colors">
              {language === "jp" ? "お問い合わせ" : "Contact Us"}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
