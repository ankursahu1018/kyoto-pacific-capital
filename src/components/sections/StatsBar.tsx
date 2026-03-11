import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface StatCardProps {
  value: string;
  label: string;
  delay: number;
  staticDisplay?: boolean;
}

const cardBaseStyle: React.CSSProperties = {
  background: "radial-gradient(ellipse at center, #2a2550 0%, #1a1535 100%)",
  border: "1px solid rgba(212, 168, 67, 0.12)",
  boxShadow: "0 6px 18px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.2)",
  transition: "box-shadow 0.3s ease",
};

const cardHoverShadow = "0 0 30px rgba(212, 168, 67, 0.6), 0 6px 18px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.2)";
const cardRestShadow = "0 6px 18px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.2)";

const StatCard = ({ value, label, delay, staticDisplay }: StatCardProps) => {
  const [displayValue, setDisplayValue] = useState("0");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    if (staticDisplay) {
      const timer = setTimeout(() => setDisplayValue(value), delay);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      const numMatch = value.match(/[\d.]+/);
      if (!numMatch) {
        setDisplayValue(value);
        return;
      }

      const targetNum = parseFloat(numMatch[0]);
      const prefix = value.slice(0, value.indexOf(numMatch[0]));
      const suffix = value.slice(value.indexOf(numMatch[0]) + numMatch[0].length);

      let current = 0;
      const duration = 1500;
      const steps = 60;
      const increment = targetNum / steps;
      const stepTime = duration / steps;

      const counter = setInterval(() => {
        current += increment;
        if (current >= targetNum) {
          setDisplayValue(value);
          clearInterval(counter);
        } else {
          const displayNum = targetNum >= 10
            ? Math.round(current).toString()
            : current.toFixed(1);
          setDisplayValue(`${prefix}${displayNum}${suffix}`);
        }
      }, stepTime);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, value, delay, staticDisplay]);

  return (
    <div
      ref={ref}
      className="rounded-3xl flex flex-col items-center justify-center p-4 md:p-6 h-full min-h-[130px] md:min-h-[150px]"
      style={cardBaseStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = cardHoverShadow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = cardRestShadow;
      }}
    >
      <div
        className="font-display font-light text-gold mb-2 md:mb-3 whitespace-nowrap"
        style={{ fontSize: "clamp(1.4rem, 2.8vw, 2rem)" }}
      >
        {displayValue}
      </div>
      <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider text-center">
        {label}
      </div>
    </div>
  );
};

export const StatsBar = () => {
  const { t } = useLanguage();

  const stats = [
    {
      value: "$4B+",
      label: String(t("home.stats.valueInvested")),
    },
    {
      value: "$12B+",
      label: String(t("home.stats.valueCreated")),
    },
    {
      value: "25+",
      label: String(t("home.stats.yearsExperience")),
    },
    {
      value: "Five",
      label: String(t("home.stats.billionOutcomes")),
      staticDisplay: true,
    },
    {
      value: "3.0x",
      label: String(t("home.stats.grossMoic")),
    },
    {
      value: "26%",
      label: String(t("home.stats.grossIrr")),
    },
  ];

  return (
    <div className="w-full py-8 md:py-12">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 w-full">
        {stats.map((stat, index) => (
          <StatCard
            key={stat.label}
            value={stat.value}
            label={stat.label}
            delay={index * 150}
            staticDisplay={stat.staticDisplay}
          />
        ))}
      </div>
    </div>
  );
};
