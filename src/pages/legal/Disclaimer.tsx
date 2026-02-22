import { Layout } from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

const Disclaimer = () => {
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
                  免責事項
                </h1>
                <div className="space-y-10 text-muted-foreground leading-relaxed text-xl">
                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      重要なお知らせ
                    </h2>
                    <p>
                      本ウェブサイトは、情報提供のみを目的としており、有価証券または投資商品の売却の申込み、または購入の勧誘を構成するものではありません。かかる申込みまたは勧誘は、正式な募集書類に基づいてのみ行われます。
                    </p>
                  </section>
                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      過去の実績について
                    </h2>
                    <p>
                      過去の実績は、将来の成果を保証するものではなく、必ずしも将来の成果を示すものでもありません。京都パシフィック・キャピタルが同等の成果を達成できる保証、または目標リターンが達成される保証はありません。実際の実現リターンは、本資料に示されたリターンと大きく異なる場合があります。
                    </p>
                  </section>
                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      将来予測に関する記述
                    </h2>
                    <p>
                      本ウェブサイトには、「将来予測に関する記述」が含まれている場合があります。様々なリスクおよび不確実性により、実際の出来事または結果は、かかる記述に反映または想定されているものと大きく異なる場合があります。
                    </p>
                  </section>
                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      情報の正確性
                    </h2>
                    <p>
                      本ウェブサイトに含まれる情報の正確性、完全性、または実現可能性について、明示または黙示を問わず、いかなる表明または保証も行いません。
                    </p>
                  </section>
                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      管轄に関するお知らせ
                    </h2>
                    <p>
                      本ウェブサイトは、かかる勧誘が許可されていない管轄区域、または京都パシフィック・キャピタルがかかる勧誘を行う資格を有していない管轄区域において、いかなる者に対する勧誘または誘引を構成するものではありません。
                    </p>
                  </section>
                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      Contact
                    </h2>
                    <p>本免責事項に関するご質問は、下記までお問い合わせください。</p>
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
                  Investment Disclaimer
                </h1>

                <div className="space-y-10 text-muted-foreground leading-relaxed text-xl">
                  <div className="p-4 border border-gold/30 rounded-lg bg-gold/5 mb-8">
                    <p className="text-sm text-gold">
                      <strong>Important Notice:</strong> Please read this disclaimer carefully before using this website or any materials provided by Kyoto Pacific Capital.
                    </p>
                  </div>

                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      Not an Offer or Solicitation
                    </h2>
                    <p>
                      This website and any materials contained herein do not constitute an offer to sell or a solicitation of an offer to buy any securities in any jurisdiction to any person. The information provided is for general informational purposes only and should not be construed as investment, legal, tax, or other professional advice.
                    </p>
                  </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                  Past Performance
                </h2>
                <p>
                  Past performance is not indicative of future results. Any historical returns, expected returns, or probability projections may not reflect actual future performance. Investments in private equity and venture capital involve substantial risks, including the potential loss of all invested capital.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                  Information for Discussion Purposes Only
                </h2>
                <p className="mb-4">
                  The information presented on this website and in any related materials is provided solely for informational and discussion purposes. It is not intended to provide the sole basis for any investment decision and is subject to change without notice.
                </p>
                <p>
                  No representation or warranty, express or implied, is made as to the accuracy, completeness, or reliability of the information contained herein. Kyoto Pacific Capital expressly disclaims any and all liability for any loss or damage arising from reliance on such information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                  Confidentiality Notice
                </h2>
                <p>
                  Certain information made available through this website or through direct communications may be confidential and proprietary to Kyoto Pacific Capital and its affiliates. Such information is provided solely for the intended recipient and may not be reproduced, disclosed, or distributed to any other party without the prior written consent of Kyoto Pacific Capital.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                  Forward-Looking Statements
                </h2>
                <p className="mb-4">
                  This website may contain forward-looking statements that involve risks and uncertainties. These statements may include projections, forecasts, and estimates of market trends, returns, and other financial metrics. Such forward-looking statements are based on current expectations and assumptions that are subject to risks and uncertainties that could cause actual results to differ materially.
                </p>
                <p>
                  Forward-looking statements speak only as of the date they are made, and Kyoto Pacific Capital undertakes no obligation to update or revise any forward-looking statements, whether as a result of new information, future events, or otherwise.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                  Consult Professional Advisors
                </h2>
                <p className="mb-4">
                  Before making any investment decision, you should consult with your own legal, tax, financial, and other professional advisors to determine the suitability of any investment for your particular circumstances and financial situation.
                </p>
                <p>
                  Kyoto Pacific Capital does not provide legal, tax, or accounting advice. Nothing on this website or in any materials should be construed as constituting such advice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                  Risk Factors
                </h2>
                <p className="mb-4">
                  Investments in private markets involve significant risks, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Illiquidity and restrictions on transferability</li>
                  <li>Long-term commitment of capital</li>
                  <li>Loss of entire investment</li>
                  <li>Market and economic volatility</li>
                  <li>Regulatory and political risks</li>
                  <li>Currency exchange rate fluctuations</li>
                  <li>Limited operating history of portfolio companies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                  Regulatory Status
                </h2>
                <p>
                  Kyoto Pacific Capital is not a registered investment advisor, broker-dealer, or investment company. The firm conducts its activities in accordance with applicable exemptions and regulations in the jurisdictions where it operates.
                </p>
              </section>

                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      Contact
                    </h2>
                    <p>
                      If you have any questions regarding this disclaimer, please contact:
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

export default Disclaimer;
