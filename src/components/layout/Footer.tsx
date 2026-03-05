import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import kpcLogoEn from "@/assets/kpc-logo-jp.png";

export const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="relative backdrop-blur-2xl bg-card/90 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              {language === "jp" ? (
                <span className="text-xl font-logo font-bold text-logo tracking-wide leading-tight">
                  京都<br />パシフィック<br />キャピタル
                </span>
              ) : (
                <img src={kpcLogoEn} alt="Kyoto Pacific Capital logo" loading="lazy" className="h-10" />
              )}
            </Link>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-md">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-medium text-foreground mb-4 tracking-wide">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3">
              {[
                { label: language === "jp" ? "創業者紹介" : "Founder", href: "/founder" },
                { label: language === "jp" ? "投資実績" : "Experience", href: "/experience" },
                { label: language === "jp" ? "投資戦略" : "Strategy", href: "/strategy" },
                { label: language === "jp" ? "お問い合わせ" : "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-base text-muted-foreground hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-medium text-foreground mb-4 tracking-wide">{t("nav.contact")}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:inquiries@kyotopacific.com"
                  className="text-base text-muted-foreground hover:text-gold transition-colors duration-300"
                >
                  inquiries@kyotopacific.com
                </a>
              </li>
              <li className="text-base text-muted-foreground">
                {t("contact.office")}
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links & Copyright */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
              >
                {t("legal.privacy")}
              </Link>
              <Link
                to="/terms"
                className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
              >
                {t("legal.terms")}
              </Link>
              <Link
                to="/disclaimer"
                className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
              >
                {t("legal.disclaimer")}
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {t("footer.copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
