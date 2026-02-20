import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { GlassCard } from "@/components/ui/GlassCard";
import { useLanguage } from "@/contexts/LanguageContext";
import ankurPhoto from "@/assets/ankur.png";

const Founder = () => {
    const { language } = useLanguage();
    const isJp = language === "jp";

    const jpParagraphs = [
        "アンクール・サフは、京都パシフィック・キャピタルの創業者兼マネージングパートナーです。成長、転換期、戦略的転機を迎える創業者、オーナー、経営陣とパートナーシップを築き、長期的な資本と積極的な関与、そして規律ある戦略的・財務的判断を組み合わせることで、業界をリードする企業の構築に注力しています。",
        "アンクールは、日本、インド、米国を中心に、アジア全域で30年以上にわたる投資および事業運営の経験を有しています。京都パシフィック・キャピタル創業以前は、ゴールドマン・サックスにてアジア太平洋地域プライベート・エクイティ部門の共同責任者を務めました。在職中は、グローバル投資委員会、リスク委員会、アジア太平洋経営委員会のメンバーとして活躍。1998年に入社し、2005年にマネージング・ディレクター、2006年にパートナーに就任しました。",
        "キャリアを通じて、30社以上の企業に対し総額50億ドル以上の投資を主導してきました。アジアにおける最も先駆的な案件を数多く手がけ、経営陣と長期的なパートナー、共同起業家として密接に協働し、単なる財務投資家としてではなく、創業者や経営幹部と肩を並べて事業運営に携わってきました。これらの投資は総額210億ドル以上の株主価値を実現し、ユニバーサル・スタジオ・ジャパン（USJ）、三洋電機、イー・アクセス、リニューパワー、ジャパン・リニューアブル・エナジーを含む5件の数十億ドル規模の成功事例を生み出しました。",
        "USJでは、13年間にわたり中心的な役割を担い、筆頭株主を代表するリード・ディレクターとして、複数フェーズにわたる変革を主導しました。この間、年間来場者数は750万人から1,500万人以上へと倍増し、EBITDAは5倍以上に増加、最終的に15倍のリターンを達成しました。USJ案件は、アジアにおける最も成功したプライベート・エクイティ投資の一つとして、またゴールドマン・サックスのグローバル投資の中でもトップクラスの実績として広く認識されています。",
        "キャリア初期には、パナソニック（日本）にて半導体設計および国際製品開発に従事。この経験は、テクノロジー（ハードウェア・ソフトウェア）、製造業、異文化間での事業遂行に対する現在のアプローチの基盤となっています。",
        "ハーバード・ビジネス・スクールでMBAを取得、タフツ大学で電気工学の学士号を最優等（summa cum laude）で取得。現在、タフツ大学の理事を務め、監査・リスク・コンプライアンス委員会の委員長を担当しています。",
        "英語、日本語、ヒンディー語に堪能で、フランス語も会話レベルで使用可能。2007年よりYPO（Young Presidents' Organization）のメンバーであり、インドの主要な戦略的フィランソロピー・プラットフォームであるDasraの理事も務めています。世界各地で生活・仕事をしながら、アジア、欧州、米国の起業家、ビジネスリーダー、各種機関と深く関わり続けています。",
    ];

    const enParagraphs = [
        "Ankur Sahu is the Founder and Managing Partner of Kyoto Pacific Capital, where he partners with founders, owners, and management teams at moments of growth, transition, and strategic inflection. His work focuses on building leading businesses by combining long-term capital with active engagement and disciplined strategic and financial judgment.",
        "Ankur brings over three decades of investment and operating experience across Asia, with a particular focus on Japan, India, and the United States. Prior to founding Kyoto Pacific Capital, he served as Co-Head of Private Equity for Asia-Pacific at Goldman Sachs. During his tenure, he was a member of the firm's Global Investment Committee, Risk Committee, and Asia-Pacific Management Committee. He joined Goldman Sachs in 1998, was named Managing Director in 2005, and became a Partner in 2006.",
        "Over the course of his career, Ankur led investments totaling over $5 billion across 30+ companies. He oversaw some of Asia's most pioneering transactions, working closely with management teams as a long-term partner and co-entrepreneur, operating shoulder-to-shoulder with founders and executives rather than simply as a financial investor. Collectively, these investments generated over $21 billion in realized shareholder value, including five multi-billion-dollar outcomes: Universal Studios Japan (USJ), Sanyo Electric, eAccess, ReNew Power, and Japan Renewable Energy.",
        "At USJ, Ankur played a central role over a 13-year period, serving as lead director representing the majority shareholder through a multi-phase transformation. During this time, annual visitors more than doubled from 7.5 million to over 15 million, EBITDA increased more than fivefold, and the investment ultimately generated a 15x return. The USJ transaction is widely regarded as one of the most successful private equity outcomes in Asia and among Goldman Sachs' top-performing global investments.",
        "Earlier in his career, Ankur worked at Panasonic in Japan, where he held roles in semiconductor design and international product development. This experience continues to shape his approach to technology (hardware and software), manufacturing, and cross-cultural execution.",
        "Ankur holds an MBA from Harvard Business School and a B.S. in Electrical Engineering (summa cum laude) from Tufts University. He currently serves on the Board of Trustees of Tufts University, where he chairs the Audit, Risk, and Compliance Committee.",
        "He is fluent in English, Japanese, and Hindi, and conversational in French. A member of YPO since 2007, Ankur also serves on the board of Dasra, a leading strategic philanthropy platform in India. He lives and works globally, and remains deeply engaged with entrepreneurs, business leaders, and institutions across Asia, Europe, and the United States.",
    ];
    return (
        <Layout>
            <SEO
                title="Founder & Managing Partner | Kyoto Pacific Capital"
                description="Founder and Managing Partner profile for Kyoto Pacific Capital."
                canonicalUrl="https://kyotopacific.com/founder"
            />

            <section className="pb-24 min-h-screen pt-32 md:pt-36">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl font-display font-light text-gold mb-3 animate-fade-up">
                                {isJp ? "アンクール・サフ" : "Ankur Sahu"}
                            </h1>
                        </div>

                        <GlassCard className="p-8 lg:p-12 animate-fade-up delay-200">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl p-1 bg-gradient-to-br from-gold/40 via-gold/20 to-transparent shadow-gold-glow">
                                    <div className="w-full h-full rounded-2xl overflow-hidden border border-gold/30 bg-[hsl(271,70%,14%)]/80">
                                        <img
                                            src={ankurPhoto}
                                            alt="Ankur Sahu"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="mt-10 space-y-6 text-muted-foreground leading-relaxed text-xl text-left max-w-3xl">
                                    {(isJp ? jpParagraphs : enParagraphs).map((paragraph) => (
                                        <p key={paragraph}>{paragraph}</p>
                                    ))}
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

