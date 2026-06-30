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
  q("No.8", "個人の自由を最も優先すべきだとする立場は何か。", ["リベラリズム"], "choice", ["リベラリズム", "コミュニタリアニズム", "権威主義", "開発独裁"]),
  q("No.8", "共同体で共有される善を重視する立場は何か。", ["コミュニタリアニズム"], "choice", ["リバタリアニズム", "コミュニタリアニズム", "功利主義", "王権神授説"]),

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
  q("No.10", "日本国憲法13条で、自由や権利を保持するため常に何に利用する責任があるとされるか。", ["公共の福祉"], "fill"),
  q("No.10", "国家権力による侵害を受けない権利を何というか。", ["自由権"], "fill"),
  q("No.10", "自由権は国家からの何と説明されるか。", ["国家からの自由"], "fill"),
  q("No.10", "日本国憲法11条が国民に保障する、侵すことのできない永久の権利は何か。", ["基本的人権"], "fill"),
  q("No.10", "国民の三大義務をすべて答えなさい。", ["教育勤労納税", "教育を受けさせる義務勤労の義務納税の義務"], "text"),
  q("No.10", "将来世代への影響も考えて現在の自由や権利を考える視点を何というか。", ["世代間の正義"], "fill"),
  q("No.10", "共有地が各人の利益追求によって荒廃する問題を何というか。", ["共有地の悲劇"], "fill"),
  q("No.10", "地球全体と人間・自然の関係を考える学問領域は何か。", ["環境倫理学"], "fill"),

  q("No.11", "社会集団の利害の対立や争いを調整する努力や取り組みを何というか。", ["政治"], "fill"),
  q("No.11", "強制力による支配・調整の力を何というか。", ["権力", "統治権"], "fill"),
  q("No.11", "国家を成り立たせる三要素をすべて答えなさい。", ["領土国民主権"], "text"),
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
  q("No.12", "内閣が議会を解散させる権限は何か。", ["解散権"], "fill"),
  q("No.12", "アメリカで、大統領と議会が別々に選ばれる政治制度は何か。", ["大統領制"], "fill"),
  q("No.12", "アメリカで、州と連邦政府が権限を分担する制度は何か。", ["連邦制"], "fill"),
  q("No.12", "アメリカ大統領が議会の法案に対して行使できる権限は何か。", ["拒否権"], "fill"),

  q("No.13", "中国で国家の最高機関とされる議会は何か。", ["全国人民代表大会"], "fill"),
  q("No.13", "中国で一党支配の中心となる政党は何か。", ["共産党", "中国共産党"], "fill"),
  q("No.13", "中国共産党の党の最高指導者が兼ね、首相とは別の権限を持つ国家の役職は何か。", ["国家主席"], "fill"),
  q("No.13", "発展途上国で、経済開発を名目に軍事政権や一党支配が行われる体制を何というか。", ["開発独裁"], "fill"),
  q("No.13", "民主化が不十分で、権力が強く集中する政治体制を何というか。", ["権威主義"], "fill"),
  q("No.13", "イランの政治で、最高指導者やイスラム法が政治に強く関わる体制を何というか。", ["イスラム法体制", "イスラム法"], "fill"),
  q("No.13", "イギリスの制度図で、国王が政治的に中立で象徴的に行う行為は何か。", ["任命"], "choice", ["任命", "拒否権", "違憲審査", "不信任"]),
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

const state = {
  results: new Map(),
  zoom: 100,
  cardIndex: 0,
  cardRevealed: false,
  filter: "all",
  printIndex: 0
};

const elements = {
  scoreText: document.querySelector("#scoreText"),
  summaryList: document.querySelector("#summaryList"),
  questionList: document.querySelector("#questionList"),
  categoryFilter: document.querySelector("#categoryFilter"),
  printPageSelect: document.querySelector("#printPageSelect"),
  printImage: document.querySelector("#printImage"),
  cardPrompt: document.querySelector("#cardPrompt"),
  cardAnswer: document.querySelector("#cardAnswer"),
  flashCard: document.querySelector("#flashCard"),
  cardCount: document.querySelector("#cardCount")
};

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => switchView(tab.dataset.view));
});

document.querySelector("#zoomIn").addEventListener("click", () => setZoom(state.zoom + 12));
document.querySelector("#zoomOut").addEventListener("click", () => setZoom(state.zoom - 12));
document.querySelector("#resetQuiz").addEventListener("click", resetQuiz);
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
  state.filter = event.target.value;
  renderQuestions();
});
elements.printPageSelect.addEventListener("change", (event) => {
  state.printIndex = Number(event.target.value);
  renderPrint();
});

function switchView(viewName) {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.view === viewName);
  });
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("active", view.id === `${viewName}View`);
  });
}

function setZoom(nextZoom) {
  state.zoom = Math.max(60, Math.min(180, nextZoom));
  elements.printImage.style.setProperty("--print-width", `${state.zoom}%`);
}

function movePrint(direction) {
  state.printIndex = (state.printIndex + direction + printPages.length) % printPages.length;
  renderPrint();
}

function renderPrint() {
  const page = printPages[state.printIndex];
  elements.printImage.src = page.src;
  elements.printImage.alt = `${page.title} の授業プリント`;
  elements.printPageSelect.value = String(state.printIndex);
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
    .replace(/[ 　、。・,\.]/g, "")
    .replace(/[（）()]/g, "")
    .toLowerCase();
}

function isCorrect(value, answers) {
  const normalized = normalize(value);
  if (!normalized) {
    return false;
  }

  return answers.some((answer) => {
    const expected = normalize(answer);
    return normalized === expected || normalized.includes(expected);
  });
}

function renderSummary() {
  elements.summaryList.innerHTML = summary
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
  const categories = [...new Set(questions.map((item) => item.category))];
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    elements.categoryFilter.appendChild(option);
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
  const item = questions[state.cardIndex];
  elements.cardPrompt.textContent = item.prompt;
  elements.cardAnswer.textContent = item.answers[0];
  elements.cardCount.textContent = `${state.cardIndex + 1} / ${questions.length}`;
  elements.flashCard.classList.toggle("revealed", state.cardRevealed);
}

function revealCard() {
  state.cardRevealed = !state.cardRevealed;
  renderCard();
}

function moveCard(direction) {
  state.cardIndex = (state.cardIndex + direction + questions.length) % questions.length;
  state.cardRevealed = false;
  renderCard();
}

renderSummary();
renderFilters();
renderPrintOptions();
renderPrint();
renderQuestions();
renderCard();
updateScore();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch((error) => {
      console.warn("Service worker registration failed", error);
    });
  });
}
