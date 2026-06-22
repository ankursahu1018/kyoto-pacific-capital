import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
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
        <div className="flex items-center justify-between h-20 md:h-28">
          {/* Logo - EN always; JP stacked underneath on mobile (shown on desktop in the right cluster) */}
          <Link
            to="/"
            className="flex flex-col group flex-shrink-0"
          >
            <img src={kpcLogoEn} alt="Kyoto Pacific Capital global investment platform" loading="lazy" className="h-12 md:h-24 lg:h-28 group-hover:opacity-80 transition-opacity duration-300" />
            <img src={kpcLogoJp} alt="京都パシフィックキャピタル" className="block md:hidden h-5 mt-1 object-contain self-start group-hover:opacity-80 transition-opacity duration-300" />
          </Link>

          {/* Right side - JP logo + Home (hidden on mobile), hamburger always */}
          <div className="flex items-center gap-2 md:gap-4">
            <img
              src={kpcLogoJp}
              alt="京都パシフィックキャピタル"
              className="hidden md:block h-16 lg:h-20 object-contain"
            />
            <Link
              to="/"
              aria-label="Home"
              className="hidden md:flex h-12 w-12 items-center justify-center rounded-lg text-gold transition-all duration-300 hover:opacity-80"
            >
              <Home className="h-7 w-7" />
            </Link>
            <LanguageToggle />
            <Button
              variant="ghost"
              aria-label={isMobileOpen ? (language === "jp" ? "メニューを閉じる" : "Close navigation menu") : (language === "jp" ? "メニューを開く" : "Open navigation menu")}
              className="text-foreground hover:text-gold h-10 w-10 md:h-14 md:w-14 p-0 [&_svg]:!h-7 [&_svg]:!w-7 md:[&_svg]:!h-10 md:[&_svg]:!w-10"
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

      {/* Menu Dropdown - compact, right-aligned */}
      <div
        className={cn(
          "absolute top-full right-0 w-auto min-w-[260px] mr-6 lg:mr-12 rounded-2xl backdrop-blur-xl bg-background/90 border border-white/10 transition-all duration-300 overflow-hidden shadow-silk",
          isMobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 border-transparent"
        )}
      >
        <div className="px-6 py-4 md:px-8 md:py-6 space-y-1">
          <Link to="/" className="flex items-center gap-2 py-2 text-lg md:text-2xl text-foreground/80 hover:text-gold transition-colors">
            <Home className="h-5 w-5 md:h-6 md:w-6" />
            {language === "jp" ? "ホーム" : "Home"}
          </Link>
          <Link to="/ankur-sahu" className="block py-2 text-lg md:text-2xl text-foreground/80 hover:text-gold transition-colors">
            {language === "jp" ? "創業者紹介" : "Ankur Sahu"}
          </Link>
          <Link to="/experience" className="block py-2 text-lg md:text-2xl text-foreground/80 hover:text-gold transition-colors">
            {language === "jp" ? "投資実績" : "Investment Experience"}
          </Link>
          <Link to="/strategy" className="block py-2 text-lg md:text-2xl text-foreground/80 hover:text-gold transition-colors">
            {language === "jp" ? "投資戦略" : "Strategy"}
          </Link>
          <Link to="/contact" className="block py-2 text-lg md:text-2xl text-foreground/80 hover:text-gold transition-colors">
            {language === "jp" ? "お問い合わせ" : "Contact Us"}
          </Link>
        </div>
      </div>
    </nav>
  );
};
