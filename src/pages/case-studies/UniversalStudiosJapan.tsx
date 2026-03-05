import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import usjLogo from "@/assets/logo-UniversalStudiosJapan.png";

const overview = [
  { label: "Investment Period", jpLabel: "投資期間", value: "Aug 2005 – May 2017", jpValue: "2005年8月～2017年5月" },
  { label: "Geography | Industry", jpLabel: "地域｜業種", value: "Japan | Theme Parks", jpValue: "日本｜テーマパーク" },
  { label: "Strategy", jpLabel: "戦略", value: "Transformation / Growth", jpValue: "変革／成長" },
  { label: "Role", jpLabel: "役割", value: "Lead Investor", jpValue: "リードインベスター" },
  { label: "Investment", jpLabel: "投資額", value: "US$236mm", jpValue: "2億3,600万米ドル" },
  { label: "Ownership", jpLabel: "持分比率", value: "60%", jpValue: "60%" },
  { label: "Exit", jpLabel: "エグジット", value: "US$3.5bn / 15.0x MOIC", jpValue: "35億米ドル / 15.0倍 MOIC" },
];

const thesis = "Unique and hard-to-replicate asset with over $2.5 billion in initial capex, situated in the Kansai area with a population exceeding 30 million. A creative structure enabled control investment in a national asset at an attractive valuation, with significant room for operational improvement. The thesis centered on localized marketing focused on women and young families, combined with optimized capex to accelerate growth and drive repeat attendance.";
const jpThesis = "初期設備投資額25億ドル超の唯一無二かつ再現困難な資産。人口3,000万人超の関西圏に位置し、創造的なストラクチャーにより、国家的資産への支配権投資を魅力的なバリュエーションで実現。女性や若いファミリー層に焦点を当てたローカライズされたマーケティングと、最適化された設備投資による成長加速およびリピート率向上を投資テーゼの中核とした。";

const metrics = [
  { label: "Revenue", jpLabel: "売上", before: "$625M", jpBefore: "6.25億ドル", after: "$1,556M", jpAfter: "15.56億ドル" },
  { label: "EBITDA", jpLabel: "EBITDA", before: "$175M", jpBefore: "1.75億ドル", after: "$648M", jpAfter: "6.48億ドル" },
  { label: "Visitors", jpLabel: "来場者数", before: "8M", jpBefore: "800万人", after: "15M", jpAfter: "1,500万人" },
];

const valueSummary = "Over a 13-year partnership, Ankur served as lead director representing the majority shareholder through a multi-phase transformation. The team recruited key management, led the $450M+ Harry Potter investment, negotiated with NBC Universal and Warner Brothers, and drove all major strategic and operational decisions. The exit to Comcast at approximately $8 billion enterprise value, representing a 10x increase, created over $7 billion in total shareholder value.";
const jpValueSummary = "13年にわたるパートナーシップを通じ、アンクルは過半数株主を代表するリードディレクターとして、多段階の変革を主導。主要経営陣の採用、4億5,000万ドル超のハリー・ポッター投資の主導、NBCユニバーサルおよびワーナー・ブラザーズとの交渉、そしてすべての主要な戦略的・事業的意思決定を推進した。コムキャストへの約80億ドルのエンタープライズバリューでのエグジットは、約10倍の増加を示し、株主全体で70億ドル超の価値を創出した。";

const UniversalStudiosJapan = () => {
  const { language } = useLanguage();
  const isJp = language === "jp";

  return (
    <Layout>
      <SEO
        title={isJp ? "ユニバーサル・スタジオ・ジャパン | 京都パシフィックキャピタル" : "Universal Studios Japan | Kyoto Pacific Capital"}
        description={isJp ? "テーマパークの変革 — 世界で最も成功したPE投資のひとつ" : "Transformation of a Theme Park leading to one of the most successful PE investments globally"}
        canonicalUrl="https://www.kyotopacific.com/case-studies/usj"
      />

      <section className="pb-24 min-h-screen pt-32 md:pt-36">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto pt-20 md:pt-24">
            {/* Logo + Heading */}
            <div className="text-center mb-12">
              <div className="mx-auto w-40 md:w-48 h-24 md:h-28 mb-6">
                <img
                  src={usjLogo}
                  alt={isJp ? "ユニバーサル・スタジオ・ジャパン ロゴ" : "Universal Studios Japan logo"}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-light text-gold mb-3 animate-fade-up">
                {isJp ? "ユニバーサル・スタジオ・ジャパン" : "Universal Studios Japan"}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground animate-fade-up delay-100">
                {isJp ? "テーマパークの変革 — 世界で最も成功したPE投資のひとつ" : "Transformation of a Theme Park leading to one of the most successful PE investments globally"}
              </p>
            </div>

            {/* Investment Overview */}
            <div className="rounded-3xl border border-white/10 bg-card/60 p-8 md:p-10 mb-8">
              <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-6">
                {isJp ? "投資概要" : "Investment Overview"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                {overview.map((item) => (
                  <div key={item.label} className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      {isJp ? item.jpLabel : item.label}
                    </span>
                    <span className="text-sm text-white font-light">
                      {isJp ? item.jpValue : item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Investment Thesis */}
            <div className="rounded-3xl border border-white/10 bg-card/60 p-8 md:p-10 mb-8">
              <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-6">
                {isJp ? "投資テーゼ" : "Investment Thesis"}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {isJp ? jpThesis : thesis}
              </p>
            </div>

            {/* Value Creation */}
            <div className="rounded-3xl border border-white/10 bg-card/60 p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-6">
                {isJp ? "価値創造" : "Value Creation"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="glass-card rounded-2xl p-5 text-center hover:!transform-none"
                  >
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      {isJp ? metric.jpLabel : metric.label}
                    </p>
                    <p className="text-sm text-muted-foreground mb-1">
                      {isJp ? metric.jpBefore : metric.before}
                    </p>
                    <p className="text-xs text-muted-foreground mb-1">→</p>
                    <p className="text-2xl md:text-3xl font-display font-light text-gold">
                      {isJp ? metric.jpAfter : metric.after}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {isJp ? jpValueSummary : valueSummary}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UniversalStudiosJapan;
