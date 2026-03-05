import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();
  const isJp = language === "jp";

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="pb-24 min-h-screen pt-32 md:pt-36 flex items-center justify-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-8xl md:text-9xl font-display font-light text-gold mb-6 animate-fade-up">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4 animate-fade-up delay-100">
              {isJp ? "ページが見つかりません" : "Page Not Found"}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 animate-fade-up delay-200">
              {isJp
                ? "お探しのページは存在しないか、移動された可能性があります。URLをご確認のうえ、もう一度お試しください。"
                : "The page you're looking for doesn't exist or may have been moved. Please check the URL and try again."}
            </p>
            <div className="animate-fade-up delay-300">
              <Link to="/">
                <Button variant="hero" size="lg" className="group">
                  {isJp ? "ホームに戻る" : "Return to Home"}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
