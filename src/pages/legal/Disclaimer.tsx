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
                  最終更新日：2026年3月
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
                      本ウェブサイトをご利用になる前に、本免責事項を注意深くお読みください。
                    </p>
                  </section>
                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      勧誘行為ではありません
                    </h2>
                    <p>
                      本ウェブサイトおよび本ウェブサイトに含まれるいかなる資料も、いかなる法域においていかなる者に対しても、有価証券の売却の申込みまたは購入の勧誘を構成するものではありません。提供される情報は一般的な情報提供のみを目的としており、投資、法律、税務、その他の専門的助言として解釈されるべきではありません。
                    </p>
                  </section>
                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      投資実績と過去のパフォーマンス
                    </h2>
                    <p className="mb-4">
                      本ウェブサイトに記載されている投資実績には、アンクール・サフがゴールドマン・サックス在籍中（1998年〜2018年）に行った投資、および京都パシフィック・キャピタルを通じて行った投資が含まれます。これらの投資は、異なる立場、異なる組織体制およびマンデートの下で行われたものです。これらの投資の過去の実績は、京都パシフィック・キャピタルまたはそのファンドや投資の将来のパフォーマンスを必ずしも示すものではありません。
                    </p>
                    <p>
                      過去の実績は将来の成果を示すものではありません。過去のリターン、期待リターン、または確率予測は、実際の将来のパフォーマンスを反映しない場合があります。京都パシフィック・キャピタルが同等の成果を達成できる保証、または目標リターンが達成される保証はありません。実際の実現リターンは、本資料に示されたリターンと大きく異なる場合があります。
                    </p>
                  </section>
                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      情報提供目的のみ
                    </h2>
                    <p className="mb-4">
                      本ウェブサイトおよび関連資料に記載される情報は、情報提供および議論の目的のみで提供されます。投資判断の唯一の根拠を提供することを意図したものではなく、予告なく変更される場合があります。
                    </p>
                    <p>
                      本ウェブサイトに含まれる情報の正確性、完全性、または信頼性について、明示または黙示を問わず、いかなる表明または保証も行いません。京都パシフィック・キャピタルは、かかる情報への依拠から生じるいかなる損失または損害についても、一切の責任を明示的に否認します。
                    </p>
                  </section>
                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      機密保持に関するお知らせ
                    </h2>
                    <p>
                      本ウェブサイトまたは直接のコミュニケーションを通じて提供される特定の情報は、京都パシフィック・キャピタルおよびその関連会社の機密かつ専有情報である場合があります。かかる情報は、意図された受領者のみに提供されるものであり、京都パシフィック・キャピタルの事前の書面による同意なく、他の当事者に複製、開示、または配布することはできません。
                    </p>
                  </section>
                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      リスク要因
                    </h2>
                    <p className="mb-4">
                      プライベート市場への投資には、以下を含む（ただしこれらに限定されない）重大なリスクが伴います：
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>流動性の欠如および譲渡制限</li>
                      <li>長期的な資本拘束</li>
                      <li>投資元本全額の損失</li>
                      <li>市場および経済の変動</li>
                      <li>規制および政治リスク</li>
                      <li>為替レートの変動</li>
                      <li>ポートフォリオ企業の限られた事業実績</li>
                    </ul>
                  </section>
                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      規制上の地位
                    </h2>
                    <p>
                      京都パシフィック・キャピタルは、登録投資顧問業者、ブローカー・ディーラー、または投資会社ではありません。当社は、事業を行う法域において適用される免除規定および規制に従って活動を行っています。
                    </p>
                  </section>
                  <section>
                    <h2 className="text-2xl md:text-3xl font-display font-light text-gold mb-4">
                      お問い合わせ
                    </h2>
                    <p>本免責事項に関するご質問は、下記までお問い合わせください。</p>
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
                      Track Record and Past Performance
                    </h2>
                    <p className="mb-4">
                      The investment track record presented on this website includes investments made during Ankur Sahu's tenure at Goldman Sachs (1998-2018) as well as investments made through Kyoto Pacific Capital. These investments were made in different capacities and under different organizational structures and mandates. Past results of these investments are not necessarily indicative of future performance of Kyoto Pacific Capital or any of its funds or investments.
                    </p>
                    <p>
                      Past performance is not indicative of future results. Any historical returns, expected returns, or probability projections may not reflect actual future performance. There is no guarantee that Kyoto Pacific Capital will achieve comparable results or that target returns will be met. Actual realized returns may differ materially from those presented.
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
                      No representation or warranty, express or implied, is made as to the accuracy, completeness, or reliability of the information contained herein. Kyoto Pacific Capital expressly disclaims any liability for any loss or damage arising from reliance on such information.
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
