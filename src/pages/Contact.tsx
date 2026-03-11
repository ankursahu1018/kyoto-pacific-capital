import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { language } = useLanguage();
  const isJp = language === "jp";

  return (
    <Layout>
      <SEO
        title="Contact Us | Kyoto Pacific Capital"
        description="We're selective about who we back and work with, but fully committed once we do."
        canonicalUrl="https://kyotopacific.com/contact"
      />

      <section className="pb-24 min-h-screen pt-32 md:pt-36">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-light text-gold mb-6 animate-fade-up">
              {isJp ? "お問い合わせ" : "Contact Us"}
            </h1>
            <div className="rounded-3xl border border-white/10 bg-card/60 p-8 md:p-10 shadow-silk transition-all duration-300 hover:shadow-gold-glow-lg hover:border-gold/30 animate-fade-up delay-100">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                {isJp
                  ? "私たちは、支援先・協業先を厳選しています。しかし、一度パートナーとなれば、全力を尽くしてコミットします。"
                  : "We're selective about who we back and work with, but fully committed once we do."}
              </p>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mt-4">
                {isJp
                  ? "グローバルなビジョンを持ち、類まれな事業を構築・変革されている方で、私たちがお力になれるとお考えでしたら、ぜひご連絡ください。"
                  : "If you're building or transforming something extraordinary with a global vision, and believe we can help, we'd love to hear from you."}
              </p>

              <div className="mt-10 flex items-center justify-center gap-3 text-gold">
                <Mail className="h-5 w-5" />
                <span className="text-sm text-muted-foreground">
                  {isJp ? "メールアドレス" : "Email"}
                </span>
                <a
                  href="mailto:inquiries@kyotopacific.com"
                  className="text-lg font-medium hover:text-gold-light transition-colors"
                >
                  inquiries@kyotopacific.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;