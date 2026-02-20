import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { GlassCard } from "@/components/ui/GlassCard";

type InvestmentItem = {
  name: string;
  country: "Japan" | "India" | "United States" | "Europe";
  current?: boolean;
};

type Section = {
  title: string;
  subtitle: string;
  items: InvestmentItem[];
};

const countryClass: Record<InvestmentItem["country"], string> = {
  Japan: "text-white",
  India: "text-orange-400",
  "United States": "text-sky-400",
  Europe: "text-emerald-400",
};

const sections: Section[] = [
  {
    title: "Large Scale Transformations",
    subtitle: "Business revitalizations, turnarounds, or strategic growth acceleration",
    items: [
      { name: "Seagate", country: "United States" },
      { name: "Universal Studios Japan", country: "Japan" },
      { name: "Sanyo Electric", country: "Japan" },
      { name: "U-Next", country: "Japan" },
      { name: "Fujita", country: "Japan" },
      { name: "Mahindra", country: "India" },
      { name: "Max India", country: "India" },
      { name: "BPL Medical", country: "India" },
      { name: "Sega Sammy Holdings", country: "Japan", current: true },
    ],
  },
  {
    title: "Greenfield Ventures",
    subtitle: "Built from scratch or near-zero base",
    items: [
      { name: "eAccess / eMobile", country: "Japan" },
      { name: "ReNew Power", country: "India" },
      { name: "Japan Renewable Energy", country: "Japan" },
      { name: "Good Host Spaces", country: "India" },
      { name: "Cyfirma", country: "Japan" },
      { name: "Iwa", country: "Japan", current: true },
      { name: "Cravan", country: "Europe", current: true },
    ],
  },
  {
    title: "Growth Partnerships",
    subtitle:
      "Strategic venture/growth capital, regional expansion, early stage innovation",
    items: [
      { name: "NetScaler", country: "United States" },
      { name: "antuit.ai", country: "United States" },
      { name: "Cyfirma", country: "Japan" },
      { name: "Recruit", country: "Japan" },
      { name: "Mercari", country: "Japan" },
      { name: "Airweave", country: "Japan", current: true },
      { name: "Familiar", country: "Japan", current: true },
      { name: "Juchheim", country: "Japan", current: true },
    ],
  },
];

const Investments = () => {
  return (
    <Layout>
      <SEO
        title="Selected Investments | Kyoto Pacific Capital"
        description="Selected investments organized by investment type, highlighting current investments and regional focus."
        canonicalUrl="https://kyotopacific.com/investments"
      />

      <section className="pb-24 min-h-screen pt-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-light text-gold mb-4 animate-fade-up">
              Selected Investments
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-up delay-100">
              Organized by investment type. Current investments marked with ★
            </p>
          </div>

          <div className="space-y-10">
            {sections.map((section, sectionIndex) => (
              <GlassCard
                key={section.title}
                className="p-8 lg:p-12 animate-fade-up"
                style={{ animationDelay: `${sectionIndex * 100}ms` }}
              >
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-3">
                    {section.title}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {section.subtitle}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.items.map((item) => (
                    <div
                      key={`${section.title}-${item.name}`}
                      className="flex items-center gap-3 rounded-xl border border-white/5 bg-card/40 px-4 py-3"
                    >
                      <span className="h-2 w-2 rounded-full bg-gold/70 shadow-gold-glow flex-shrink-0" />
                      <span className={`text-sm md:text-base ${countryClass[item.country]}`}>
                        {item.name} {item.current ? "★" : ""}
                      </span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="mt-10 text-sm text-muted-foreground">
            <p>★ = Current investment</p>
            <p className="mt-2">
              Japan (white) • India (orange) • United States (blue) • Europe (green)
            </p>
          </div>

          <p className="mt-8 text-xs text-muted-foreground/70 max-w-4xl">
            Includes investments where Ankur Sahu served as lead investor representative
            for Goldman Sachs or KPC, personal investor, board director, or strategic advisor.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Investments;