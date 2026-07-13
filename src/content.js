// All site copy, in both languages. The language switch in the nav picks
// which branch renders; components never hard-code visible text.

export const content = {
  en: {
    titles: {
      '/': 'Mio Terasaki — Bilingual sales, CS & operations',
      '/experience': 'Experience — Mio Terasaki',
      '/contact': 'Contact — Mio Terasaki',
    },
    nav: {
      experience: 'Experience',
      contact: 'Contact',
      cta: "Let's talk",
    },
    home: {
      hero: {
        eyebrow: 'Tokyo-grade service · Melbourne-grade scale',
        title: 'Ten years of turning cross-cultural nuance into commercial results.',
        lede:
          'Bilingual sales, customer success and operations — from consultative enterprise selling in Japan to regulated iGaming operations in Australia. Now moving into delivery management and financial-crime operations.',
        ctaPrimary: 'View my experience',
        ctaSecondary: "Let's talk",
        stats: [
          { value: '95%+', label: 'QA at Easygo (Stake.com)' },
          { value: '−25%', label: 'ticket resolution time' },
          { value: 'Top 5%', label: 'sales rank, AmazingTalker' },
          { value: '400+', label: 'clients retained' },
        ],
      },
      proof: {
        eyebrow: 'Proof, not adjectives',
        title: "Three things I've actually shipped",
        cards: [
          {
            caption: 'EASYGO (STAKE.COM) · 2023–26',
            stat: '−25%',
            title: 'Payment-error workflow, designed from the frontline',
            body: 'Spotted the recurring failure pattern across 100–400 daily touchpoints, designed a structured workflow with Payments and Risk, and cut ticket resolution time by a quarter.',
          },
          {
            caption: 'AMAZINGTALKER · 2020–21',
            stat: 'Top 5%',
            title: 'A retention playbook that scaled beyond me',
            body: 'Ranked top 5% of salespeople, then standardised the evaluation and onboarding materials so a whole cohort of teachers could retain accounts the same way.',
          },
          {
            caption: 'INDEPENDENT · 2016–23',
            stat: '7 yrs',
            title: 'A 400-client book, built and kept single-handed',
            body: 'Acquisition, onboarding, renewals and referrals for 400+ clients — the full account-management cycle, run alone, for seven years.',
          },
        ],
      },
      bridge: {
        eyebrow: 'The bridge',
        title: 'Two business cultures, read fluently',
        intro:
          'Most companies learn these differences by losing a deal. I learned them by living on both sides — and I use them to keep deals, teams and customers from falling into the gap.',
        items: [
          {
            number: '01',
            title: 'Consensus is built before the meeting',
            body: 'Nemawashi vs. deciding in the room — I prepare stakeholders the way their culture expects.',
          },
          {
            number: '02',
            title: 'Trust runs on different clocks',
            body: 'Years-long relationships in Japan, quarter-by-quarter outcomes in the West — I run both renewal playbooks.',
          },
          {
            number: '03',
            title: 'Service floors are set differently',
            body: 'Omotenashi sets an uncompromising standard — I hold it at Western volume: 95%+ QA at 400 touchpoints a day.',
          },
        ],
      },
      testimonials: {
        eyebrow: 'What clients and colleagues say',
        title: 'Trusted by teammates. Renewed by clients.',
        note:
          'Paraphrased from a LinkedIn recommendation and 368 public client reviews on AmazingTalker — 98.6% of them five-star, across 2,900+ sessions.',
        items: [
          {
            quote:
              'Mio consistently delivered accurate, professional support — and always went one step further, guiding customers toward solutions that genuinely benefited them. She handled high volume at speed without ever letting quality slip.',
            name: 'Aya W.',
            title: 'Colleague · CS Support team, Easygo (Stake.com)',
          },
          {
            quote:
              'She shaped every session around my goals, focused on exactly where I needed help, and always finished with feedback and next steps — the kind of tailored service that kept me coming back.',
            name: 'Michelle',
            title: 'Long-term client · Independent practice',
          },
          {
            quote:
              "From the first session she understood exactly what my daughter needed and adapted everything to keep her engaged. We continued without hesitation — she's someone you trust with a long-term relationship.",
            name: 'Wendy M.',
            title: 'Client (parent) · AmazingTalker',
          },
        ],
      },
      ctaFooter: {
        title: 'Bring me the gap.',
        body:
          'Delivery/PM, customer success, AML/KYC operations, or Japan market entry — email, book a call, or find me on LinkedIn.',
        email: 'Email me',
        call: 'Book a call',
        resume: 'Full résumé',
        location: 'Mio Terasaki · Melbourne, VIC',
      },
    },
    experience: {
      eyebrow: 'Experience',
      title: 'From Kyushu enterprise sales to Melbourne regulated operations.',
      lede:
        'Every role on this page taught me a different side of the same craft: winning trust, keeping accounts, and building the process that makes both repeatable.',
      roles: [
        {
          dates: 'Apr 2026 – present',
          badge: { tone: 'terracotta', label: 'Current' },
          title: 'Founding Sales, Marketing & Operations Lead',
          company: 'countfor.me · pro bono · sole commercial hire',
          bullets: [
            "Set up the company's first outbound sales process — target segments across the Japanese and Melbourne markets, prospect list built from zero.",
            'Run full-cycle prospecting: account research, outreach sequences, and follow-up that converts cold contacts into qualified conversations.',
            'Use native Japanese and market fluency to open and localise the Japan go-to-market motion.',
            'Map the end-to-end customer journey and apply it to messaging across the website and social channels.',
          ],
        },
        {
          dates: 'Oct 2023 – Apr 2026',
          badge: { tone: 'sage', label: 'Regulated ops' },
          title: 'Customer Service Representative',
          company: 'Easygo (Stake.com) · Melbourne · regulated iGaming',
          bullets: [
            'Managed 100–400 daily customer touchpoints while sustaining a 95%+ QA score and meeting all SLAs.',
            'Designed and rolled out a structured payment-error workflow that cut ticket resolution time by 25%.',
            'Delivered 10+ Voice-of-Customer insights that directly improved internal processes.',
            'Partnered daily with Payments, Risk, KYC, Sportsbook and CRM teams on complex client issues.',
            'Authored internal documentation and response playbooks that reduced handling times.',
          ],
        },
        {
          dates: 'Sep 2020 – Dec 2021',
          badge: { tone: 'gold', label: 'Top 5% sales' },
          title: 'Teaching Mentor Manager',
          company: 'AmazingTalker · B2C accounts',
          bullets: [
            'Ranked in the top 5% of salespeople while owning acquisition, retention and renewals for a book of student accounts.',
            'Coached a cohort of teachers on the client-retention approach I built as a tutor.',
            'Standardised evaluation criteria and onboarding materials so account-management practice scaled consistently.',
          ],
        },
        {
          dates: 'May 2016 – May 2023',
          badge: { tone: 'neutral', label: 'Own business' },
          title: 'Japanese Tutor — Independent Business',
          company: 'Self-employed · Sydney & Melbourne',
          bullets: [
            'Owned the end-to-end client relationship for 400+ students — onboarding, check-ins and renewals over up to seven years.',
            "Drove retention by tailoring plans to each client's goals, sustaining long-term renewals and referrals.",
            'Ran the whole business alone: acquisition, scheduling, invoicing, retention.',
          ],
        },
        {
          dates: 'Apr 2011 – Mar 2015',
          badge: null,
          title: 'English Teacher',
          company: 'Prefectural High School, Japan',
          bullets: [
            'Presented to and managed engagement for classes of up to 40 students daily.',
            'Wrote and graded formal exams for Year 10–12, assessing 100+ students per year against fixed deadlines.',
          ],
        },
        {
          dates: 'Apr 2009 – Apr 2010',
          badge: { tone: 'neutral', label: 'Where it began' },
          title: 'Corporate Sales Representative',
          company: 'Fuji Xerox · Saga (Kyushu), Southern Japan',
          bullets: [
            'Ran the full B2B sales cycle for a portfolio of 40+ corporate and public-sector accounts, including local government.',
            'Built relationships across major Japanese enterprises including Toyota — and learned the consultative selling and business etiquette I still use today.',
            'Served as product expert for DocuWorks, translating technical features into business outcomes for non-technical buyers.',
          ],
        },
      ],
      skillsTitle: 'Key skills',
      skills: [
        { tone: 'sage', label: 'Regulated-industry operations' },
        { tone: 'sage', label: 'Process design & delivery' },
        { tone: 'terracotta', label: 'Full-cycle B2B sales' },
        { tone: 'terracotta', label: 'Account management & retention' },
        { tone: 'gold', label: 'SMB & public-sector selling' },
        { tone: 'gold', label: 'Consultative & value selling' },
        { tone: 'neutral', label: 'Cross-cultural / bilingual communication' },
        { tone: 'neutral', label: 'CRM & data-driven forecasting' },
      ],
      eduTitle: 'Education & certifications',
      education: [
        { name: 'AML/KYC Certification (ACAMS / ICA pathway)', year: 'in progress · 2026', strong: true },
        { name: 'BA Linguistics — Yamaguchi University', year: '2009' },
        { name: 'Certificate IV in TESOL — International House Sydney', year: '2015' },
        { name: '420-hr Advanced Japanese Teacher Training — World Japanese Language Centre', year: '2019' },
        { name: "High School Teacher's Certificate — Yamaguchi Prefectural Board of Education", year: '2009' },
      ],
      footer: {
        title: 'The full story, on one page.',
        body: 'Download the master résumé, or get in touch to talk specifics.',
        resume: 'Full résumé',
        contact: 'Contact',
        location: 'Mio Terasaki · Melbourne, VIC',
      },
    },
    contact: {
      eyebrow: 'Contact · どうぞよろしく',
      title: "Let's talk — in either language.",
      lede:
        'Hiring for delivery/PM, customer success or AML/KYC operations — or planning a move into the Japanese market? Write in English or Japanese; I answer in whichever you use.',
      cards: {
        email: { title: 'Email', body: 'The fastest way to reach me.' },
        linkedin: { title: 'LinkedIn', body: 'Connect, or message me directly.' },
        call: {
          title: 'Book a call',
          body: 'Suggest a time by email — happy to work around AEST or JST.',
          detail: 'Melbourne (AEST)',
        },
        resume: {
          title: 'Résumé',
          body: 'The master résumé — full record of roles and results.',
          detail: 'PDF · 3 pages',
        },
      },
      languagesLabel: 'Working languages:',
      languagesText:
        ' native Japanese and fluent, business-level English, written and spoken. Based in Melbourne, VIC — available for remote work across APAC time zones.',
      location: 'Mio Terasaki · Melbourne, VIC',
    },
  },

  ja: {
    titles: {
      '/': 'Mio Terasaki — 日英バイリンガル セールス・CS・オペレーション',
      '/experience': '経歴 — Mio Terasaki',
      '/contact': 'お問い合わせ — Mio Terasaki',
    },
    nav: {
      experience: '経歴',
      contact: 'お問い合わせ',
      cta: 'ご相談はこちら',
    },
    home: {
      hero: {
        eyebrow: '東京品質のサービス × メルボルン規模のスケール',
        title: '異文化のニュアンスをビジネスの成果に変えて、10年。',
        lede:
          '日英バイリンガルのセールス・カスタマーサクセス・オペレーション。日本での法人向けコンサルティング営業から、オーストラリアの規制産業（iGaming）オペレーションまで。現在はデリバリーマネジメントと金融犯罪対策（AML/KYC）オペレーションへ活動の場を広げています。',
        ctaPrimary: '経歴を見る',
        ctaSecondary: 'ご相談はこちら',
        stats: [
          { value: '95%+', label: 'Easygo（Stake.com）QAスコア' },
          { value: '−25%', label: 'チケット解決時間を短縮' },
          { value: '上位5%', label: 'AmazingTalker 営業成績' },
          { value: '400+', label: '長期継続クライアント' },
        ],
      },
      proof: {
        eyebrow: '形容詞ではなく、実績を',
        title: '実際に成果を出した、3つの仕事',
        cards: [
          {
            caption: 'EASYGO (STAKE.COM) · 2023–26',
            stat: '−25%',
            title: '現場から設計した、決済エラー対応ワークフロー',
            body: '1日100〜400件の顧客対応の中で繰り返し発生する障害パターンを発見。決済・リスク両チームと連携して構造化ワークフローを設計し、チケット解決時間を25%短縮しました。',
          },
          {
            caption: 'AMAZINGTALKER · 2020–21',
            stat: '上位5%',
            title: '私ひとりで終わらなかった、顧客維持の仕組み',
            body: '営業成績上位5%を達成した後、評価基準とオンボーディング資料を標準化。講師陣全体が同じ手法でアカウントを維持できるようにしました。',
          },
          {
            caption: '個人事業 · 2016–23',
            stat: '7年',
            title: 'ひとりで築き、守り抜いた400名のクライアント基盤',
            body: '新規獲得からオンボーディング、契約更新、ご紹介まで——アカウントマネジメントの全サイクルを7年間、ひとりで運営しました。',
          },
        ],
      },
      bridge: {
        eyebrow: '二つの文化の架け橋',
        title: '二つのビジネス文化を、正確に読み解く',
        intro:
          '多くの企業はこの違いを、商談を失ってはじめて学びます。私は両方の文化の中で生きてきました——だからこそ、商談も、チームも、顧客も、その溝に落とさずにすみます。',
        items: [
          {
            number: '01',
            title: '合意は、会議の前につくられる',
            body: '根回しか、その場での意思決定か——相手の文化が期待するかたちでステークホルダーを準備します。',
          },
          {
            number: '02',
            title: '信頼のスピードは、文化で異なる',
            body: '日本では年単位の関係構築、欧米では四半期ごとの成果——どちらの更新プレイブックも実践してきました。',
          },
          {
            number: '03',
            title: 'サービスの基準線が違う',
            body: 'おもてなしの妥協なき水準を、欧米のボリュームで維持——1日400件の対応でQAスコア95%以上。',
          },
        ],
      },
      testimonials: {
        eyebrow: 'クライアント・同僚からの声',
        title: '同僚に信頼され、クライアントに選ばれ続ける。',
        note:
          'LinkedInの推薦文と、AmazingTalkerに寄せられた368件の公開レビュー（5つ星評価98.6%・累計2,900回以上のセッション）から要約・意訳しています。',
        items: [
          {
            quote:
              'Mioさんは常に正確でプロフェッショナルな対応を提供し、さらに一歩踏み込んで、お客様に本当に役立つ提案まで行っていました。スピードと質を両立させながら、大量の案件を処理していました。',
            name: 'Aya W.',
            title: '同僚 · Easygo（Stake.com）CSサポートチーム',
          },
          {
            quote:
              '毎回のセッションを私の目標に合わせて設計し、弱点にピンポイントで対応し、必ずフィードバックと次のステップを示してくれました。「また戻りたくなる」オーダーメイドのサービスでした。',
            name: 'Michelle',
            title: '長期クライアント · 個人事業',
          },
          {
            quote:
              '初回のセッションから娘に必要なものを正確に理解し、飽きさせない工夫を重ねてくれました。迷わず継続を決めたのは、長くお付き合いしたいと思える信頼感があったからです。',
            name: 'Wendy M.',
            title: 'クライアント（保護者） · AmazingTalker',
          },
        ],
      },
      ctaFooter: {
        title: 'その「ギャップ」、私に任せてください。',
        body:
          'デリバリー/PM、カスタマーサクセス、AML/KYCオペレーション、日本市場参入——メールでも、面談のご予約でも、LinkedInでも、お気軽にどうぞ。',
        email: 'メールする',
        call: '面談を予約',
        resume: '職務経歴書',
        location: 'Mio Terasaki · メルボルン（VIC）',
      },
    },
    experience: {
      eyebrow: '経歴',
      title: '九州での法人営業から、メルボルンの規制産業オペレーションまで。',
      lede:
        'このページのすべての職務が、同じ技術の異なる側面を教えてくれました——信頼を勝ち取ること、顧客を維持すること、そしてその両方を再現可能にするプロセスを築くことです。',
      roles: [
        {
          dates: '2026年4月 – 現在',
          badge: { tone: 'terracotta', label: '現職' },
          title: '創業期 セールス・マーケティング・オペレーションリード',
          company: 'countfor.me · プロボノ · 唯一のビジネス職',
          bullets: [
            '日本とメルボルン両市場のターゲットセグメントを定義し、ゼロから見込み顧客リストを構築——会社初のアウトバウンド営業プロセスを立ち上げ。',
            'アカウントリサーチ、アウトリーチ、フォローアップまでフルサイクルの新規開拓を実行し、コールドコンタクトを質の高い商談につなげています。',
            'ネイティブの日本語と市場理解を活かし、日本向けGo-to-Market戦略を立ち上げ・ローカライズ。',
            'エンドツーエンドのカスタマージャーニーを設計し、ウェブサイトやSNSのメッセージングに反映。',
          ],
        },
        {
          dates: '2023年10月 – 2026年4月',
          badge: { tone: 'sage', label: '規制産業オペレーション' },
          title: 'カスタマーサービス担当',
          company: 'Easygo（Stake.com） · メルボルン · 規制対象iGaming',
          bullets: [
            '1日100〜400件の顧客対応を担当しながら、QAスコア95%以上とすべてのSLAを維持。',
            '決済エラー対応の構造化ワークフローを設計・展開し、チケット解決時間を25%短縮。',
            '10件以上のVoice of Customerインサイトを提供し、社内プロセスの改善に直結。',
            '決済・リスク・KYC・スポーツブック・CRMの各チームと日々連携し、複雑な顧客課題に対応。',
            '社内ドキュメントと応対プレイブックを執筆し、処理時間を削減。',
          ],
        },
        {
          dates: '2020年9月 – 2021年12月',
          badge: { tone: 'gold', label: '営業成績 上位5%' },
          title: 'ティーチングメンター・マネージャー',
          company: 'AmazingTalker · B2Cアカウント',
          bullets: [
            '受講生アカウントの獲得・維持・更新を一貫して担当しながら、営業成績上位5%を達成。',
            '自身が講師として築いた顧客維持のアプローチを、講師陣にコーチング。',
            '評価基準とオンボーディング資料を標準化し、アカウントマネジメントの実践を一貫してスケール。',
          ],
        },
        {
          dates: '2016年5月 – 2023年5月',
          badge: { tone: 'neutral', label: '自営業' },
          title: '日本語講師（個人事業）',
          company: '自営業 · シドニー & メルボルン',
          bullets: [
            '400名以上の生徒との関係をエンドツーエンドで管理——オンボーディングから定期フォロー、更新まで、最長7年間。',
            '一人ひとりの目標に合わせたプラン設計でリテンションを高め、長期的な更新とご紹介を維持。',
            '集客、スケジュール管理、請求、顧客維持まで、事業のすべてをひとりで運営。',
          ],
        },
        {
          dates: '2011年4月 – 2015年3月',
          badge: null,
          title: '英語科 教員',
          company: '県立高等学校（日本）',
          bullets: [
            '最大40名のクラスを毎日担当し、授業運営とエンゲージメント管理を実施。',
            '高校1〜3年生の定期試験を作成・採点し、年間100名以上を期限内に評価。',
          ],
        },
        {
          dates: '2009年4月 – 2010年4月',
          badge: { tone: 'neutral', label: '原点' },
          title: '法人営業',
          company: '富士ゼロックス · 佐賀（九州）',
          bullets: [
            '地方自治体を含む40社以上の法人・公共セクター顧客を担当し、B2B営業のフルサイクルを実行。',
            'トヨタをはじめとする日本の大手企業との関係を構築——今も活きるコンサルティング営業とビジネスマナーの原点。',
            'DocuWorksのプロダクトエキスパートとして、技術的な機能を非技術系の意思決定者に向けてビジネス価値へ翻訳。',
          ],
        },
      ],
      skillsTitle: '主なスキル',
      skills: [
        { tone: 'sage', label: '規制産業オペレーション' },
        { tone: 'sage', label: 'プロセス設計・デリバリー' },
        { tone: 'terracotta', label: 'フルサイクルB2B営業' },
        { tone: 'terracotta', label: 'アカウントマネジメント・リテンション' },
        { tone: 'gold', label: '中小企業・公共セクター営業' },
        { tone: 'gold', label: 'コンサルティング営業・バリューセリング' },
        { tone: 'neutral', label: '異文化・バイリンガルコミュニケーション' },
        { tone: 'neutral', label: 'CRM・データドリブンな予測' },
      ],
      eduTitle: '学歴・資格',
      education: [
        { name: 'AML/KYC資格（ACAMS / ICAパスウェイ）', year: '取得中 · 2026年', strong: true },
        { name: '山口大学 言語学専攻 学士', year: '2009年' },
        { name: 'TESOL Certificate IV — International House Sydney', year: '2015年' },
        { name: '日本語教師養成講座 420時間修了 — World Japanese Language Centre', year: '2019年' },
        { name: '高等学校教諭免許 — 山口県教育委員会', year: '2009年' },
      ],
      footer: {
        title: 'すべての経歴を、1ページに。',
        body: '英文マスターレジュメをダウンロードいただくか、お気軽にお問い合わせください。',
        resume: '職務経歴書',
        contact: 'お問い合わせ',
        location: 'Mio Terasaki · メルボルン（VIC）',
      },
    },
    contact: {
      eyebrow: 'お問い合わせ · Nice to meet you',
      title: '日本語でも、英語でも。お気軽にどうぞ。',
      lede:
        'デリバリー/PM、カスタマーサクセス、AML/KYCオペレーションの採用をご検討中の方も、日本市場への展開を計画中の方も——英語・日本語どちらでも、いただいた言語でお返事します。',
      cards: {
        email: { title: 'メール', body: 'いちばん早く連絡がつく方法です。' },
        linkedin: { title: 'LinkedIn', body: 'つながり申請も、直接メッセージも歓迎です。' },
        call: {
          title: '面談を予約',
          body: 'メールで候補日時をお送りください。AEST・JSTどちらでも調整できます。',
          detail: 'メルボルン（AEST）',
        },
        resume: {
          title: '職務経歴書',
          body: '全職歴と実績をまとめた英文マスターレジュメです。',
          detail: 'PDF · 3ページ',
        },
      },
      languagesLabel: '対応言語：',
      languagesText:
        ' 日本語（ネイティブ）、英語（ビジネスレベルで流暢、読み書き・会話とも）。メルボルン（VIC）在住——APAC各タイムゾーンでのリモートワークに対応します。',
      location: 'Mio Terasaki · メルボルン（VIC）',
    },
  },
}
