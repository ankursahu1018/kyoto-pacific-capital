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
    ? ["長期的資本形成", "戦略的成長", "グローバル展開", "技術革新"]
    : [
      "Long term Capital",
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

      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Purple overlay */}
      <div className="absolute inset-0 bg-[hsl(271,85%,15%)]/70" />

      {/* City markers - Shining Stars */}
      {language !== "jp" && cities.map((city) => (
        <div
          key={city.name}
          className="absolute z-30 pointer-events-none"
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
        <div className="max-w-5xl mx-auto flex min-h-screen flex-col items-center text-center pt-[35vh] pb-[8vh]">
          <h1 className="font-display font-light leading-none animate-fade-up cursor-default w-full text-center">
            <span className="block text-gold text-[3.5rem] md:text-[4.5rem] lg:text-[5rem]">
              {language === "jp" ? "パートナー のために" : "Partners for"}
            </span>
            <span
              className={`block text-gold text-[2.25rem] md:text-[3rem] lg:text-[3.5rem] mt-2 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
              style={{
                textShadow: "0 0 10px rgba(212, 175, 55, 0.45)",
              }}
            >
              {rotatingWords[currentIndex]}
            </span>
          </h1>

          <div className="mt-auto mb-[4vh]">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up delay-200 transition-colors duration-300 hover:text-primary cursor-default">
              {t("hero.subheadline")}
            </p>

            {/* CTA Button */}
            <div className="mt-14 flex items-center justify-center animate-fade-up delay-300">
              <Button
                variant="heroOutline"
                size="xl"
                className="group text-xl px-8 py-4"
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