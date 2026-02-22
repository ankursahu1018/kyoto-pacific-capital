import { Layout } from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

const Terms = () => {
  const { language } = useLanguage();
  const isJp = language === "jp";

  return (
    <Layout>
      <section className="pb-24 min-h-screen pt-32 md:pt-36">
        <div className="container mx-auto px-6 lg:px-12">
          <article className="max-w-5xl mx-auto">
            {isJp ? (
              <>
                <p className="text-xl text-muted-foreground mb-6">
                  最終更新日：2026年2月
                </p>
                <h1 className="text-4xl md:text-5xl font-display font-light text-gold mb-10">
                  利用規約
                </h1>
                <div className="space-y-10 text-muted-foreground leading-relaxed text-xl">
                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      規約への同意
                    </h2>
                    <p>
                      本ウェブサイトにアクセスし、ご利用いただくことにより、お客様は本利用規約に同意したものとみなされます。本規約に同意されない場合は、本ウェブサイトのご利用をお控えください。
                    </p>
                  </section>
                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      知的財産権
                    </h2>
                    <p>
                      本ウェブサイト上のすべてのコンテンツ（テキスト、グラフィック、ロゴ、画像を含むがこれに限定されない）は、京都パシフィック・キャピタルまたはそのライセンサーの財産であり、著作権法により保護されています。
                    </p>
                  </section>
                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      利用制限
                    </h2>
                    <p className="mb-4">お客様は、以下の行為を行ってはなりません：</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>書面による許可なく、コンテンツを複製、配布、または改変すること</li>
                      <li>本ウェブサイトを違法な目的で使用すること</li>
                      <li>本ウェブサイトの一部への不正アクセスを試みること</li>
                    </ul>
                  </section>
                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      免責事項
                    </h2>
                    <p>
                      本ウェブサイトは「現状有姿」で提供され、明示または黙示を問わず、いかなる保証も行いません。
                    </p>
                  </section>
                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      責任の制限
                    </h2>
                    <p>
                      京都パシフィック・キャピタルは、本ウェブサイトの使用または使用不能から生じるいかなる損害についても責任を負いません。
                    </p>
                  </section>
                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      お問い合わせ
                    </h2>
                    <p>本利用規約に関するご質問は、下記までお問い合わせください。</p>
                    <p className="mt-2">メールアドレス：inquiries@kyotopacific.com</p>
                  </section>
                </div>
              </>
            ) : (
              <>
                <p className="text-xl text-muted-foreground mb-6">
                  Last updated: February 2026
                </p>

                <h1 className="text-4xl md:text-5xl font-display font-light text-gold mb-10">
                  Terms of Use
                </h1>

                <div className="space-y-10 text-muted-foreground leading-relaxed text-xl">
                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      1. Acceptance of Terms
                    </h2>
                    <p className="mb-4">
                      By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this site.
                    </p>
                    <p>
                      These Terms of Use constitute a legally binding agreement made between you and Kyoto Pacific Capital concerning your access to and use of this website.
                    </p>
                  </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                  2. Use of Website
                </h2>
                <p className="mb-4">
                  You agree to use this website only for lawful purposes. You are prohibited from:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Using the site in any way that violates any applicable local, national, or international law</li>
                  <li>Using the site to transmit any unsolicited or unauthorized advertising or promotional material</li>
                  <li>Attempting to gain unauthorized access to any portion of the site or any systems or networks connected to the site</li>
                  <li>Engaging in any conduct that restricts or inhibits anyone's use or enjoyment of the site</li>
                  <li>Using any robot, spider, or other automatic device to monitor or copy any content from the site</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                  3. Intellectual Property
                </h2>
                <p className="mb-4">
                  Unless otherwise indicated, the site and all content and other materials on the site, including, without limitation, the Kyoto Pacific Capital logo and all designs, text, graphics, pictures, information, data, software, and files (collectively, the "Content"), are the proprietary property of Kyoto Pacific Capital or our licensors or users and are protected by copyright laws.
                </p>
                <p>
                  You are granted a limited, non-sublicensable license to access and use the site and to download or print a copy of any portion of the Content solely for your personal, non-commercial use, provided that you keep all copyright or other proprietary notices intact.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                  4. Limitation of Liability
                </h2>
                <p className="mb-4">
                  To the fullest extent permitted by applicable law, in no event shall Kyoto Pacific Capital, its affiliates, directors, employees, agents, or licensors be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your access to or use of or inability to access or use the site</li>
                  <li>Any conduct or content of any third party on the site</li>
                  <li>Any content obtained from the site</li>
                  <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                  5. Governing Law
                </h2>
                <p className="mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the Republic of Singapore, without regard to its conflict of law provisions.
                </p>
                <p>
                  Any legal action or proceeding arising under these Terms will be brought exclusively in the courts of Singapore, and you hereby irrevocably consent to the personal jurisdiction and venue therein.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                  6. Changes to Terms
                </h2>
                <p className="mb-4">
                  We reserve the right to modify these Terms at any time. If we make changes to these Terms, we will post the revised Terms on the site and update the "Last updated" date at the top of these Terms.
                </p>
                <p>
                  Your continued use of the site following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes.
                </p>
              </section>

                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      7. Contact Information
                    </h2>
                    <p>
                      Questions about the Terms should be sent to us at:
                    </p>
                    <div className="mt-4 p-4 bg-card/50 rounded-lg">
                      <p><strong>Kyoto Pacific Capital</strong></p>
                      <p>Email: inquiries@kyotopacific.com</p>
                    </div>
                  </section>
                </div>
              </>
            )}
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
