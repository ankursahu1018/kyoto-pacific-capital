import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { StatsBar } from "@/components/sections/StatsBar";
import maxIndiaLogo from "@/assets/logo-max-hospitals-india.png";
import seagateLogo from "@/assets/logo-seagate.png";
import usjLogo from "@/assets/logo-UniversalStudiosJapan.png";
import mahindraLogo from "@/assets/logo-mahindra.png";
import sanyoLogo from "@/assets/logo-sanyo.png";
import uNextLogo from "@/assets/logo-unext.png";
import fujitaLogo from "@/assets/logo-fujita.png";
import bplMedicalLogo from "@/assets/logo-bplmedical.png";
import segaSammyLogo from "@/assets/logo-seggasemmy.png";
import emobileLogo from "@/assets/logo-emobile.png";
import renewPowerLogo from "@/assets/logo-renew-power.png";
import jreLogo from "@/assets/logo-japan-renewable-energy.png";
import goodHostSpacesLogo from "@/assets/logo-good-host-spaces.png";
import iwaLogo from "@/assets/logo-iwa-sake.png";
import netScalerLogo from "@/assets/logo-netscaler.png";
import antuitLogo from "@/assets/logo-antuit.png";
import cyfirmaLogo from "@/assets/logo-cyfirma.png";
import recruitLogo from "@/assets/logo-recruit.png";
import mercariLogo from "@/assets/logo-mercari.png";
import airweaveLogo from "@/assets/logo-airweave.png";
import familiarLogo from "@/assets/logo-familiar.png";
import juchheimLogo from "@/assets/logo-juchheim.png";

type Country = "Japan" | "India" | "United States" | "Europe";

type Company = {
  name: string;
  jpName: string;
  country: Country;
  current?: boolean;
  logo?: string;
  cardClassName?: string;
};

type Section = {
  title: string;
  jpTitle: string;
  description: string;
  jpDescription: string;
  companies: Company[];
};

const countryTextClass: Record<Country, string> = {
  Japan: "text-white",
  India: "text-[#E07020]",
  "United States": "text-[#4A90D9]",
  Europe: "text-[#4CAF50]",
};

const sections: Section[] = [
  {
    title: "Large Scale Transformations",
    jpTitle: "大規模トランスフォーメーション",
    description: "Business revitalizations, turnarounds, or strategic growth acceleration",
    jpDescription: "事業再生、ターンアラウンド、戦略的成長加速",
    companies: [
      {
        name: "Seagate",
        jpName: "シーゲイト",
        country: "United States",
        logo: seagateLogo,
        cardClassName: "bg-black",
      },
      {
        name: "Universal Studios Japan",
        jpName: "ユニバーサル・スタジオ・ジャパン",
        country: "Japan",
        logo: usjLogo,
        cardClassName: "bg-[#0B3D91]",
      },
      {
        name: "Sanyo Electric",
        jpName: "三洋電機",
        country: "Japan",
        logo: sanyoLogo,
        cardClassName: "bg-white",
      },
      {
        name: "U-NEXT",
        jpName: "U-NEXT",
        country: "Japan",
        logo: uNextLogo,
        cardClassName: "bg-black",
      },
      {
        name: "Fujita",
        jpName: "フジタ",
        country: "Japan",
        logo: fujitaLogo,
        cardClassName: "bg-white",
      },
      {
        name: "Mahindra",
        jpName: "マヒンドラ",
        country: "India",
        logo: mahindraLogo,
        cardClassName: "bg-white",
      },
      {
        name: "Max India",
        jpName: "マックス・インディア",
        country: "India",
        logo: maxIndiaLogo,
        cardClassName: "bg-[#1a2744]",
      },
      {
        name: "BPL Medical",
        jpName: "BPLメディカル",
        country: "India",
        logo: bplMedicalLogo,
        cardClassName: "bg-white",
      },
      {
        name: "Sega Sammy Holdings",
        jpName: "セガサミーホールディングス",
        country: "Japan",
        current: true,
        logo: segaSammyLogo,
        cardClassName: "bg-white",
      },
    ],
  },
  {
    title: "Greenfield Ventures",
    jpTitle: "グリーンフィールド・ベンチャー",
    description: "Built from scratch or near-zero base",
    jpDescription: "ゼロまたはゼロに近い状態からの立ち上げ",
    companies: [
      {
        name: "eAccess / eMobile",
        jpName: "イー・アクセス / イー・モバイル",
        country: "Japan",
        logo: emobileLogo,
        cardClassName: "bg-white",
      },
      {
        name: "ReNew Power",
        jpName: "リニュー・パワー",
        country: "India",
        logo: renewPowerLogo,
        cardClassName: "bg-white",
      },
      {
        name: "Japan Renewable Energy",
        jpName: "ジャパン・リニューアブル・エナジー",
        country: "Japan",
        logo: jreLogo,
        cardClassName: "bg-white",
      },
      {
        name: "Good Host Spaces",
        jpName: "グッドホストスペーシズ",
        country: "India",
        logo: goodHostSpacesLogo,
        cardClassName: "bg-white",
      },
      {
        name: "Cyfirma",
        jpName: "サイファーマ",
        country: "Japan",
        logo: cyfirmaLogo,
        cardClassName: "bg-[#0A0A1A]",
      },
      {
        name: "Iwa",
        jpName: "IWA",
        country: "Japan",
        current: true,
        logo: iwaLogo,
        cardClassName: "bg-[#F5F0E8]",
      },
    ],
  },
  {
    title: "Growth Partnerships",
    jpTitle: "グロース・パートナーシップ",
    description:
      "Strategic venture/growth capital, regional expansion, early stage innovation",
    jpDescription: "戦略的ベンチャー・グロースキャピタル、地域展開、初期段階イノベーション",
    companies: [
      {
        name: "NetScaler",
        jpName: "ネットスケーラー",
        country: "United States",
        logo: netScalerLogo,
        cardClassName: "bg-black",
      },
      {
        name: "antuit.ai",
        jpName: "アンテュイットAI",
        country: "United States",
        logo: antuitLogo,
        cardClassName: "bg-white",
      },
      {
        name: "Cyfirma",
        jpName: "サイファーマ",
        country: "Japan",
        logo: cyfirmaLogo,
        cardClassName: "bg-[#0A0A1A]",
      },
      {
        name: "Recruit",
        jpName: "リクルート",
        country: "Japan",
        logo: recruitLogo,
        cardClassName: "bg-white",
      },
      { name: "Mercari", jpName: "メルカリ", country: "Japan", logo: mercariLogo },
      {
        name: "Airweave",
        jpName: "エアウィーヴ",
        country: "Japan",
        current: true,
        logo: airweaveLogo,
        cardClassName: "bg-white",
      },
      {
        name: "Familiar",
        jpName: "ファミリア",
        country: "Japan",
        current: true,
        logo: familiarLogo,
      },
      {
        name: "Juchheim",
        jpName: "ユーハイム",
        country: "Japan",
        current: true,
        logo: juchheimLogo,
        cardClassName: "bg-white",
      },
    ],
  },
];

const Experience = () => {
  const { language } = useLanguage();
  const isJp = language === "jp";

  return (
    <Layout>
      <SEO
        title="Experience | Kyoto Pacific Capital"
        description="Selected investments and operating experience across leading global companies."
        canonicalUrl="https://kyotopacific.com/experience"
      />

      <section className="pb-24 min-h-screen pt-32 md:pt-36">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto pt-20 md:pt-24">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-light text-gold mb-3 animate-fade-up">
                {isJp ? "投資実績" : "Experience"}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground animate-fade-up delay-100">
                {isJp ? "主要投資先" : "Selected Investments"}
              </p>
            </div>
            <StatsBar />
            <div className="space-y-12">
              {sections.map((section) => (
                <div
                  key={section.title}
                  className="rounded-3xl border border-white/10 bg-card/60 p-8 md:p-10 shadow-silk transition-all duration-300 hover:shadow-gold-glow-lg hover:border-gold/30"
                >
                  <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-2">
                    {isJp ? section.jpTitle : section.title}
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    {isJp ? section.jpDescription : section.description}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                    {section.companies.map((company) => {
                      const paddedContainLogos = new Set([
                        "Sanyo Electric",
                        "Good Host Spaces",
                        "BPL Medical",
                        "Sega Sammy Holdings",
                        "Fujita",
                        "Iwa",
                        "antuit.ai",
                        "U-NEXT",
                        "ReNew Power",
                      ]);
                      const tightPaddingLogos = new Set(["Cyfirma"]);
                      const containLogos = new Set([
                        "eAccess / eMobile",
                        "Japan Renewable Energy",
                      ]);
                      const isTightPadding = tightPaddingLogos.has(company.name);
                      const isPaddedContain = paddedContainLogos.has(company.name) || isTightPadding;
                      const isContainLogo = containLogos.has(company.name);
                      const isRenewPower = company.name === "ReNew Power";

                      return (
                        <div key={`${section.title}-${company.name}`} className="space-y-3 text-center">
                          <div className="group relative mx-auto w-36 md:w-40">
                            {company.logo ? (
                              <>
                                <div className="h-20 md:h-24 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-gold-glow">
                                  <img
                                    src={company.logo}
                                    alt={`${isJp ? company.jpName : company.name} logo`}
                                    loading="lazy"
                                    className={`h-full w-full object-contain ${isRenewPower
                                      ? "p-[6px]"
                                      : isTightPadding
                                        ? "p-1"
                                        : isPaddedContain || isContainLogo
                                          ? "p-2"
                                          : ""
                                      }`}
                                  />
                                </div>
                              </>
                            ) : (
                              <div className="h-20 md:h-24 flex items-center justify-center">
                                <span className={`text-base ${countryTextClass[company.country]}`}>
                                  {isJp ? company.jpName : company.name}
                                  {company.current ? " ★" : ""}
                                </span>
                              </div>
                            )}
                          </div>
                          {company.logo && (
                            <p className={`text-sm ${countryTextClass[company.country]}`}>
                              {isJp ? company.jpName : company.name}
                              {company.current ? " ★" : ""}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}

              <div className="text-sm text-muted-foreground space-y-2">
                <p>{isJp ? "★ = 現在の投資先" : "★ = Current investment"}</p>
                <p>
                  {isJp ? (
                    <>
                      テキストの色は国を示します：
                      <span className="text-white"> 日本</span>、
                      <span className="text-[#E07020]"> インド</span>、
                      <span className="text-[#4A90D9]"> 米国</span>、
                      <span className="text-[#4CAF50]"> 欧州</span>
                    </>
                  ) : (
                    <>
                      Color indicates country:
                      <span className="text-white"> Japan</span>,
                      <span className="text-[#E07020]"> India</span>,
                      <span className="text-[#4A90D9]"> United States</span>,
                      <span className="text-[#4CAF50]"> Europe</span>
                    </>
                  )}
                </p>
                <p className="transition-colors duration-300 hover:text-gold">
                  {isJp
                    ? "ゴールドマン・サックスまたはKPCのリード投資担当、個人投資家、取締役、戦略アドバイザーとしてアンクール・サフが関与した投資先を含みます。"
                    : "Includes investments where Ankur Sahu served as lead investor representative for Goldman Sachs or KPC, personal investor, board director, or strategic advisor."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;



