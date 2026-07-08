const datasets = {
  koukyo: (() => {
const printPages = [
  { title: "No.8 幸福・正義・自由", src: "./assets/prints/koukyo-08.jpg" },
  { title: "No.9 人間の尊厳と平等", src: "./assets/prints/koukyo-09.jpg" },
  { title: "No.10 権利と自由・義務", src: "./assets/prints/koukyo-10.jpg" },
  { title: "No.11 民主政治の基本原理", src: "./assets/prints/koukyo-11.jpg" },
  { title: "No.12 民主政治のしくみ", src: "./assets/prints/koukyo-12.jpg" },
  { title: "No.13 世界の政治制度", src: "./assets/prints/koukyo-13.jpg" },
  { title: "No.14 日本国憲法", src: "./assets/prints/koukyo-14.jpg" }
];

const summary = [
  {
    title: "No.8 幸福と正義",
    body: "ベンサムの功利主義、ミルの質的功利主義、ロールズの公正としての正義、センの潜在能力、自由主義と共同体主義を扱う。"
  },
  {
    title: "No.9 人間の尊厳と平等",
    body: "カント、シュヴァイツァー、ガンディー、パスカル、寛容、マイノリティ、ジェンダー、アファーマティブ・アクションを確認する。"
  },
  {
    title: "No.10 権利・自由・義務",
    body: "権利と義務、自由と平等、公共の福祉、自由権、国民の義務、世代間の正義、環境倫理を整理する。"
  },
  {
    title: "No.11 民主政治の基本原理",
    body: "政治、国家、主権、政府、公共、社会契約説、ロック、法の支配、立憲主義など民主政治の土台を学ぶ。"
  },
  {
    title: "No.12 民主政治のしくみ",
    body: "国民主権、議会制民主主義、多数決原理、少数意見の尊重、権力分立、議院内閣制、大統領制を比較する。"
  },
  {
    title: "No.13 世界の政治制度",
    body: "中国、アジア、イスラム諸国の政治制度と、イギリス・アメリカの制度比較を確認する。"
  },
  {
    title: "No.14 日本国憲法",
    body: "明治憲法下の政治、日本国憲法の成立、国民主権、基本的人権の尊重、平和主義、最高法規性を扱う。"
  }
];

const questions = [
  q("No.8", "ベンサムが唱えた、できるだけ大きな幸福をもたらす行為を正しいとする立場は何か。", ["功利主義"], "fill"),
  q("No.8", "ベンサムの功利主義を象徴する言葉は何か。", ["最大多数の最大幸福"], "fill"),
  q("No.8", "快楽を数量化して考えるベンサムの功利主義を何というか。", ["量的功利主義"], "fill"),
  q("No.8", "ミルが重視した、快楽には質的な差があるという功利主義を何というか。", ["質的功利主義"], "fill"),
  q("No.8", "ミルが『満足した豚よりも、不満足な人間である方がよい』に続けて例に出した人物は誰か。", ["ソクラテス"], "fill"),
  q("No.8", "ミルが『自由論』で述べた、他者へ害を与えない限り自由を尊重すべきという原則は何か。", ["他者危害原則"], "fill"),
  q("No.8", "ロールズが著し、公正な社会の原理を考えた著作は何か。", ["正義論"], "fill"),
  q("No.8", "ロールズが、各人の立場を知らない状態として想定したものは何か。", ["無知のヴェール"], "fill"),
  q("No.8", "ロールズの正義論で、正義は何として考えられるか。", ["公正としての正義"], "fill"),
  q("No.8", "センが、選択して達成できる可能性を重視して用いた概念は何か。", ["潜在能力", "ケイパビリティ"], "fill"),
  q("No.8", "個人の自由を最も優先すべきだとする立場は何か。", ["リベラリズム", "自由主義"], "choice", ["リベラリズム", "コミュニタリアニズム", "権威主義", "開発独裁"]),
  q("No.8", "共同体で共有される善を重視する立場は何か。", ["コミュニタリアニズム", "共同体主義"], "choice", ["リバタリアニズム", "コミュニタリアニズム", "功利主義", "王権神授説"]),

  q("No.9", "人間を手段としてだけでなく目的として扱うべきだとする考えと関係が深い語句は何か。", ["人間の尊厳"], "fill"),
  q("No.9", "『生命への畏敬』を説いた人物は誰か。", ["シュヴァイツァー"], "fill"),
  q("No.9", "インド独立の父とされ、非暴力主義を唱えた人物は誰か。", ["ガンディー"], "fill"),
  q("No.9", "ガンディーが唱えた『真理の把握』を意味する非暴力抵抗の考えは何か。", ["サティヤーグラハ"], "fill"),
  q("No.9", "『人間は考える葦である』と述べた人物は誰か。", ["パスカル"], "fill"),
  q("No.9", "多数派の中で少数派の立場にある人々を何というか。", ["マイノリティ"], "fill"),
  q("No.9", "互いに違いを認め合い、受け入れる精神を何というか。", ["寛容"], "fill"),
  q("No.9", "性別によって作られた社会的・文化的役割を何というか。", ["ジェンダー"], "fill"),
  q("No.9", "男女が社会の対等な構成員として参画し、責任を担う社会を何というか。", ["男女共同参画社会"], "fill"),
  q("No.9", "過去の差別の不利益を是正するため、積極的な改善措置を行うことを何というか。", ["アファーマティブアクション", "アファーマティブ・アクション"], "fill"),
  q("No.9", "最終的な結果の差を小さくすることを重視する考えは何か。", ["結果の平等"], "choice", ["機会の平等", "結果の平等", "法の支配", "国民主権"]),

  q("No.10", "ある人が持つ正当な地位や利益を何というか。", ["権利"], "fill"),
  q("No.10", "権利と表裏一体の関係にある、果たすべき責任を何というか。", ["義務"], "fill"),
  q("No.10", "他からの拘束を受けず、自分の意思に従って行動できることを何というか。", ["自由"], "fill"),
  q("No.10", "互いに自由で対等な存在として扱われることを何というか。", ["平等"], "fill"),
  q("No.10", "日本国憲法12条で、自由や権利を保持するため常に何に利用する責任があるとされるか。", ["公共の福祉"], "fill"),
  q("No.10", "国家権力による侵害を受けない権利を何というか。", ["自由権"], "fill"),
  q("No.10", "自由権は国家からの何と説明されるか。", ["国家からの自由"], "fill"),
  q("No.10", "日本国憲法11条が国民に保障する、侵すことのできない永久の権利は何か。", ["基本的人権"], "fill"),
  q("No.10", "国民の三大義務をすべて答えなさい。", ["教育勤労納税", "教育を受けさせる義務勤労の義務納税の義務"], "text"),
  q("No.10", "将来世代への影響も考えて現在の自由や権利を考える視点を何というか。", ["世代間の正義"], "fill"),
  q("No.10", "共有地が各人の利益追求によって荒廃する問題を何というか。", ["共有地の悲劇"], "fill"),
  q("No.10", "地球全体と人間・自然の関係を考える学問領域は何か。", ["環境倫理学"], "fill"),

  q("No.11", "社会集団の利害の対立や争いを調整する努力や取り組みを何というか。", ["政治"], "fill"),
  q("No.11", "強制力による支配・調整の力を何というか。", ["権力", "統治権"], "fill"),
  q("No.11", "国家を成り立たせる三要素をすべて答えなさい。", ["領域国民主権", "領土国民主権"], "text"),
  q("No.11", "国内の統治権、対外的独立権、憲法制定権などを含む国家の最高権力を何というか。", ["主権"], "fill"),
  q("No.11", "国家権力の行使について意思決定し、執行する機関を何というか。", ["政府"], "fill"),
  q("No.11", "人々が自由かつ平等に意見交換できる場を何というか。", ["公共空間"], "fill"),
  q("No.11", "絶対王政を正当化した、王権は神から授けられたという考えを何というか。", ["王権神授説"], "fill"),
  q("No.11", "『リヴァイアサン』を著し、社会契約説を唱えた思想家は誰か。", ["ホッブズ"], "fill"),
  q("No.11", "人々が契約によって社会や国家を作るという考えを何というか。", ["社会契約説"], "fill"),
  q("No.11", "人民が政府に反した場合、人々が政府を変更する権利を何というか。", ["抵抗権", "革命権"], "fill"),
  q("No.11", "ロックが唱えた、政府は人民から権力を預けられているという考えを何というか。", ["信託の論理"], "fill"),
  q("No.11", "自由権は何からの自由と説明されるか。", ["国家からの自由"], "choice", ["国家からの自由", "国家による自由", "共同体による自由", "王による自由"]),
  q("No.11", "社会権は何による自由と説明されるか。", ["国家による自由"], "choice", ["国家からの自由", "国家による自由", "市場からの自由", "議会による自由"]),
  q("No.11", "法が権力よりも上位にあり、権力も法に従うべきだという原理は何か。", ["法の支配"], "fill"),
  q("No.11", "憲法によって権力を制限し、基本的人権を保障する考えを何というか。", ["立憲主義"], "fill"),

  q("No.12", "国民が集会などで直接政治的な決定を行う制度を何というか。", ["直接民主制"], "fill"),
  q("No.12", "国民が代表者を選び、その代表を通じて政治的決定を行う制度を何というか。", ["間接民主制"], "fill"),
  q("No.12", "国民代表による議会を組織して政治的意思決定を行う民主政治を何というか。", ["議会制民主主義"], "fill"),
  q("No.12", "合意形成のため、一定以上の賛成を持つ側に決める原理を何というか。", ["多数決原理"], "fill"),
  q("No.12", "多数決を使うときにも大切にすべき、少数派の考えを何というか。", ["少数意見の尊重"], "fill"),
  q("No.12", "選挙権の拡大によって成立した、一般大衆が政治に参加する民主政治を何というか。", ["大衆民主主義"], "fill"),
  q("No.12", "権力を分け、互いにチェックし合って権力の濫用を防ぐ仕組みを何というか。", ["権力分立"], "fill"),
  q("No.12", "権力分立で、権力同士が互いにチェックし合う関係を何というか。", ["抑制と均衡"], "fill"),
  q("No.12", "三権分立を主張した思想家は誰か。", ["モンテスキュー"], "fill"),
  q("No.12", "権利保障と権力分立がない社会は憲法を持たないとした宣言は何か。", ["フランス人権宣言"], "fill"),
  q("No.12", "イギリスの政治制度で、君主の権力が憲法や議会に制限される制度は何か。", ["立憲君主制"], "fill"),
  q("No.12", "イギリスで、議会の信任にもとづいて内閣が成立する制度は何か。", ["議院内閣制"], "fill"),
  q("No.12", "イギリスで下院第一党の党首が就く、内閣の中心となる役職は何か。", ["首相"], "fill"),
  q("No.12", "議会が内閣を退陣させるために持つ権限は何か。", ["内閣不信任決議権"], "fill"),
  q("No.12", "日本の議院内閣制で、内閣が衆議院を解散させる権限は何か。", ["解散権"], "fill"),
  q("No.12", "アメリカで、大統領と議会が別々に選ばれる政治制度は何か。", ["大統領制"], "fill"),
  q("No.12", "アメリカで、州と連邦政府が権限を分担する制度は何か。", ["連邦制"], "fill"),
  q("No.12", "アメリカ大統領が議会の法案に対して行使できる権限は何か。", ["拒否権"], "fill"),

  q("No.13", "中国で国家の最高機関とされる議会は何か。", ["全国人民代表大会"], "fill"),
  q("No.13", "中国で一党支配の中心となる政党は何か。", ["共産党", "中国共産党"], "fill"),
  q("No.13", "中国共産党の党の最高指導者が兼ね、首相とは別の権限を持つ国家の役職は何か。", ["国家主席"], "fill"),
  q("No.13", "発展途上国で、経済開発を名目に軍事政権や一党支配が行われる体制を何というか。", ["開発独裁"], "fill"),
  q("No.13", "民主化が不十分で、権力が強く集中する政治体制を何というか。", ["権威主義"], "fill"),
  q("No.13", "イランの政治で、最高指導者やイスラーム法が政治に強く関わる体制を何というか。", ["イスラーム共和制", "イスラム共和制", "イスラム共和国"], "fill"),
  q("No.13", "イギリスの制度図で、国王が首相に対して行う形式的な行為は何か。", ["任命"], "choice", ["任命", "拒否権", "違憲審査", "不信任"]),
  q("No.13", "アメリカの制度図で、法律が憲法に反していないかを判断する裁判所の権限は何か。", ["違憲審査権"], "fill"),

  q("No.14", "1889年に公布された大日本帝国憲法は、君主が定めて国民に与える何という種類の憲法か。", ["欽定憲法"], "fill"),
  q("No.14", "大日本帝国憲法で主権を持つとされたのは誰か。", ["天皇", "天皇主権"], "fill"),
  q("No.14", "民権が法律の範囲内で保障される考えを何というか。", ["法律の留保"], "fill"),
  q("No.14", "大正から昭和初期に一時的に進んだ立憲主義的な政治の流れを何というか。", ["大正デモクラシー"], "fill"),
  q("No.14", "1925年、25歳以上の男子に選挙権を認めた法律は何か。", ["普通選挙法"], "fill"),
  q("No.14", "1925年、国体変革や私有財産制否認を目的とする結社を禁じた法律は何か。", ["治安維持法"], "fill"),
  q("No.14", "敗戦後、日本を占領した連合国軍総司令部の略称は何か。", ["GHQ"], "fill"),
  q("No.14", "GHQの最高司令官は誰か。", ["マッカーサー"], "fill"),
  q("No.14", "日本国憲法は1946年11月3日に公布され、1947年5月3日に何されたか。", ["施行"], "fill"),
  q("No.14", "日本国憲法の三大原理に含まれないものはどれか。", ["天皇主権"], "choice", ["国民主権", "基本的人権の尊重", "平和主義", "天皇主権"]),
  q("No.14", "日本国憲法第1条で、天皇は日本国と日本国民統合の何とされるか。", ["象徴"], "fill"),
  q("No.14", "天皇が内閣の助言と承認により行うものは何か。", ["国事行為"], "fill"),
  q("No.14", "憲法に反する法律や命令は効力を持たないという性質を何というか。", ["最高法規性", "最高法規"], "fill"),
  q("No.14", "通常の法律より改正手続が厳しい憲法を何というか。", ["硬性憲法"], "fill")
];

function q(category, prompt, answers, type, choices = []) {
  return { category, prompt, answers, type, choices };
}
    return createDataset({
      id: "koukyo",
      title: "公共 No.8-14 学習アプリ",
      shortTitle: "公共",
      printLabel: "公共の授業プリント",
      printPages,
      summary,
      questions
    });
  })(),
  nihonshi: (() => {
const printPages = [
  page("No.11", "No.11 通貨と銀行", "./assets/prints/nihonshi/nihonshi-01.jpg"),
  page("No.12", "No.12 産業革命", "./assets/prints/nihonshi/nihonshi-02.jpg"),
  page("No.13", "No.13 鉄道と海運", "./assets/prints/nihonshi/nihonshi-03.jpg"),
  page("No.13", "No.13 貿易グラフ", "./assets/prints/nihonshi/nihonshi-04.jpg"),
  page("No.14", "No.14 農業と農民", "./assets/prints/nihonshi/nihonshi-05.jpg"),
  page("No.15", "No.15 明治の文化と宗教", "./assets/prints/nihonshi/nihonshi-06.jpg"),
  page("No.16", "No.16 教育の普及", "./assets/prints/nihonshi/nihonshi-07.jpg"),
  page("No.17", "No.17 科学の発達", "./assets/prints/nihonshi/nihonshi-08.jpg"),
  page("No.18", "No.18 明治の思想", "./assets/prints/nihonshi/nihonshi-09.jpg"),
  page("No.19", "No.19 日本人研究者", "./assets/prints/nihonshi/nihonshi-10.jpg"),
  page("No.20", "No.20 近代文学", "./assets/prints/nihonshi/nihonshi-11.jpg"),
  page("No.22", "No.22 明治の芸術", "./assets/prints/nihonshi/nihonshi-12.jpg")
];

const summary = [
  s("No.11 通貨と銀行", "太政官札、新貨条例、国立銀行条例、金禄公債証書、日本銀行、銀本位制、松方財政、寄生地主を中心に、明治政府の貨幣・金融制度を整理する。", "No.11"),
  s("No.12 産業革命", "日清戦争後の金本位制、紡績業・製糸業の発展、飛び杼・ガラ紡・豊田佐吉、横浜正金銀行や台湾銀行の役割を確認する。", "No.12"),
  s("No.13 鉄道と海運・重工業", "新橋・横浜間の鉄道、日本鉄道会社、鉄道国有法、日本郵船会社、三井・三菱などの財閥、八幡製鉄所と重工業形成を扱う。", "No.13"),
  s("No.14 農業と農民・労働運動", "寄生地主、小作農、足尾鉱毒事件、田中正造、労働組合期成会、友愛会、日本農民組合など社会運動の基礎を押さえる。", "No.14"),
  s("No.15 明治の文化と宗教", "文明開化、神仏分離令、廃仏毀釈、大教宣布の詔、禁教令、キリスト教解禁、内村鑑三・海老名弾正を確認する。", "No.15"),
  s("No.16 教育の普及", "学制、教育令、森有礼、学校令、教育勅語、国定教科書を軸に、近代学校制度の整備を整理する。", "No.16"),
  s("No.17 科学の発達", "お雇い外国人、ヘボン、モース、ボアソナード、ロエスレル、コンドルなど、欧米学問・技術の導入を確認する。", "No.17"),
  s("No.18 明治の思想", "福沢諭吉、中村正直、中江兆民、徳富蘇峰、三宅雪嶺、陸羯南など、啓蒙思想・自由民権・国民主義を扱う。", "No.18"),
  s("No.19 日本人研究者", "高山樗牛、北里柴三郎、志賀潔、高峰譲吉、秦佐八郎、大森房吉、木村栄、長岡半太郎、久米邦武を確認する。", "No.19"),
  s("No.20 近代文学", "仮名垣魯文、矢野龍渓、東海散士、坪内逍遥、二葉亭四迷、尾崎紅葉、森鴎外、樋口一葉などを作品名と結びつける。", "No.20"),
  s("No.22 明治の芸術", "工部美術学校、フェノロサ、岡倉天心、東京美術学校、日本美術院、高橋由一、黒田清輝、高村光雲、辰野金吾などを整理する。", "No.22")
];

const questions = [
  q("No.11", "明治初期に政府が発行した紙幣は何か。", ["太政官札"]),
  q("No.11", "第一国立銀行などの設立に関わった実業家は誰か。", ["渋沢栄一"]),
  q("No.11", "1871年に円・銭・厘を単位とする貨幣制度を定めた法令は何か。", ["新貨条例"]),
  q("No.11", "新貨条例で採用された本位制度は何か。", ["金本位制"]),
  q("No.11", "新貨条例で定められた三つの貨幣単位を答えよ。", ["円・銭・厘", "円銭厘"]),
  q("No.11", "1872年に国立銀行の設立を認めた条例は何か。", ["国立銀行条例"]),
  q("No.11", "明治政府が近代産業育成のために進めた政策を何というか。", ["殖産興業"]),
  q("No.11", "秩禄処分で華族・士族へ交付された公債は何か。", ["金禄公債証書", "金禄公債"]),
  q("No.11", "1877年に起こり、政府紙幣増発の一因となった反乱は何か。", ["西南戦争"]),
  q("No.11", "1881年に大蔵卿となり、紙幣整理を進めた人物は誰か。", ["松方正義"]),
  q("No.11", "1882年に設立された中央銀行は何か。", ["日本銀行"]),
  q("No.11", "1885年から日本銀行が発行した兌換銀行券は、当初どの金属と交換できたか。", ["銀"]),
  q("No.11", "銀と交換できる兌換銀行券を基礎とする制度を何というか。", ["銀本位制"]),
  q("No.11", "松方財政で土地を失い、地主から土地を借りて耕作する農民を何というか。", ["小作農"]),
  q("No.11", "土地を貸し小作料で生活する地主を何というか。", ["寄生地主"]),
  q("No.11", "松方財政による不況で農村に広がった政治運動は何か。", ["民権運動", "自由民権運動"]),
  q("No.11", "政府が官営工場などを民間へ売却した政策を何というか。", ["官営事業払下げ"]),
  q("No.11", "1880年代後半から民間企業の設立が盛んになった現象を何というか。", ["企業勃興"]),

  q("No.12", "日本で産業革命の中心となった軽工業の一つは何か。", ["紡績"]),
  q("No.12", "日本で産業革命が本格化した戦争後の時期は何戦争後か。", ["日清戦争"]),
  q("No.12", "1897年に金本位制を確立した法律は何か。", ["貨幣法"]),
  q("No.12", "金本位制の導入に利用された賠償金は、どの戦争の賠償金か。", ["日清戦争"]),
  q("No.12", "貿易金融を担った特殊銀行は何か。", ["横浜正金銀行"]),
  q("No.12", "台湾の金融・植民地経営に関わった特殊銀行は何か。", ["台湾銀行"]),
  q("No.12", "産業革命が最初に始まった国はどこか。", ["イギリス"]),
  q("No.12", "綿織物の生産を効率化した織機の部品・技術は何か。", ["飛び杼"]),
  q("No.12", "ガラ紡を発明した人物は誰か。", ["臥雲辰致"]),
  q("No.12", "1883年に設立され、日本の機械制綿糸紡績を発展させた会社は何か。", ["大阪紡績会社"]),
  q("No.12", "綿糸の生産・販売で結ばれた同業者の価格協定を何というか。", ["綿糸カルテル", "カルテル"]),
  q("No.12", "自動織機の発明で知られる人物は誰か。", ["豊田佐吉"]),
  q("No.12", "紡績業で原料の綿花輸入先となった南アジアの地域はどこか。", ["インド"]),
  q("No.12", "紡績業で原料の綿花輸入先となった北米の国はどこか。", ["アメリカ", "アメリカ合衆国"]),
  q("No.12", "生糸は日本が何を得るための重要な輸出品だったか。", ["外貨"]),
  q("No.12", "人力で繭から糸を取る従来の製糸法を何というか。", ["座繰製糸"]),
  q("No.12", "機械を用いて繭から糸を取る製糸法を何というか。", ["器械製糸"]),
  q("No.12", "日本の生糸輸出で重要な市場となった東アジアの国はどこか。", ["中国"]),

  q("No.13", "1872年に日本最初の鉄道が開通した区間はどこか。", ["新橋・横浜", "新橋横浜", "新橋・横浜間"]),
  q("No.13", "1881年に設立された代表的な私設鉄道会社は何か。", ["日本鉄道会社", "日本鉄道"]),
  q("No.13", "鉄道建設が急速に進むきっかけになった戦争は何か。", ["日清戦争"]),
  q("No.13", "1906年に主要私鉄17社を国有化した法律は何か。", ["鉄道国有法"]),
  q("No.13", "三菱の創業者で、海運業を発展させた人物は誰か。", ["岩崎弥太郎"]),
  q("No.13", "三菱と競争するため政府が支援して設立された海運会社は何か。", ["共同運輸会社"]),
  q("No.13", "1885年に三菱会社と共同運輸会社が合併して成立した会社は何か。", ["日本郵船会社", "日本郵船"]),
  q("No.13", "紡績業で大量に輸入された原料は何か。", ["綿花"]),
  q("No.13", "インド綿花の積出港として重要だった都市はどこか。", ["ボンベイ", "ムンバイ"]),
  q("No.13", "三井・三菱など、多くの産業を支配した大資本家集団を何というか。", ["財閥"]),
  q("No.13", "財閥の本社が子会社の株式を所有して支配する会社を何というか。", ["持株会社"]),
  q("No.13", "持株会社が所有して企業支配に用いたものは何か。", ["株式"]),
  q("No.13", "北九州にある代表的な炭田は何か。", ["筑豊炭田"]),
  q("No.13", "1901年に操業を開始した官営製鉄所は何か。", ["八幡製鉄所", "官営八幡製鉄所"]),
  q("No.13", "八幡製鉄所が鉄鉱石を得た中国の鉄山は何か。", ["大冶鉄山"]),
  q("No.13", "満州の炭田として日本の重工業に関係した炭田は何か。", ["撫順炭田"]),
  q("No.13", "1907年に設立された鉄鋼・兵器関連の企業は何か。", ["日本製鋼所"]),
  q("No.13", "工作機械の国産化に関わった代表的企業は何か。", ["池貝鉄工所"]),
  q("No.13", "重工業発展の契機となった20世紀初頭の戦争は何か。", ["日露戦争"]),

  q("No.14", "明治期の農村で副業として広がった、蚕を飼う産業は何か。", ["養蚕"]),
  q("No.14", "1880年代のデフレ政策を主導した財政政策を何というか。", ["松方財政"]),
  q("No.14", "小作料を収入源とする地主を何というか。", ["寄生地主"]),
  q("No.14", "製糸・紡績工場で多く働いた女性労働者を何というか。", ["女工"]),
  q("No.14", "横山源之助が労働者の実態を描いた著書は何か。", ["日本之下層社会"]),
  q("No.14", "農商務省が工場労働の実態を調査した報告書は何か。", ["職工事情"]),
  q("No.14", "栃木県を中心に鉱毒被害が広がった事件は何か。", ["足尾鉱毒事件"]),
  q("No.14", "足尾鉱毒事件で明治天皇へ直訴しようとした政治家は誰か。", ["田中正造"]),
  q("No.14", "1897年に労働組合結成をめざして作られた団体は何か。", ["労働組合期成会"]),
  q("No.14", "労働組合期成会の結成に関わった人物の一人は誰か。", ["高野房太郎"]),
  q("No.14", "労働組合期成会や社会主義運動に関わった人物の一人は誰か。", ["片山潜"]),
  q("No.14", "1900年に労働運動・社会運動を取り締まった法律は何か。", ["治安警察法"]),
  q("No.14", "1903年に幸徳秋水らが結成した社会主義団体は何か。", ["平民社"]),
  q("No.14", "1912年に鈴木文治が創立した労働者団体は何か。", ["友愛会"]),
  q("No.14", "友愛会を創立した人物は誰か。", ["鈴木文治"]),
  q("No.14", "友愛会が発展して改称した全国的な労働組合は何か。", ["日本労働総同盟"]),
  q("No.14", "1922年に結成された農民運動の全国組織は何か。", ["日本農民組合"]),
  q("No.14", "日本農民組合の結成に関わったキリスト教社会運動家は誰か。", ["賀川豊彦"]),

  q("No.15", "明治初期の西洋化を表す言葉は何か。", ["文明開化"]),
  q("No.15", "明治政府が国家祭祀の中心に置いた神道を何というか。", ["神社神道"]),
  q("No.15", "1868年に神道と仏教を分離するために出された法令は何か。", ["神仏分離令"]),
  q("No.15", "神道と仏教が混ざり合った信仰形態を何というか。", ["神仏習合"]),
  q("No.15", "神仏分離をきっかけに起こった仏教排斥運動は何か。", ["廃仏毀釈"]),
  q("No.15", "仏教界から神道国教化に反対した僧は誰か。", ["島地黙雷"]),
  q("No.15", "1870年に神道中心の国民教化を示した詔は何か。", ["大教宣布の詔", "大教宣布"]),
  q("No.15", "キリスト教を禁じた政策・法令を何というか。", ["禁教令"]),
  q("No.15", "1868年に掲げられ、キリスト教禁止も含んだ明治政府の高札は何か。", ["五榜の掲示"]),
  q("No.15", "札幌農学校で教えたアメリカ人教師は誰か。", ["クラーク", "W.S.クラーク", "ウィリアム・スミス・クラーク"]),
  q("No.15", "熊本洋学校で教えたアメリカ人教師は誰か。", ["ジェーンズ", "L.L.ジェーンズ", "リロイ・ランシング・ジェーンズ"]),
  q("No.15", "無教会主義で知られるキリスト教思想家は誰か。", ["内村鑑三"]),
  q("No.15", "熊本バンド出身のキリスト教指導者は誰か。", ["海老名弾正"]),
  q("No.15", "公娼制度の廃止を求めた運動を何というか。", ["廃娼運動"]),

  q("No.16", "1872年に公布された近代学校制度の基本法令は何か。", ["学制"]),
  q("No.16", "学制公布の理念を示した文書は何か。", ["被仰出書", "学制序文"]),
  q("No.16", "1879年に学制に代わって出された法令は何か。", ["教育令"]),
  q("No.16", "1885年に初代文部大臣となった人物は誰か。", ["森有礼"]),
  q("No.16", "明治初期の啓蒙思想家が結成した学術団体は何か。", ["明六社"]),
  q("No.16", "1886年に森有礼のもとで整備された学校制度の法令群は何か。", ["学校令"]),
  q("No.16", "1890年に出され、忠君愛国などを説いた教育方針は何か。", ["教育勅語"]),
  q("No.16", "1903年以降、国が編集・発行した小学校教科書を何というか。", ["国定教科書"]),
  q("No.16", "就学率上昇の妨げとなった、学校に納める費用は何か。", ["授業料"]),
  q("No.16", "貧しい家庭で子どもにも期待されたものは何か。", ["労働力"]),

  q("No.17", "明治政府が多くの医学・法学を学んだヨーロッパの国はどこか。", ["ドイツ"]),
  q("No.17", "憲法学で天皇主権説を唱えた法学者は誰か。", ["穂積八束"]),
  q("No.17", "ヘボンが編纂した英和・和英辞典は何か。", ["和英語林集成"]),
  q("No.17", "大森貝塚を発掘したアメリカ人動物学者は誰か。", ["モース", "E.S.モース", "エドワード・S・モース"]),
  q("No.17", "モースが発掘した東京の貝塚は何か。", ["大森貝塚"]),
  q("No.17", "民法典の起草に関わったフランス人法学者は誰か。", ["ボアソナード"]),
  q("No.17", "条約改正交渉を進めた外務卿で、鹿鳴館外交でも知られる人物は誰か。", ["井上馨"]),
  q("No.17", "大日本帝国憲法の起草に助言したドイツ人法学者は誰か。", ["ロエスレル"]),
  q("No.17", "フェノロサ・岡倉天心らが設立に関わった美術教育機関は何か。", ["東京美術学校"]),
  q("No.17", "鹿鳴館やニコライ堂などを設計したイギリス人建築家は誰か。", ["コンドル", "ジョサイア・コンドル"]),

  q("No.18", "『学問のすゝめ』で知られる啓蒙思想家は誰か。", ["福沢諭吉"]),
  q("No.18", "『西国立志編』を翻訳した啓蒙思想家は誰か。", ["中村正直"]),
  q("No.18", "自由主義経済を説いた『日本開化小史』の著者は誰か。", ["田口卯吉"]),
  q("No.18", "ルソーの思想を紹介し『民約訳解』を著した人物は誰か。", ["中江兆民"]),
  q("No.18", "中江兆民が翻訳紹介したルソーの社会契約論の訳書は何か。", ["民約訳解"]),
  q("No.18", "自由民権運動で活躍し、イギリス留学経験をもつ思想家は誰か。", ["馬場辰猪"]),
  q("No.18", "のちに国家主義的立場へ転じた進化論紹介者は誰か。", ["加藤弘之"]),
  q("No.18", "国会開設や憲法制定を求めた政治運動は何か。", ["自由民権運動"]),
  q("No.18", "政府高官や上流層に見られた西洋風生活・外交を何というか。", ["欧化"]),
  q("No.18", "徳富蘇峰が唱えた、庶民を基礎にした欧化主義は何か。", ["平民的欧化主義"]),
  q("No.18", "徳富蘇峰が創刊した雑誌は何か。", ["国民之友"]),
  q("No.18", "欧化主義への反発として日本固有の文化を守ろうとした主張は何か。", ["国粋保存主義"]),
  q("No.18", "日本国家の独立と統一を重視した思想を何というか。", ["国民主義"]),
  q("No.18", "政教社を結成し『日本人』を発行した人物の一人は誰か。", ["三宅雪嶺"]),
  q("No.18", "『日本風景論』で知られる国粋主義的思想家は誰か。", ["志賀重昂"]),
  q("No.18", "国粋保存主義を唱えた教育者・思想家は誰か。", ["杉浦重剛"]),
  q("No.18", "新聞『日本』を主宰した国民主義の言論人は誰か。", ["陸羯南"]),

  q("No.19", "雑誌『太陽』で活躍した文芸評論家は誰か。", ["高山樗牛"]),
  q("No.19", "高山樗牛が関わった総合雑誌は何か。", ["太陽"]),
  q("No.19", "高山樗牛が唱えた思想の一つは何か。", ["国家主義"]),
  q("No.19", "破傷風菌の純粋培養などで知られる医学者は誰か。", ["北里柴三郎"]),
  q("No.19", "赤痢菌を発見した細菌学者は誰か。", ["志賀潔"]),
  q("No.19", "アドレナリンの結晶化で知られる化学者は誰か。", ["高峰譲吉"]),
  q("No.19", "サルバルサンの開発に関わった医学者は誰か。", ["秦佐八郎"]),
  q("No.19", "地震学の発展に貢献した研究者は誰か。", ["大森房吉"]),
  q("No.19", "緯度変化のZ項を発見した天文学者は誰か。", ["木村栄"]),
  q("No.19", "土星型原子模型などで知られる物理学者は誰か。", ["長岡半太郎"]),
  q("No.19", "『神道は祭天の古俗』論文で筆禍事件となった歴史学者は誰か。", ["久米邦武"]),
  q("No.19", "岩倉使節団の記録として知られる久米邦武の著作は何か。", ["米欧回覧実記"]),
  q("No.19", "教育勅語の哲学的解釈などに関わった哲学者は誰か。", ["井上哲次郎"]),

  q("No.20", "江戸時代から続いた娯楽的な小説の系統を何というか。", ["戯作文学"]),
  q("No.20", "『安愚楽鍋』を書いた戯作者は誰か。", ["仮名垣魯文"]),
  q("No.20", "仮名垣魯文の文明開化風俗を描いた作品は何か。", ["安愚楽鍋"]),
  q("No.20", "政治小説が盛んになった背景の政治運動は何か。", ["自由民権運動"]),
  q("No.20", "政治小説『経国美談』の作者は誰か。", ["矢野龍渓"]),
  q("No.20", "矢野龍渓の政治小説は何か。", ["経国美談"]),
  q("No.20", "政治小説『佳人之奇遇』の作者は誰か。", ["東海散士"]),
  q("No.20", "東海散士の政治小説は何か。", ["佳人之奇遇"]),
  q("No.20", "坪内逍遥が主張した近代文学の立場は何か。", ["写実主義"]),
  q("No.20", "『小説神髄』を書いた文学者は誰か。", ["坪内逍遥"]),
  q("No.20", "坪内逍遥の文学論は何か。", ["小説神髄"]),
  q("No.20", "『浮雲』を書いた作家は誰か。", ["二葉亭四迷"]),
  q("No.20", "二葉亭四迷の言文一致体の小説は何か。", ["浮雲"]),
  q("No.20", "尾崎紅葉らが結成した文学結社は何か。", ["硯友社"]),
  q("No.20", "硯友社の中心作家で『多情多恨』を書いた人物は誰か。", ["尾崎紅葉"]),
  q("No.20", "尾崎紅葉の作品は何か。", ["多情多恨"]),
  q("No.20", "『運命』を書いた作家は誰か。", ["幸田露伴"]),
  q("No.20", "幸田露伴の作品は何か。", ["運命"]),
  q("No.20", "『舞姫』を書いた作家は誰か。", ["森鴎外"]),
  q("No.20", "森鴎外の作品は何か。", ["舞姫"]),
  q("No.20", "『たけくらべ』を書いた女性作家は誰か。", ["樋口一葉"]),
  q("No.20", "樋口一葉の代表作は何か。", ["たけくらべ"]),
  q("No.20", "『高野聖』などで知られる作家は誰か。", ["泉鏡花"]),
  q("No.20", "『不如帰』を書いた作家は誰か。", ["徳富蘆花", "徳富蘆花"]),

  q("No.22", "1876年に西洋美術教育のため設立された学校は何か。", ["工部美術学校"]),
  q("No.22", "洋画『鮭』を描いた画家は誰か。", ["高橋由一"]),
  q("No.22", "高橋由一の代表作は何か。", ["鮭"]),
  q("No.22", "洋画『収穫』を描いた画家は誰か。", ["浅井忠"]),
  q("No.22", "浅井忠の代表作は何か。", ["収穫"]),
  q("No.22", "日本美術の復興に尽力したアメリカ人は誰か。", ["フェノロサ", "アーネスト・フェノロサ"]),
  q("No.22", "東京美術学校の設立や日本美術院に関わった人物は誰か。", ["岡倉天心"]),
  q("No.22", "1887年に設立された日本美術の教育機関は何か。", ["東京美術学校"]),
  q("No.22", "岡倉天心らが1898年に創立した美術団体は何か。", ["日本美術院"]),
  q("No.22", "狩野芳崖の代表作は何か。", ["悲母観音"]),
  q("No.22", "『悲母観音』を描いた画家は誰か。", ["狩野芳崖"]),
  q("No.22", "菱田春草の代表作は何か。", ["黒き猫"]),
  q("No.22", "『黒き猫』を描いた画家は誰か。", ["菱田春草"]),
  q("No.22", "橋本雅邦の代表作は何か。", ["龍虎図"]),
  q("No.22", "『龍虎図』を描いた画家は誰か。", ["橋本雅邦"]),
  q("No.22", "横山大観の代表作は何か。", ["無我"]),
  q("No.22", "『無我』を描いた画家は誰か。", ["横山大観"]),
  q("No.22", "1889年に洋画家が結成した団体は何か。", ["明治美術会"]),
  q("No.22", "黒田清輝の代表作は何か。", ["湖畔"]),
  q("No.22", "『湖畔』を描いた洋画家は誰か。", ["黒田清輝"]),
  q("No.22", "青木繁の代表作は何か。", ["海の幸"]),
  q("No.22", "『海の幸』を描いた洋画家は誰か。", ["青木繁"]),
  q("No.22", "藤島武二の代表作は何か。", ["天平の面影"]),
  q("No.22", "『天平の面影』を描いた洋画家は誰か。", ["藤島武二"]),
  q("No.22", "和田英作の代表作は何か。", ["渡頭の夕暮"]),
  q("No.22", "『渡頭の夕暮』を描いた洋画家は誰か。", ["和田英作"]),
  q("No.22", "1907年に始まった文部省主催の美術展覧会は何か。", ["文部省美術展覧会", "文展"]),
  q("No.22", "高村光雲の代表作は何か。", ["老猿"]),
  q("No.22", "『老猿』を制作した彫刻家は誰か。", ["高村光雲"]),
  q("No.22", "荻原守衛の代表作は何か。", ["女"]),
  q("No.22", "『女』を制作した彫刻家は誰か。", ["荻原守衛", "荻原守衛"]),
  q("No.22", "東京駅の設計で知られる建築家は誰か。", ["辰野金吾"])
];

function page(category, title, src) {
  return { category, title, src };
}

function s(title, body, category) {
  return { title, body, category };
}

function q(category, prompt, answers, type = "fill", choices = []) {
  return { category, prompt, answers, type, choices };
}
    return createDataset({
      id: "nihonshi",
      title: "日本史探究 No.11-22 学習アプリ",
      shortTitle: "日本史探究",
      printLabel: "日本史探究の授業プリント",
      printPages,
      summary,
      questions
    });
  })()
};

let printPages = [];
let summary = [];
let questions = [];
let currentDataset = datasets.nihonshi;

function createDataset(dataset) {
  return {
    ...dataset,
    printPages: dataset.printPages.map((page) => ({
      ...page,
      category: page.category || page.title.split(" ")[0]
    })),
    summary: dataset.summary.map((item) => ({
      ...item,
      category: item.category || item.title.split(" ")[0]
    }))
  };
}

const state = {
  results: new Map(),
  zoom: 100,
  pinchStartDistance: 0,
  pinchStartZoom: 100,
  cardIndex: 0,
  cardRevealed: false,
  filter: "all",
  cardFilter: "all",
  printIndex: 0,
  datasetId: "nihonshi"
};

const elements = {
  appTitle: document.querySelector("#appTitle"),
  appSubject: document.querySelector("#appSubject"),
  subjectSelect: document.querySelector("#subjectSelect"),
  scoreText: document.querySelector("#scoreText"),
  summaryList: document.querySelector("#summaryList"),
  questionList: document.querySelector("#questionList"),
  categoryFilter: document.querySelector("#categoryFilter"),
  cardCategoryFilter: document.querySelector("#cardCategoryFilter"),
  printPageSelect: document.querySelector("#printPageSelect"),
  resetView: document.querySelector("#resetView"),
  printFrame: document.querySelector(".print-frame"),
  printImage: document.querySelector("#printImage"),
  cardPrompt: document.querySelector("#cardPrompt"),
  cardAnswer: document.querySelector("#cardAnswer"),
  flashCard: document.querySelector("#flashCard"),
  cardCount: document.querySelector("#cardCount")
};

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => switchView(tab.dataset.view));
});

elements.subjectSelect.addEventListener("change", (event) => applyDataset(event.target.value));
document.querySelector("#resetQuiz").addEventListener("click", resetQuiz);
elements.resetView.addEventListener("click", resetPrintView);
document.querySelector("#prevPrint").addEventListener("click", () => movePrint(-1));
document.querySelector("#nextPrint").addEventListener("click", () => movePrint(1));
document.querySelector("#prevCard").addEventListener("click", () => moveCard(-1));
document.querySelector("#nextCard").addEventListener("click", () => moveCard(1));
elements.flashCard.addEventListener("click", revealCard);
elements.flashCard.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    revealCard();
  }
});
elements.categoryFilter.addEventListener("change", (event) => {
  syncScope(event.target.value);
  renderQuestions();
  renderCard();
});
elements.cardCategoryFilter.addEventListener("change", (event) => {
  syncScope(event.target.value);
  renderQuestions();
  renderCard();
});
elements.printPageSelect.addEventListener("change", (event) => {
  state.printIndex = Number(event.target.value);
  syncScope(categoryForPrintIndex(state.printIndex), { includePrint: false });
  renderPrint();
  renderQuestions();
  renderCard();
});
elements.printFrame.addEventListener("touchstart", handlePrintTouchStart, { passive: false });
elements.printFrame.addEventListener("touchmove", handlePrintTouchMove, { passive: false });
elements.printFrame.addEventListener("touchend", resetPinchState);
elements.printFrame.addEventListener("touchcancel", resetPinchState);

function switchView(viewName) {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.view === viewName);
  });
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("active", view.id === `${viewName}View`);
  });
}

function setZoom(nextZoom) {
  state.zoom = Math.max(70, Math.min(220, nextZoom));
  elements.printImage.style.setProperty("--print-width", `${state.zoom}%`);
}

function getTouchDistance(touches) {
  const [first, second] = touches;
  return Math.hypot(first.clientX - second.clientX, first.clientY - second.clientY);
}

function handlePrintTouchStart(event) {
  if (event.touches.length !== 2) {
    return;
  }

  event.preventDefault();
  state.pinchStartDistance = getTouchDistance(event.touches);
  state.pinchStartZoom = state.zoom;
}

function handlePrintTouchMove(event) {
  if (event.touches.length !== 2 || !state.pinchStartDistance) {
    return;
  }

  event.preventDefault();
  const distance = getTouchDistance(event.touches);
  setZoom(state.pinchStartZoom * (distance / state.pinchStartDistance));
}

function resetPinchState() {
  state.pinchStartDistance = 0;
}

function movePrint(direction) {
  state.printIndex = (state.printIndex + direction + printPages.length) % printPages.length;
  syncScope(categoryForPrintIndex(state.printIndex), { includePrint: false });
  renderPrint();
  renderQuestions();
  renderCard();
}

function renderPrint() {
  const page = printPages[state.printIndex];
  elements.printImage.src = page.src;
  elements.printImage.alt = `${page.title} ${currentDataset.printLabel}`;
  elements.printPageSelect.value = String(state.printIndex);
}

function resetPrintView() {
  resetPinchState();
  setZoom(100);
  elements.printFrame.scrollLeft = 0;
  elements.printFrame.scrollTop = 0;
}

function categoryForPrintIndex(index) {
  return printPages[index].category;
}

function printIndexForCategory(category) {
  return printPages.findIndex((page) => page.category === category);
}

function syncScope(category, options = {}) {
  const includePrint = options.includePrint !== false;
  state.filter = category;
  state.cardFilter = category;
  elements.categoryFilter.value = category;
  elements.cardCategoryFilter.value = category;
  const firstIndex = questions.findIndex((item) => category === "all" || item.category === category);
  state.cardIndex = firstIndex === -1 ? 0 : firstIndex;
  state.cardRevealed = false;
  renderSummary();

  if (includePrint && category !== "all") {
    const nextPrintIndex = printIndexForCategory(category);
    if (nextPrintIndex !== -1) {
      state.printIndex = nextPrintIndex;
      renderPrint();
    }
  }
}

function resetQuiz() {
  state.results.clear();
  document.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });
  renderQuestions();
  updateScore();
}

function normalize(value) {
  return value
    .trim()
    .replace(/[\s　、。・,.\-ー－（）()「」『』]/g, "")
    .toLowerCase();
}

function isCorrect(value, answers) {
  const normalized = normalize(value);
  if (!normalized) {
    return false;
  }

  return answers.some((answer) => normalized === normalize(answer));
}

function renderSummary() {
  const filteredSummary = state.filter === "all" ? summary : summary.filter((item) => item.category === state.filter);
  elements.summaryList.innerHTML = filteredSummary
    .map(
      (item) => `
        <article class="summary-item">
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </article>
      `
    )
    .join("");
}

function renderFilters() {
  [elements.categoryFilter, elements.cardCategoryFilter].forEach((select) => {
    select.innerHTML = `<option value="all">全範囲</option>`;
  });
  const categories = [...new Set(questions.map((item) => item.category))];
  categories.forEach((category) => {
    [elements.categoryFilter, elements.cardCategoryFilter].forEach((select) => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      select.appendChild(option);
    });
  });
}

function renderPrintOptions() {
  elements.printPageSelect.innerHTML = printPages
    .map((page, index) => `<option value="${index}">${page.title}</option>`)
    .join("");
}

function renderQuestions() {
  const filtered = state.filter === "all" ? questions : questions.filter((item) => item.category === state.filter);
  elements.questionList.innerHTML = filtered
    .map((item) => {
      const index = questions.indexOf(item);
      const result = state.results.get(index);
      const feedbackClass = result === true ? "ok" : result === false ? "bad" : "";
      const feedbackText = result === true ? "正解" : result === false ? `答え: ${item.answers[0]}` : "";
      return `
        <article class="question">
          <header><span>Q${index + 1}</span><span>${item.category}</span></header>
          <p>${item.prompt}</p>
          ${renderAnswerControl(item, index)}
          <div class="feedback ${feedbackClass}" id="feedback-${index}">${feedbackText}</div>
        </article>
      `;
    })
    .join("");

  elements.questionList.querySelectorAll("[data-check]").forEach((button) => {
    button.addEventListener("click", () => checkInput(Number(button.dataset.check)));
  });
  elements.questionList.querySelectorAll("[data-choice]").forEach((button) => {
    button.addEventListener("click", () => checkChoice(Number(button.dataset.choice), button.textContent));
  });
  elements.questionList.querySelectorAll("input").forEach((input) => {
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        checkInput(Number(input.dataset.input));
      }
    });
  });
}

function renderAnswerControl(item, index) {
  if (item.type === "choice") {
    return `
      <div class="choices">
        ${item.choices.map((choice) => `<button type="button" data-choice="${index}">${choice}</button>`).join("")}
      </div>
    `;
  }

  return `
    <div class="answer-row">
      <input data-input="${index}" type="text" autocomplete="off" aria-label="Q${index + 1} の答え" />
      <button type="button" data-check="${index}">判定</button>
    </div>
  `;
}

function checkInput(index) {
  const input = elements.questionList.querySelector(`[data-input="${index}"]`);
  checkAnswer(index, input.value);
}

function checkChoice(index, value) {
  checkAnswer(index, value);
}

function checkAnswer(index, value) {
  const correct = isCorrect(value, questions[index].answers);
  state.results.set(index, correct);
  const feedback = document.querySelector(`#feedback-${index}`);
  feedback.className = `feedback ${correct ? "ok" : "bad"}`;
  feedback.textContent = correct ? "正解" : `答え: ${questions[index].answers[0]}`;
  updateScore();
}

function updateScore() {
  const correct = [...state.results.values()].filter(Boolean).length;
  elements.scoreText.textContent = `${correct} / ${questions.length}`;
}

function renderCard() {
  const cardItems = getCardItems();
  if (cardItems.length === 0) {
    elements.cardPrompt.textContent = "この範囲の暗記カードはありません。";
    elements.cardAnswer.textContent = "";
    elements.cardCount.textContent = "0 / 0";
    elements.flashCard.classList.remove("revealed");
    return;
  }

  let relativeIndex = cardItems.findIndex((item) => questions.indexOf(item) === state.cardIndex);
  if (relativeIndex === -1) {
    state.cardIndex = questions.indexOf(cardItems[0]);
    relativeIndex = 0;
  }

  const item = questions[state.cardIndex];
  elements.cardPrompt.textContent = item.prompt;
  elements.cardAnswer.textContent = item.answers[0];
  elements.cardCount.textContent = `${relativeIndex + 1} / ${cardItems.length} ・ ${item.category}`;
  elements.flashCard.classList.toggle("revealed", state.cardRevealed);
}

function revealCard() {
  state.cardRevealed = !state.cardRevealed;
  renderCard();
}

function moveCard(direction) {
  const cardItems = getCardItems();
  if (cardItems.length === 0) {
    return;
  }

  const currentIndex = cardItems.findIndex((item) => questions.indexOf(item) === state.cardIndex);
  const nextIndex = (Math.max(0, currentIndex) + direction + cardItems.length) % cardItems.length;
  state.cardIndex = questions.indexOf(cardItems[nextIndex]);
  state.cardRevealed = false;
  renderCard();
}

function getCardItems() {
  return state.cardFilter === "all" ? questions : questions.filter((item) => item.category === state.cardFilter);
}

function applyDataset(datasetId) {
  currentDataset = datasets[datasetId] || datasets.nihonshi;
  printPages = currentDataset.printPages;
  summary = currentDataset.summary;
  questions = currentDataset.questions;
  state.datasetId = currentDataset.id;
  state.results.clear();
  state.zoom = 100;
  state.cardIndex = 0;
  state.cardRevealed = false;
  state.filter = "all";
  state.cardFilter = "all";
  state.printIndex = 0;
  elements.subjectSelect.value = currentDataset.id;
  elements.appSubject.textContent = currentDataset.shortTitle;
  elements.appTitle.textContent = currentDataset.title;
  document.title = currentDataset.title;
  resetPinchState();
  setZoom(100);
  renderFilters();
  renderSummary();
  renderPrintOptions();
  renderPrint();
  renderQuestions();
  renderCard();
  updateScore();
}

applyDataset("nihonshi");

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch((error) => {
      console.warn("Service worker registration failed", error);
    });
  });
}
