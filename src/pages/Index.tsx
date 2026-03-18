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
          : "Partners for Growth, Transformation, and the Long Term | Kyoto Pacific Capital"}
        description={isJp
          ? "私たちはビジョナリーなリーダーとパートナーシップを組み、画期的なアイデアを卓越したグローバル企業へとスケールさせます。共同起業家として、長期的な同志として、共に歩みます。"
          : "Kyoto Pacific Capital partners with founders, owners, and management teams across Asia, Europe, and the United States, combining long-term capital with active co-entrepreneurship."}
        canonicalUrl="https://www.kyotopacific.com"
        ogImage="https://www.kyotopacific.com/favicon.png"
        includeFAQSchema={true}
      />
      <HeroSection />
    </Layout>
  );
};

export default Index;
