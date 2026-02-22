import { Layout } from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

const Privacy = () => {
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
                  プライバシーポリシー
                </h1>
                <div className="space-y-10 text-muted-foreground leading-relaxed text-xl">
                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      収集する情報
                    </h2>
                    <p className="mb-4">
                      当社は、お客様から以下の情報を収集する場合があります：
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        個人情報：お問い合わせの際に任意でご提供いただく、お名前、メールアドレス、電話番号等の個人を特定できる情報
                      </li>
                      <li>
                        アクセス情報：当社ウェブサイトへのアクセス時にサーバーが自動的に収集する、IPアドレス、ブラウザの種類、オペレーティングシステム、アクセス日時、閲覧ページ等の情報
                      </li>
                    </ul>
                  </section>
                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      情報の利用目的
                    </h2>
                    <p className="mb-4">
                      収集した情報は、以下の目的で利用いたします：
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>お問い合わせへの対応</li>
                      <li>当社サービスに関する情報のご提供</li>
                      <li>法令上の義務の遵守</li>
                    </ul>
                  </section>
                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      第三者への提供
                    </h2>
                    <p>
                      当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に販売、交換、または提供することはありません。
                    </p>
                  </section>
                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      セキュリティ
                    </h2>
                    <p>
                      当社は、お客様の個人情報を保護するため、適切なセキュリティ対策を講じています。ただし、インターネット上のデータ送信は完全な安全性を保証するものではありません。
                    </p>
                  </section>
                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      お問い合わせ
                    </h2>
                    <p>
                      本プライバシーポリシーに関するご質問は、下記までお問い合わせください。
                    </p>
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
                  Privacy Policy
                </h1>

                <div className="space-y-10 text-muted-foreground leading-relaxed text-xl">
                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      1. Information We Collect
                    </h2>
                    <p className="mb-4">
                      We may collect information about you in a variety of ways. The information we may collect includes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong className="text-foreground">Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number that you voluntarily give to us when you contact us or register on our site.
                      </li>
                      <li>
                        <strong className="text-foreground">Derivative Data:</strong> Information our servers automatically collect when you access our site, such as your IP address, browser type, operating system, access times, and the pages you have viewed.
                      </li>
                      <li>
                        <strong className="text-foreground">Financial Data:</strong> Financial information, such as data related to your payment method, that we may collect when you engage our services.
                      </li>
                    </ul>
                  </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                  2. How We Use Information
                </h2>
                <p className="mb-4">
                  Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Create and manage your account</li>
                  <li>Process transactions and send related information</li>
                  <li>Send you marketing and promotional communications (with your consent)</li>
                  <li>Respond to your inquiries and offer support</li>
                  <li>Improve our website and services</li>
                  <li>Monitor and analyze usage and trends</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                  3. Cookies and Tracking
                </h2>
                <p className="mb-4">
                  We may use cookies, web beacons, tracking pixels, and other tracking technologies to help customize our site and improve your experience. When you access our site, your personal information is not collected through the use of tracking technology unless you voluntarily submit such information.
                </p>
                <p>
                  Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of our site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                  4. Third-Party Services
                </h2>
                <p className="mb-4">
                  We may share information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, and customer service.
                </p>
                <p>
                  We are not responsible for the actions of third parties with whom you share personal or sensitive data, and we have no authority to manage or control third-party solicitations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                  5. Data Retention
                </h2>
                <p>
                  We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                  6. Your Rights
                </h2>
                <p className="mb-4">
                  Depending on your location, you may have the following rights regarding your personal data:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The right to access the personal data we hold about you</li>
                  <li>The right to request correction of inaccurate data</li>
                  <li>The right to request deletion of your data</li>
                  <li>The right to object to processing of your data</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent at any time</li>
                </ul>
              </section>

                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      7. Contact for Privacy Concerns
                    </h2>
                    <p>
                      If you have questions or comments about this Privacy Policy, please contact us at:
                    </p>
                    <div className="mt-4 p-4 bg-card/50 rounded-lg">
                      <p><strong className="text-foreground">Kyoto Pacific Capital</strong></p>
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

export default Privacy;
