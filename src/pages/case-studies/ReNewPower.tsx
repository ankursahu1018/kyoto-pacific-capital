import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import renewPowerLogo from "@/assets/logo-renew-power.png";

const overview = [
  { label: "Investment Period", jpLabel: "投資期間", value: "Sep 2011 – Present", jpValue: "2011年9月～現在" },
  { label: "Geography | Industry", jpLabel: "地域｜業種", value: "India | Energy", jpValue: "インド｜エネルギー" },
  { label: "Strategy", jpLabel: "戦略", value: "Platform Build-up", jpValue: "プラットフォーム構築" },
  { label: "Role", jpLabel: "役割", value: "Lead Investor", jpValue: "リードインベスター" },
  { label: "CEO", jpLabel: "CEO", value: "Sumant Sinha", jpValue: "スマント・シンハ" },
  { label: "Investment", jpLabel: "投資額", value: "US$469mm", jpValue: "4億6,900万米ドル" },
  { label: "Ownership", jpLabel: "持分比率", value: "46%", jpValue: "46%" },
  { label: "Current Mark", jpLabel: "現在の評価額", value: "~US$2bn / 4.3x MOIC", jpValue: "約20億米ドル / 4.3倍 MOIC" },
];

const thesis = "Backed Sumant Sinha, former COO of Suzlon (the world's third largest wind turbine manufacturer), to start and build out a renewable energy platform in India. Favorable industry dynamics with untapped latent demand, a peak power deficit of 10 to 12 percent, and government policy initiatives promoting renewable energy growth created an attractive opportunity. The strategy centered on differentiated execution with a clear focus on profitability, risk management, and a clean capital structure, combined with an attractive near-term pipeline of projects at a time when renewable energy was approaching grid parity.";
const jpThesis = "世界第3位の風力タービンメーカーであるスズロンの元COO、スマント・シンハ氏を支援し、インドにおける再生可能エネルギープラットフォームの構築を開始。未開拓の潜在需要、10～12%のピーク電力不足、再生可能エネルギーの成長を促進する政府の政策イニシアチブという有利な業界環境が魅力的な投資機会を創出した。収益性、リスク管理、健全な資本構造に明確に焦点を当てた差別化された実行戦略と、再生可能エネルギーがグリッドパリティに近づく時期における魅力的な短期パイプラインを中核とした。";

const metrics = [
  { label: "Revenue", jpLabel: "売上", before: "$0", jpBefore: "0", after: "$824M", jpAfter: "8.24億ドル" },
  { label: "EBITDA", jpLabel: "EBITDA", before: "$0", jpBefore: "0", after: "$969M", jpAfter: "9.69億ドル" },
  { label: "Capacity", jpLabel: "発電容量", before: "0 GW", jpBefore: "0 GW", after: "10 GW", jpAfter: "10 GW" },
];

const valueSummary = "Built from three employees to over 500 staff, growing ReNew into India's largest independent power producer with approximately 10 GW in contracted renewable energy capacity. Established global standard governance structures and policies covering compliance, FCPA, risk management, vendor selection, and investment committee processes. Raised approximately $1 billion in equity from world-class investors including CPPIB, ADIA, JERA, and ADB at accretive valuations, plus over $5 billion in debt financing. Led major acquisitions including the $1 billion plus purchase of Ostro Energy, one of the largest M&A transactions in India's renewable sector. Successfully listed on NASDAQ with equity value exceeding $4 billion.";
const jpValueSummary = "従業員3名から500名超の組織へと成長させ、リニュー・パワーをインド最大の独立系発電事業者に育成し、再生可能エネルギーの契約容量は約10GWに達した。コンプライアンス、FCPA、リスク管理、ベンダー選定、投資委員会プロセスを網羅するグローバル基準のガバナンス体制と方針を構築。CPPIB、ADIA、JERA、ADBなど世界的な投資家から約10億ドルの株式を有利なバリュエーションで調達し、50億ドル超の債務ファイナンスを実施。インドの再生可能エネルギーセクター最大級のM&Aの一つであるオストロ・エナジーの10億ドル超の買収を主導。NASDAQに上場し、株式価値は40億ドルを超えた。";

const ReNewPower = () => {
  const { language } = useLanguage();
  const isJp = language === "jp";

  return (
    <Layout>
      <SEO
        title={isJp ? "リニュー・パワー | 京都パシフィックキャピタル" : "ReNew Power | Kyoto Pacific Capital"}
        description={isJp ? "インド最大かつ世界トップ10の独立系再生可能エネルギー企業の創出" : "Creation of India's largest and world's Top 10 independent Renewable Energy company"}
        canonicalUrl="https://www.kyotopacific.com/case-studies/renew"
      />

      <section className="pb-24 min-h-screen pt-32 md:pt-36">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto pt-20 md:pt-24">
            {/* Logo + Heading */}
            <div className="text-center mb-12">
              <div className="mx-auto w-40 md:w-48 h-24 md:h-28 mb-6">
                <img
                  src={renewPowerLogo}
                  alt={isJp ? "リニュー・パワー ロゴ" : "ReNew Power logo"}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-light text-gold mb-3 animate-fade-up">
                {isJp ? "リニュー・パワー" : "ReNew Power"}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground animate-fade-up delay-100">
                {isJp ? "インド最大かつ世界トップ10の独立系再生可能エネルギー企業の創出" : "Creation of India's largest and world's Top 10 independent Renewable Energy company"}
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

export default ReNewPower;
