import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import usjLogo from "@/assets/logo-UniversalStudiosJapan.png";
import renewPowerLogo from "@/assets/logo-renew-power.png";

type CaseStudyMetric = {
  label: string;
  jpLabel: string;
  before: string;
  jpBefore: string;
  after: string;
  jpAfter: string;
};

type CaseStudyOverviewItem = {
  label: string;
  jpLabel: string;
  value: string;
  jpValue: string;
};

type CaseStudy = {
  id: string;
  name: string;
  jpName: string;
  tagline: string;
  jpTagline: string;
  logo: string;
  overview: CaseStudyOverviewItem[];
  thesis: string;
  jpThesis: string;
  metrics: CaseStudyMetric[];
  valueSummary: string;
  jpValueSummary: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: "usj",
    name: "Universal Studios Japan",
    jpName: "ユニバーサル・スタジオ・ジャパン",
    tagline: "Transformation of a Theme Park leading to one of the most successful PE investments globally",
    jpTagline: "テーマパークの変革 — 世界で最も成功したPE投資のひとつ",
    logo: usjLogo,
    overview: [
      { label: "Investment Period", jpLabel: "投資期間", value: "Aug 2005 – May 2017", jpValue: "2005年8月～2017年5月" },
      { label: "Geography | Industry", jpLabel: "地域｜業種", value: "Japan | Theme Parks", jpValue: "日本｜テーマパーク" },
      { label: "Strategy", jpLabel: "戦略", value: "Transformation / Growth", jpValue: "変革／成長" },
      { label: "Role", jpLabel: "役割", value: "Lead Investor", jpValue: "リードインベスター" },
      { label: "Investment", jpLabel: "投資額", value: "US$236mm", jpValue: "2億3,600万米ドル" },
      { label: "Ownership", jpLabel: "持分比率", value: "60%", jpValue: "60%" },
      { label: "Exit", jpLabel: "エグジット", value: "US$3.5bn / 15.0x MOIC", jpValue: "35億米ドル / 15.0倍 MOIC" },
    ],
    thesis: "Unique and hard-to-replicate asset with over $2.5 billion in initial capex, situated in the Kansai area with a population exceeding 30 million. A creative structure enabled control investment in a national asset at an attractive valuation, with significant room for operational improvement. The thesis centered on localized marketing focused on women and young families, combined with optimized capex to accelerate growth and drive repeat attendance.",
    jpThesis: "初期設備投資額25億ドル超の唯一無二かつ再現困難な資産。人口3,000万人超の関西圏に位置し、創造的なストラクチャーにより、国家的資産への支配権投資を魅力的なバリュエーションで実現。女性や若いファミリー層に焦点を当てたローカライズされたマーケティングと、最適化された設備投資による成長加速およびリピート率向上を投資テーゼの中核とした。",
    metrics: [
      { label: "Revenue", jpLabel: "売上", before: "$625M", jpBefore: "6.25億ドル", after: "$1,556M", jpAfter: "15.56億ドル" },
      { label: "EBITDA", jpLabel: "EBITDA", before: "$175M", jpBefore: "1.75億ドル", after: "$648M", jpAfter: "6.48億ドル" },
      { label: "Visitors", jpLabel: "来場者数", before: "8M", jpBefore: "800万人", after: "15M", jpAfter: "1,500万人" },
    ],
    valueSummary: "Over a 13-year partnership, Ankur served as lead director representing the majority shareholder through a multi-phase transformation. The team recruited key management, led the $450M+ Harry Potter investment, negotiated with NBC Universal and Warner Brothers, and drove all major strategic and operational decisions. The exit to Comcast at approximately $8 billion enterprise value, representing a 10x increase, created over $7 billion in total shareholder value.",
    jpValueSummary: "13年にわたるパートナーシップを通じ、アンクルは過半数株主を代表するリードディレクターとして、多段階の変革を主導。主要経営陣の採用、4億5,000万ドル超のハリー・ポッター投資の主導、NBCユニバーサルおよびワーナー・ブラザーズとの交渉、そしてすべての主要な戦略的・事業的意思決定を推進した。コムキャストへの約80億ドルのエンタープライズバリューでのエグジットは、約10倍の増加を示し、株主全体で70億ドル超の価値を創出した。",
  },
  {
    id: "renew",
    name: "ReNew Power",
    jpName: "リニュー・パワー",
    tagline: "Creation of India's largest and world's Top 10 independent Renewable Energy company",
    jpTagline: "インド最大かつ世界トップ10の独立系再生可能エネルギー企業の創出",
    logo: renewPowerLogo,
    overview: [
      { label: "Investment Period", jpLabel: "投資期間", value: "Sep 2011 – Present", jpValue: "2011年9月～現在" },
      { label: "Geography | Industry", jpLabel: "地域｜業種", value: "India | Energy", jpValue: "インド｜エネルギー" },
      { label: "Strategy", jpLabel: "戦略", value: "Platform Build-up", jpValue: "プラットフォーム構築" },
      { label: "Role", jpLabel: "役割", value: "Lead Investor", jpValue: "リードインベスター" },
      { label: "CEO", jpLabel: "CEO", value: "Sumant Sinha", jpValue: "スマント・シンハ" },
      { label: "Investment", jpLabel: "投資額", value: "US$469mm", jpValue: "4億6,900万米ドル" },
      { label: "Ownership", jpLabel: "持分比率", value: "46%", jpValue: "46%" },
      { label: "Current Mark", jpLabel: "現在の評価額", value: "~US$2bn / 4.3x MOIC", jpValue: "約20億米ドル / 4.3倍 MOIC" },
    ],
    thesis: "Backed Sumant Sinha, former COO of Suzlon (the world's third largest wind turbine manufacturer), to start and build out a renewable energy platform in India. Favorable industry dynamics with untapped latent demand, a peak power deficit of 10 to 12 percent, and government policy initiatives promoting renewable energy growth created an attractive opportunity. The strategy centered on differentiated execution with a clear focus on profitability, risk management, and a clean capital structure, combined with an attractive near-term pipeline of projects at a time when renewable energy was approaching grid parity.",
    jpThesis: "世界第3位の風力タービンメーカーであるスズロンの元COO、スマント・シンハ氏を支援し、インドにおける再生可能エネルギープラットフォームの構築を開始。未開拓の潜在需要、10～12%のピーク電力不足、再生可能エネルギーの成長を促進する政府の政策イニシアチブという有利な業界環境が魅力的な投資機会を創出した。収益性、リスク管理、健全な資本構造に明確に焦点を当てた差別化された実行戦略と、再生可能エネルギーがグリッドパリティに近づく時期における魅力的な短期パイプラインを中核とした。",
    metrics: [
      { label: "Revenue", jpLabel: "売上", before: "$0", jpBefore: "0", after: "$824M", jpAfter: "8.24億ドル" },
      { label: "EBITDA", jpLabel: "EBITDA", before: "$0", jpBefore: "0", after: "$969M", jpAfter: "9.69億ドル" },
      { label: "Capacity", jpLabel: "発電容量", before: "0 GW", jpBefore: "0 GW", after: "10 GW", jpAfter: "10 GW" },
    ],
    valueSummary: "Built from three employees to over 500 staff, growing ReNew into India's largest independent power producer with approximately 10 GW in contracted renewable energy capacity. Established global standard governance structures and policies covering compliance, FCPA, risk management, vendor selection, and investment committee processes. Raised approximately $1 billion in equity from world-class investors including CPPIB, ADIA, JERA, and ADB at accretive valuations, plus over $5 billion in debt financing. Led major acquisitions including the $1 billion plus purchase of Ostro Energy, one of the largest M&A transactions in India's renewable sector. Successfully listed on NASDAQ with equity value exceeding $4 billion.",
    jpValueSummary: "従業員3名から500名超の組織へと成長させ、リニュー・パワーをインド最大の独立系発電事業者に育成し、再生可能エネルギーの契約容量は約10GWに達した。コンプライアンス、FCPA、リスク管理、ベンダー選定、投資委員会プロセスを網羅するグローバル基準のガバナンス体制と方針を構築。CPPIB、ADIA、JERA、ADBなど世界的な投資家から約10億ドルの株式を有利なバリュエーションで調達し、50億ドル超の債務ファイナンスを実施。インドの再生可能エネルギーセクター最大級のM&Aの一つであるオストロ・エナジーの10億ドル超の買収を主導。NASDAQに上場し、株式価値は40億ドルを超えた。",
  },
];

const CaseStudies = () => {
  const { language } = useLanguage();
  const isJp = language === "jp";
  const [expandedCaseStudy, setExpandedCaseStudy] = useState<string | null>(null);

  return (
    <Layout>
      <SEO
        title={isJp ? "ケーススタディ | 京都パシフィックキャピタル" : "Case Studies | Kyoto Pacific Capital"}
        description={isJp ? "主要投資の詳細分析" : "Deep dives into select investments across our portfolio."}
        canonicalUrl="https://www.kyotopacific.com/case-studies"
      />

      <section className="pb-24 min-h-screen pt-32 md:pt-36">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto pt-20 md:pt-24">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-light text-gold mb-3 animate-fade-up">
                {isJp ? "ケーススタディ" : "Case Studies"}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground animate-fade-up delay-100">
                {isJp ? "主要投資の詳細分析" : "Deep dives into select investments"}
              </p>
            </div>

            <div className="space-y-6">
              {caseStudies.map((cs) => (
                <div key={cs.id}>
                  <button
                    type="button"
                    aria-label={isJp ? `${cs.jpName}のケーススタディを${expandedCaseStudy === cs.id ? "閉じる" : "開く"}` : `${expandedCaseStudy === cs.id ? "Collapse" : "Expand"} ${cs.name} case study`}
                    aria-expanded={expandedCaseStudy === cs.id}
                    className={`w-full text-left rounded-3xl border border-white/10 bg-card/60 p-8 md:p-10 shadow-silk transition-all duration-300 cursor-pointer ${expandedCaseStudy === cs.id ? "border-gold/20" : ""}`}
                    onClick={() => setExpandedCaseStudy(expandedCaseStudy === cs.id ? null : cs.id)}
                  >
                    <div className="flex items-center gap-6">
                      <div className="group relative w-36 md:w-40 flex-shrink-0">
                        <div className="h-20 md:h-24 transition-transform duration-300 group-hover:scale-110">
                          <img
                            src={cs.logo}
                            alt={`${isJp ? cs.jpName : cs.name} logo`}
                            loading="lazy"
                            className="h-full w-full object-contain"
                          />
                        </div>
                      </div>
                      <div className="min-w-0">
                        <p className="text-lg md:text-xl font-display font-light text-gold mb-1">
                          {isJp ? cs.jpName : cs.name}
                        </p>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {isJp ? cs.jpTagline : cs.tagline}
                        </p>
                      </div>
                    </div>
                  </button>

                  {/* Expanded Detail Panel */}
                  {expandedCaseStudy === cs.id && (
                    <div
                      className="mt-4 rounded-3xl border border-white/10 bg-card/80 p-8 md:p-10"
                      style={{ animation: "casePanelIn 400ms ease-out both" }}
                    >
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl md:text-2xl font-display font-light text-gold">
                          {isJp ? cs.jpName : cs.name}
                        </h3>
                        <button
                          onClick={() => setExpandedCaseStudy(null)}
                          aria-label={isJp ? `${cs.jpName}のケーススタディを閉じる` : `Close ${cs.name} case study`}
                          className="text-muted-foreground hover:text-gold transition-colors duration-300 text-sm"
                        >
                          {isJp ? "閉じる ✕" : "Close ✕"}
                        </button>
                      </div>

                      {/* Investment Overview */}
                      <h4 className="text-lg font-display font-light text-gold mb-4">
                        {isJp ? "投資概要" : "Investment Overview"}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-6">
                        {cs.overview.map((item) => (
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

                      <div className="gold-line mb-6" />

                      {/* Investment Thesis */}
                      <h4 className="text-lg font-display font-light text-gold mb-4">
                        {isJp ? "投資テーゼ" : "Investment Thesis"}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {isJp ? cs.jpThesis : cs.thesis}
                      </p>

                      <div className="gold-line mb-6" />

                      {/* Value Creation */}
                      <h4 className="text-lg font-display font-light text-gold mb-4">
                        {isJp ? "価値創造" : "Value Creation"}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        {cs.metrics.map((metric) => (
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
                      <p className="text-muted-foreground leading-relaxed">
                        {isJp ? cs.jpValueSummary : cs.valueSummary}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
