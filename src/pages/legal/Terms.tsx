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
                  最終更新日：2026年3月
                </p>
                <h1 className="text-4xl md:text-5xl font-display font-light text-gold mb-10">
                  利用規約
                </h1>
                <div className="space-y-10 text-muted-foreground leading-relaxed text-xl">
                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      規約への同意
                    </h2>
                    <p className="mb-4">
                      本ウェブサイトにアクセスし、ご利用いただくことにより、お客様は本利用規約に同意したものとみなされます。本規約に同意されない場合は、本ウェブサイトのご利用をお控えください。
                    </p>
                    <p>
                      本利用規約は、お客様と京都パシフィック・キャピタルとの間で、本ウェブサイトへのアクセスおよび利用に関して締結される法的拘束力のある契約を構成します。
                    </p>
                  </section>
                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      ウェブサイトの利用
                    </h2>
                    <p className="mb-4">お客様は、本ウェブサイトを合法的な目的のみに使用することに同意します。以下の行為は禁止されています：</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>適用される地方、国内、または国際法に違反する方法でサイトを使用すること</li>
                      <li>未承諾または無許可の広告や宣伝資料の送信にサイトを使用すること</li>
                      <li>サイトまたはサイトに接続されたシステムやネットワークへの不正アクセスを試みること</li>
                      <li>他者のサイト利用を制限または妨害する行為を行うこと</li>
                      <li>ロボット、スパイダー、その他の自動装置を使用してサイトのコンテンツを監視または複製すること</li>
                    </ul>
                  </section>
                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      知的財産権
                    </h2>
                    <p className="mb-4">
                      別段の定めがない限り、本ウェブサイトおよび本ウェブサイト上のすべてのコンテンツその他の資料（京都パシフィック・キャピタルのロゴ、すべてのデザイン、テキスト、グラフィック、画像、情報、データ、ソフトウェア、ファイルを含むがこれに限定されない）は、京都パシフィック・キャピタルまたはそのライセンサーもしくはユーザーの専有財産であり、著作権法により保護されています。
                    </p>
                    <p>
                      お客様には、本ウェブサイトへのアクセスおよび利用、ならびにコンテンツの一部をお客様の個人的かつ非商業的な使用のためにのみダウンロードまたは印刷する限定的、再許諾不能のライセンスが付与されます。ただし、すべての著作権その他の所有権表示を維持することを条件とします。
                    </p>
                  </section>
                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      責任の制限
                    </h2>
                    <p className="mb-4">
                      適用法が許容する最大限の範囲において、京都パシフィック・キャピタル、その関連会社、取締役、従業員、代理人、またはライセンサーは、以下に起因する間接的、偶発的、特別、結果的、または懲罰的損害（利益、データ、使用、信用、その他の無形損失の損失を含むがこれに限定されない）について、いかなる場合も責任を負いません：
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>お客様のサイトへのアクセスもしくは使用、またはアクセスもしくは使用不能</li>
                      <li>サイト上の第三者の行為またはコンテンツ</li>
                      <li>サイトから取得したコンテンツ</li>
                      <li>お客様の送信またはコンテンツへの不正アクセス、使用、または改変</li>
                    </ul>
                  </section>
                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      準拠法
                    </h2>
                    <p className="mb-4">
                      本利用規約は、日本法に準拠し、同法に従って解釈されるものとします（法の抵触に関する規定を除く）。
                    </p>
                    <p>
                      本利用規約に基づくまたは関連する法的措置または手続きは、東京の裁判所の専属管轄に服するものとし、お客様はこれにより当該裁判所の人的管轄権および裁判地に取消不能の同意をするものとします。
                    </p>
                  </section>
                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      規約の変更
                    </h2>
                    <p className="mb-4">
                      当社は、本利用規約をいつでも変更する権利を留保します。本規約に変更を行う場合、改訂された規約をサイトに掲載し、本規約の冒頭にある「最終更新日」を更新します。
                    </p>
                    <p>
                      改訂された規約の掲載後もサイトを継続して使用することにより、お客様は変更を承認し同意したものとみなされます。変更を認識するため、本ページを定期的にご確認ください。
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
                  Last updated: March 2026
                </p>

                <h1 className="text-4xl md:text-5xl font-display font-light text-gold mb-10">
                  Terms of Use
                </h1>

                <div className="space-y-10 text-muted-foreground leading-relaxed text-xl">
                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      Acceptance of Terms
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
                      Use of Website
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
                      Intellectual Property
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
                      Limitation of Liability
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
                      Governing Law
                    </h2>
                    <p className="mb-4">
                      These Terms shall be governed by and construed in accordance with the laws of Japan, without regard to its conflict of law provisions.
                    </p>
                    <p>
                      Any legal action or proceeding arising under these Terms will be brought exclusively in the courts of Tokyo, Japan, and you hereby irrevocably consent to the personal jurisdiction and venue therein.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      Changes to Terms
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
                      Contact Information
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
