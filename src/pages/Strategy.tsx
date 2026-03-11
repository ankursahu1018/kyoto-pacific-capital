import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

const Strategy = () => {
  const { language } = useLanguage();
  const isJp = language === "jp";

  const whatWeLookFor = isJp
    ? [
      "深い専門知識と明確な成長ビジョンを持つ創業者・経営チーム",
      "転換期にある企業: 新製品投入、急速な規模拡大、新市場参入、または事業変革の最中にある企業",
      "実証された市場需要と防御可能な競争優位性を持つ製品・サービス",
      "日本、インド、米国、欧州を中心とするコア地域に関連する投資機会",
      "業界を代表する卓越した企業を構築するポテンシャル",
    ]
    : [
      "Founders and management teams with deep domain expertise and a clear vision for growth",
      "Businesses at an inflection point: new product launches, rapid scaling, new market entry, or undergoing transformation",
      "Products and services with demonstrated market demand and a defensible competitive position",
      "Opportunities with relevance across our core geographies: Japan, India, the United States, and Europe",
      "The potential to build preeminent companies",
    ];

  const howWeWork = isJp
    ? [
      "長期的視点で取り組みます: パートナーシップは10年以上に及ぶことも多くあります",
      "経営チームと「共同起業家」として直接協働し、受動的または純粋な財務投資家としてではなく、アクティブなパートナーとして関与します",
      "資本提供に加え、戦略立案、財務規律、人材獲得、グローバルネットワーク、リスク管理といった事業運営能力を提供します",
      "豊富な経験を持つエグゼクティブや機関投資家のネットワークを活用し、ポートフォリオ企業の事業運営・資金調達ニーズを支援します",
      "財務工学や短期的リターンではなく、規律ある実行を通じた持続的な価値創造に注力します",
    ]
    : [
      "We take a long-term view: our partnerships often span a decade or more",
      'We work directly with management teams as active partners or "co-entrepreneurs", not passive or purely financial investors',
      "We bring operating capabilities alongside capital: strategic planning, financial discipline, talent acquisition, global networks, and risk management",
      "We draw on a network of experienced executives and institutional partners to support portfolio companies' operational and capital needs",
      "We focus on sustainable value creation through disciplined execution, not financial engineering or short-term returns",
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
                ? "ビジョンと情熱を持つ創業者・リーダーが率い、優れたプロダクトマーケットフィットとグローバルな成長可能性を備えた企業に投資し、資本、事業運営の経験、戦略的知見を組み合わせて長期的な成長を加速させます。"
                : "We invest in businesses led by visionary founders and passionate leaders with strong product-market fit and global potential. We combine capital, operating experience, and strategic insight to accelerate long-term growth."}
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* Section 1 */}
            <div className="rounded-3xl border border-white/10 bg-card/60 p-8 md:p-10 shadow-silk transition-all duration-300 hover:shadow-gold-glow-lg hover:border-gold/30 animate-fade-up">
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
            </div>

            {/* Section 2 */}
            <div className="rounded-3xl border border-white/10 bg-card/60 p-8 md:p-10 shadow-silk transition-all duration-300 hover:shadow-gold-glow-lg hover:border-gold/30 animate-fade-up delay-100">
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
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Strategy;
