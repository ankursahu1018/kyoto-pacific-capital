import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { language } = useLanguage();
  const isJp = language === "jp";

  return (
    <Layout>
      <SEO
        title={isJp
          ? "京都パシフィックキャピタル | 成長と変革のためのプライベートエクイティ"
          : "Kyoto Pacific Capital | Private Equity for Growth & Transformation"}
        description={isJp
          ? "私たちはビジョナリーなリーダーとパートナーシップを組み、画期的なアイデアを卓越したグローバル企業へとスケールさせます。共同起業家として、長期的な同志として、共に歩みます。"
          : "We partner with visionary leaders to scale breakthrough ideas into preeminent global companies working side by side as co-entrepreneurs and long-term allies."}
        keywords="private equity Japan, PE firm India, growth capital Asia, digital transformation investment"
        canonicalUrl="https://www.kyotopacific.com"
        ogImage="https://www.kyotopacific.com/favicon.png"
        includeFAQSchema={true}
      />
      <HeroSection />
    </Layout>
  );
};

export default Index;
