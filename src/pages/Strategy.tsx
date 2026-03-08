import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { GlassCard } from "@/components/ui/GlassCard";
import { useLanguage } from "@/contexts/LanguageContext";

const Strategy = () => {
  const { language } = useLanguage();
  const isJp = language === "jp";

  const whatWeLookFor = isJp
    ? [
      "深い専門知識と明確な成長ビジョンを持つ創業者・経営チーム",
      "新製品投入、規模拡大、新市場参入、事業変革など、転換期にある企業",
      "明確な市場ニーズ、独自の競争優位性、成長余地のある製品・サービス",
      "日本、インド、米国、欧州を中心としたグローバルな事業展開の可能性",
      "業界を代表する卓越した企業を構築するポテンシャル",
    ]
    : [
      "Founders/Management teams with deep domain expertise and a clear vision for growth",
      "Businesses at an inflection point: new product introductions, scaling, entering new markets, or undergoing transformation",
      "Products and services with demonstrated market demand and defensible competitive position",
      "Opportunities with relevance across our core geographies: Japan, India, the United States, and Europe",
      "Potential to build preeminent companies",
    ];

  const howWeWork = isJp
    ? [
      "アイデア段階から事業拡大まで投資し、初回投資後も長期にわたり関与",
      "経営チームと「共同創業者」として直接協働し、受動的・純粋な財務投資家ではなく、アクティブなパートナーとして関与",
      "資本提供に加え、戦略立案、財務規律、人材獲得、グローバルネットワーク、リスク管理といった事業運営能力を提供",
      "豊富な経験を持つエグゼクティブや機関投資家のネットワークを活用し、ポートフォリオ企業の事業運営・資金調達ニーズを支援",
      "長期的視点、価値観の共有、創業者ファーストのアプローチを徹底",
    ]
    : [
      "We take a long-term view. Our partnerships often span a decade or more.",
      "We work directly with management teams as active partners or 'co-entrepreneurs', not passive or pure financial investors",
      "We bring operating capabilities alongside capital: strategic planning, financial discipline, talent acquisition, global networks, and risk management",
      "We draw on a network of experienced executives and institutional partners to support portfolio companies' operational or capital needs",
      "We focus on sustainable value creation through disciplined execution, not financial engineering",
    ];

  const sectors = isJp
    ? [
      {
        title: "消費財",
        description: "グローバル展開の可能性を持つブランド",
      },
      {
        title: "テクノロジー",
        description: "半導体、AI、デジタルインフラ、テクノロジー対応ビジネスサービス",
      },
      {
        title: "ヘルスケア",
        description: "医療機器、医療サービス、ウェルネス",
      },
      {
        title: "再生可能エネルギー",
        description: "エネルギー転換および関連インフラ",
      },
      {
        title: "ソーシャルインパクト",
        description: "社会的意義と収益性、スケーラビリティを兼ね備えた事業",
      },
    ]
    : [
      {
        title: "Consumer",
        description: "Consumer brands with regional strength and global scalability",
      },
      {
        title: "Technology & Business Services",
        description: "Semiconductors, AI, digital infrastructure, and technology-enabled business services",
      },
      {
        title: "Healthcare",
        description: "Medical technology, healthcare services, and life sciences",
      },
      {
        title: "Renewables",
        description: "Clean energy, energy transition, and enabling infrastructure",
      },
      {
        title: "Social Impact",
        description: "Commercially viable businesses addressing social needs at scale",
      },
    ];

  return (
    <Layout>
      <SEO
        title="Our Strategy | Kyoto Pacific Capital"
        description="We back exceptional founders building global businesses with flexible capital, strategic insight, and hands-on partnership."
        canonicalUrl="https://kyotopacific.com/strategy"
      />

      <section className="pb-24 min-h-screen pt-32 md:pt-36">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-light text-gold mb-4 animate-fade-up">
              {isJp ? "投資戦略" : "Our Strategy"}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-up delay-100">
              {isJp
                ? "ビジョンと情熱を持つリーダー、優れたプロダクトマーケットフィット、そしてグローバルな成長可能性を備えた企業に投資し、資本、事業運営の経験、戦略的知見を提供して長期的な成長を加速させます。"
                : "We invest in businesses with visionary and passionate leaders, strong product market fit and global potential, providing capital, operating experience, and strategic insights to accelerate long-term growth."}
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* Section 1 */}
            <GlassCard className="p-8 lg:p-12 animate-fade-up">
              <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-6">
                {isJp ? "投資基準" : "What We Look For"}
              </h2>
              <ul className="space-y-4">
                {whatWeLookFor.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 text-xl text-muted-foreground leading-relaxed"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-gold shadow-gold-glow flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            {/* Section 2 */}
            <GlassCard className="p-8 lg:p-12 animate-fade-up delay-100">
              <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-6">
                {isJp ? "投資アプローチ" : "How We Work"}
              </h2>
              <ul className="space-y-4">
                {howWeWork.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 text-xl text-muted-foreground leading-relaxed"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-gold shadow-gold-glow flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            {/* Section 3 */}
            <GlassCard className="p-8 lg:p-12 animate-fade-up delay-200">
              <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-8">
                {isJp ? "注力セクター" : "Sectors We Focus On"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sectors.map((sector) => (
                  <div
                    key={sector.title}
                    className="rounded-xl border border-gold/15 bg-card/40 p-6 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(197,165,90,0.2)]">
                    <h3 className="text-lg font-display font-light text-gold mb-4">
                      {sector.title}
                    </h3>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      {sector.description}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section >
    </Layout >
  );
};

export default Strategy;
