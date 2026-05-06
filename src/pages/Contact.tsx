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

      <section className="pb-16 md:pb-24 min-h-screen pt-24 md:pt-36">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-display font-light text-gold mb-6 animate-fade-up">
              {isJp ? "お問い合わせ" : "Contact Us"}
            </h1>
            <div className="rounded-3xl border border-white/10 bg-card/60 p-5 md:p-10 shadow-silk transition-all duration-300 hover:shadow-gold-glow-lg hover:border-gold/30 animate-fade-up delay-100">
              <p className="text-base md:text-2xl text-muted-foreground leading-relaxed">
                {isJp
                  ? "投資先およびパートナーは厳選しておりますが、一度ご一緒する際には、全力でコミットします。"
                  : "We're selective about who we back and work with, but fully committed once we do."}
              </p>
              <p className="text-base md:text-2xl text-muted-foreground leading-relaxed mt-4">
                {isJp
                  ? "グローバルな視点で事業の構築や変革に取り組まれている方で、当社がお役に立てるとお考えの方は、ぜひご連絡ください。"
                  : "If you're building or transforming a business with a global vision, and believe we can help, we'd welcome a conversation."}
              </p>

              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-gold">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <span className="text-sm text-muted-foreground">
                    {isJp ? "メールアドレス" : "Email"}
                  </span>
                </div>
                <a
                  href="mailto:inquiries@kyotopacific.com"
                  className="text-base md:text-lg font-medium hover:text-gold-light transition-colors break-all sm:break-normal"
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