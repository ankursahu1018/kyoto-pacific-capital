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
        description="We're selective about who we back and work with, but all-in once we do."
        canonicalUrl="https://kyotopacific.com/contact"
      />

      <section className="pb-24 min-h-screen pt-32 md:pt-36">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-light text-gold mb-6 animate-fade-up">
              {isJp ? "お問い合わせ" : "Contact Us"}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-up delay-100">
              {isJp
                ? "私たちは、支援先・協業先を厳選しています。しかし、一度パートナーとなれば、全力でコミットします。"
                : "We're selective about who we back and work with, but all-in once we do."}
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mt-4 animate-fade-up delay-200">
              {isJp
                ? "大胆かつグローバルな事業を構築・変革されている方で、私たちがお役に立てるとお考えでしたら、ぜひご連絡ください。"
                : "If you're building or transforming something bold and global, and believe we can help, we'd love to hear from you."}
            </p>

            <div className="mt-10 flex items-center justify-center gap-3 text-gold animate-fade-up delay-300">
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
      </section>
    </Layout>
  );
};

export default Contact;