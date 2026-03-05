import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface StatCardProps {
  value: string;
  label: string;
  delay: number;
}

const StatCard = ({ value, label, delay }: StatCardProps) => {
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
  }, [isVisible, value, delay]);

  return (
    <div
      ref={ref}
      className="glass-card h-48 md:h-56 rounded-3xl flex flex-col items-center justify-center p-6 bg-card shadow-none transition-shadow duration-300 hover:shadow-gold-glow-lg hover:!transform-none hover:!border-white/10"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-gold mb-3">
        {displayValue}
      </div>
      <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider text-center">
        {label}
      </div>
    </div>
  );
};

export const StatsBar = () => {
  const { t } = useLanguage();
  
  const stats = [
    { 
      value: "$21B+", 
      label: String(t("home.stats.valueCreated")),
    },
    { 
      value: "20+", 
      label: String(t("home.stats.yearsExperience")),
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
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
