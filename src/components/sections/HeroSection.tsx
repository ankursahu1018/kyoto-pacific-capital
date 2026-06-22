import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBgEn from "@/assets/hero-bg-premium.png";
import heroBgJp from "@/assets/hero-bg-japan.png";

export const HeroSection = () => {
  const { t, language } = useLanguage();
  const heroBg = language === "jp" ? heroBgJp : heroBgEn;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const rotatingWords = language === "jp"
    ? ["グローバル展開", "戦略的成長", "長期的資本", "テクノロジー"]
    : [
      "Long Term Capital",
      "Strategic Growth",
      "Globalization",
      "Technological Innovation",
    ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  // City marker positions
  const cities = [
    { name: "San Francisco", top: "33%", left: "15%", delay: "0s" },
    { name: "Paris", top: "28%", left: "48%", delay: "0.5s" },
    { name: "Bangalore", top: "58%", left: "67%", delay: "1s" },
    { name: "Tokyo", top: "35%", left: "85%", delay: "1.5s" },
  ];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Twinkle animation styles */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
        @keyframes glow {
          0%, 100% { 
            box-shadow: 
              0 0 10px 4px rgba(0,212,255,0.8),
              0 0 20px 8px rgba(0,212,255,0.5),
              0 0 30px 12px rgba(0,212,255,0.3);
          }
          50% { 
            box-shadow: 
              0 0 15px 6px rgba(0,212,255,1),
              0 0 30px 12px rgba(0,212,255,0.7),
              0 0 45px 18px rgba(0,212,255,0.4);
          }
        }
        .star {
          background: radial-gradient(circle, #ffffff 0%, #00D4FF 50%, #0099cc 100%);
          animation: twinkle 2s ease-in-out infinite, glow 2s ease-in-out infinite;
        }
      `}</style>

      {/* Background Image - desktop (unchanged per-language logic) */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat hidden md:block"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Background Image - mobile only: always uses the JP background (EN mobile matches JP) */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat block md:hidden"
        style={{ backgroundImage: `url(${heroBgJp})` }}
      />

      {/* Purple overlay */}
      <div className="absolute inset-0 bg-[hsl(248,38%,16%)]/70" />

      {/* City markers - Shining Stars (behind text layer) */}
      {language !== "jp" && cities.map((city) => (
        <div
          key={city.name}
          className="absolute z-[5] pointer-events-none hidden md:block"
          style={{ top: city.top, left: city.left }}
        >
          <div
            className="star w-3 h-3 rounded-full"
            style={{ animationDelay: city.delay }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto flex min-h-screen flex-col items-center text-center pt-[38vh] md:pt-[35vh] pb-[8vh]">
          <h1 className="font-display font-light leading-none animate-fade-up cursor-default w-full text-center">
            {language === "jp" ? (
              <>
                <span
                  className={`block text-gold text-[1.8rem] sm:text-[2.2rem] md:text-[3.2rem] lg:text-[3.8rem] transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    }`}
                  style={{
                    textShadow: "0 0 10px rgba(201, 168, 76, 0.45)",
                  }}
                >
                  {rotatingWords[currentIndex]}
                </span>
                <span className="block text-gold text-[1.6rem] sm:text-[2rem] md:text-[2.8rem] lg:text-[3rem] mt-2">
                  のパートナー
                </span>
              </>
            ) : (
              <>
                <span className="block text-gold text-[1.6rem] sm:text-[2rem] md:text-[2.8rem] lg:text-[3rem]">
                  Partners for
                </span>
                <span
                  className={`block text-gold text-[1.8rem] sm:text-[2.2rem] md:text-[3.2rem] lg:text-[3.8rem] mt-2 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    }`}
                  style={{
                    textShadow: "0 0 10px rgba(201, 168, 76, 0.45)",
                  }}
                >
                  {rotatingWords[currentIndex]}
                </span>
              </>
            )}
          </h1>

          <div className="mt-auto mb-[4vh]">
            <p className="pt-6 md:pt-8 text-sm md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up delay-200 transition-colors duration-300 hover:text-primary cursor-default">
              {t("hero.subheadline")}
            </p>

            {/* CTA Button */}
            <div className="mt-12 md:mt-20 flex items-center justify-center animate-fade-up delay-300">
              <Button
                variant="heroOutline"
                size="xl"
                className="group text-base md:text-xl px-6 py-3 md:px-8 md:py-4"
                onClick={() => {
                  window.dispatchEvent(new Event("open-nav-menu"));
                }}
              >
                {t("hero.learnMore")}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};