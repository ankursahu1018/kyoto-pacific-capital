import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { GlassCard } from "@/components/ui/GlassCard";
import { useLanguage } from "@/contexts/LanguageContext";
import ankurPhoto from "@/assets/ankur.png";

const Founder = () => {
    const { language } = useLanguage();
    const isJp = language === "jp";

    const jpParagraphs = [
        "アンクール・サフは、京都パシフィック・キャピタルの創業者兼マネージング・パートナーです。成長、転換期、あるいは戦略上の重要な節目を迎える創業者、オーナー、経営陣とパートナーシップを築き、長期的な資本と積極的な関与、そして規律ある戦略的・財務的判断を組み合わせることで、業界をリードする企業の構築に取り組んでいます。",
        "アンクールは、日本、インド、米国を中心に、アジア全域で30年以上にわたる投資および事業運営の経験を有しています。京都パシフィック・キャピタル創業以前は、ゴールドマン・サックスにてアジア太平洋地域プライベート・エクイティ部門の共同責任者を務めました。在職中は、グローバル投資委員会、リスク委員会、アジア太平洋経営委員会のメンバーとして活動。1998年に入社し、2005年にマネージング・ディレクター、2006年にパートナーに就任しました。",
        "キャリアを通じて、30社以上の企業に対し総額40億ドル以上の投資を主導してきました。アジアにおける先駆的な案件を数多く手がけ、長期的なパートナー、共同起業家として経営陣と密接に協働し、単なる財務投資家としてではなく、創業者や経営幹部と肩を並べて事業の成長に取り組んできました。これらの投資は総額120億ドル以上の株主価値を創出し、ユニバーサル・スタジオ・ジャパン（USJ）、三洋電機、イー・アクセス、リニュー・パワー、ジャパン・リニューアブル・エナジーを含む5件の数十億ドル規模の成功事例を生み出しました。",
        "USJでは、13年間にわたり中心的な役割を担い、筆頭株主を代表するリード・ディレクターとして複数フェーズにわたる変革を主導しました。主要な戦略および事業運営に関する意思決定をリードし、IPO、非公開化、資本再構成といった一連の取引を主導しました。また、経営幹部の採用、約4.5億ドル規模のハリー・ポッター投資の実行、コムキャストへの最終売却交渉を推進しました。",
        "この間、年間来場者数は750万人から1,500万人以上へと倍増し、EBITDAは5倍以上に拡大、最終的に数十億ドル規模のリターンを実現しました。本案件は、アジアにおける代表的なプライベート・エクイティ投資の一つとして広く認識されています。",
        "キャリア初期には、パナソニック（日本）にて半導体設計およびビジネス開発に従事しました。この経験は、テクノロジー、製造業、異文化間での事業遂行に対する現在のアプローチの基盤となっています。",
        "ハーバード・ビジネス・スクールでMBAを取得、タフツ大学で電気工学の修士号を最優等で取得。現在、タフツ大学の理事を務め、監査・リスク・コンプライアンス委員会の委員長を担当しています。",
        "英語、日本語、ヒンディー語に堪能。YPOのメンバーであり、インドの戦略的フィランソロピー・プラットフォームであるDasraの理事も務めています。世界各地で活動しながら、アジア、欧州、米国の起業家やビジネスリーダーと深く関わり続けています。",
    ];

    const enParagraphs = [
        "Ankur Sahu is the Founder and Managing Partner of Kyoto Pacific Capital, where he partners with founders, owners, and management teams at moments of growth, transition, and strategic inflection. His work focuses on building businesses by combining long-term capital with active engagement and disciplined strategic and financial judgment.",
        "Ankur brings over three decades of investment and operating experience, with a particular focus on Japan, India, and the United States. Prior to founding Kyoto Pacific Capital, he served as Co-Head of Private Equity for Asia-Pacific at Goldman Sachs. During his tenure, he was a member of the firm's Global Investment Committee, Risk Committee, and Asia-Pacific Management Committee. He joined Goldman Sachs in 1998, was named Managing Director in 2005, and became a Partner in 2006.",
        "Over the course of his career, Ankur led investments totaling over $4 billion across 30+ companies. He oversaw some of Asia's most pioneering transactions, working closely with management teams as a long-term partner and co-entrepreneur, operating shoulder-to-shoulder with founders and management rather than simply as a financial investor. Collectively, these investments generated over $12 billion in realized shareholder value, including five multi-billion-dollar outcomes: Universal Studios Japan (USJ), Sanyo Electric, eAccess, ReNew Power, and Japan Renewable Energy.",
        "At USJ, Ankur played a central role over a 13-year period, serving as lead director representing the majority shareholder through a multi-phase transformation. He drove major strategic and operational decisions, led the IPO, take-private, and recapitalization transactions, recruited key members of the senior management team, led the $450M+ Harry Potter investment, and negotiated the final sale to Comcast. During this time, annual visitors more than doubled from 7.5 million to over 15 million, EBITDA increased more than fivefold, and the investment ultimately generated a multi-billion-dollar return. The USJ transaction is widely regarded as one of the most successful private equity outcomes in Asia and among Goldman Sachs' most notable global investments.",
        "Earlier in his career, Ankur worked at Panasonic in Japan, where he held roles in semiconductor design and product/business development. This experience continues to shape his approach to technology (hardware and software), manufacturing, and cross-cultural execution.",
        "Ankur holds an MBA from Harvard Business School and a B.S. in Electrical Engineering (summa cum laude) from Tufts University. He currently serves on the Board of Sega Sammy Holdings Co. Ltd. and the Board of Trustees of Tufts University, where he chairs the Audit, Risk, and Compliance Committee.",
        "He is fluent in English, Japanese, and Hindi, and conversational in French. A member of YPO (Japan and Paris chapters) since 2007, Ankur also serves on the board of Dasra, a strategic philanthropy platform in India. He lives and works globally, and remains deeply engaged with entrepreneurs, business leaders, and institutions across Asia, Europe, and the United States.",
    ];
    return (
        <Layout>
            <SEO
                title="Ankur Sahu | Founder & Managing Partner | Kyoto Pacific Capital"
                description="Ankur Sahu is the Founder and Managing Partner of Kyoto Pacific Capital. Former Co-Head of Private Equity Asia-Pacific at Goldman Sachs."
                canonicalUrl="https://kyotopacific.com/ankur-sahu"
                includePersonSchema={true}
            />

            <section className="pb-16 md:pb-24 min-h-screen pt-24 md:pt-36">
                <div className="container mx-auto px-4 md:px-6 lg:px-12">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-10 md:mb-16">
                            <h1 className="text-3xl md:text-5xl font-display font-light text-gold mb-3 animate-fade-up">
                                {isJp ? "アンクール・サフ" : "Ankur Sahu"}
                            </h1>
                            <p className="text-lg md:text-2xl text-muted-foreground animate-fade-up delay-100">
                                {isJp ? "創業者 兼 マネージング・パートナー" : "Founder & Managing Partner"}
                            </p>
                        </div>

                        <GlassCard className="p-5 md:p-8 lg:p-12 animate-fade-up delay-200">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl p-1 bg-gradient-to-br from-gold/40 via-gold/20 to-transparent shadow-gold-glow">
                                    <div className="w-full h-full rounded-2xl overflow-hidden border border-gold/30 bg-[hsl(248,39%,20%)]/80">
                                        <img
                                            src={ankurPhoto}
                                            alt="Ankur Sahu Founder and Managing Partner Kyoto Pacific Capital"
                                            loading="lazy"
                                            className="w-full h-full object-cover contrast-[1.15] saturate-[1.1] brightness-[0.95]"
                                        />
                                    </div>
                                </div>

                                <div className="mt-8 md:mt-10 space-y-4 md:space-y-6 text-muted-foreground leading-relaxed text-base md:text-xl text-left max-w-3xl">
                                    {(isJp ? jpParagraphs : enParagraphs).map((paragraph) => (
                                        <p key={paragraph}>{paragraph}</p>
                                    ))}
                                </div>

                                <div className="mt-8 flex justify-center">
                                    <a
                                        href="https://www.linkedin.com/in/ankur-sahu-9b30157a/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors text-base md:text-lg"
                                    >
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Founder;

