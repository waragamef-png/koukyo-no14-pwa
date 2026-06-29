const summary = [
  {
    title: "明治憲法下の政治",
    body: "1889年に大日本帝国憲法が公布された。欽定憲法で、天皇主権、天皇大権、外見的立憲主義が特徴。民権は法律の範囲内で保障された。"
  },
  {
    title: "大正デモクラシーと統制",
    body: "大正から昭和初期にかけて政党政治が進み、1918年に原敬内閣、1925年に普通選挙法が成立した。一方で治安維持法により思想・言論への統制も強まった。"
  },
  {
    title: "日本国憲法の成立",
    body: "敗戦後、ポツダム宣言受諾、GHQによる占領、マッカーサー草案を経て、第90帝国議会で修正・可決された。1946年11月3日公布、1947年5月3日施行。"
  },
  {
    title: "日本国憲法の三大原理",
    body: "日本国憲法は国民主権、基本的人権の尊重、平和主義を基本原理とする。天皇は象徴であり、国政に関する権能を持たない。"
  },
  {
    title: "最高法規性と憲法改正",
    body: "憲法は国の最高法規であり、反する法律などは効力を持たない。改正は厳格な手続を必要とする硬性憲法で、国会発議と国民投票を経る。"
  }
];

const questions = [
  q("成立", "1889年に公布された大日本帝国憲法は、君主が定めて国民に与える何という種類の憲法か。", ["欽定憲法"], "fill"),
  q("成立", "大日本帝国憲法で主権を持つとされたのは誰か。", ["天皇", "天皇主権"], "fill"),
  q("成立", "大日本帝国憲法では、陸海軍の統帥権は何に含まれるとされたか。", ["天皇大権", "統帥権"], "fill"),
  q("成立", "民権は『法律ノ範囲内ニ於テ』保障された。このような保障のあり方を何というか。", ["法律の留保"], "fill"),
  q("成立", "明治憲法は立憲主義の外見を持つが、実質的には絶対主義的性格が強かった。この状態を何というか。", ["外見的立憲主義"], "fill"),
  q("成立", "大正から昭和初期に一時的に実現した立憲主義的な政治の流れを何というか。", ["大正デモクラシー"], "fill"),
  q("成立", "1925年、25歳以上の男子に選挙権を認めた法律は何か。", ["普通選挙法"], "fill"),
  q("成立", "1925年、国体の変革や私有財産制の否認を目的とする結社を禁じた法律は何か。", ["治安維持法"], "fill"),
  q("成立", "日本は1945年に何を受諾して敗戦したか。", ["ポツダム宣言"], "fill"),
  q("成立", "日本を占領した連合国軍総司令部の略称は何か。", ["GHQ"], "fill"),
  q("成立", "GHQの最高司令官は誰か。", ["マッカーサー"], "fill"),
  q("成立", "日本国憲法の原案作成に強く影響したGHQ案を何というか。", ["マッカーサー草案"], "fill"),
  q("成立", "日本国憲法は民衆が制定権力を持つという意味で、何という種類の憲法か。", ["民定憲法"], "choice", ["欽定憲法", "民定憲法", "協約憲法", "不文憲法"]),
  q("基本原理", "日本国憲法の三大原理に含まれないものはどれか。", ["天皇主権"], "choice", ["国民主権", "基本的人権の尊重", "平和主義", "天皇主権"]),
  q("基本原理", "日本国憲法第1条で、天皇は日本国と日本国民統合の何とされるか。", ["象徴"], "fill"),
  q("基本原理", "天皇は国政に関する権能を持たず、内閣の助言と承認により何のみを行うか。", ["国事行為"], "fill"),
  q("基本原理", "基本的人権は、侵すことのできない何の権利とされるか。", ["永久の権利"], "fill"),
  q("基本原理", "憲法第13条では、すべて国民は何として尊重されると定めているか。", ["個人"], "fill"),
  q("基本原理", "憲法第9条が定める三つを答えなさい。", ["戦争の放棄、戦力の不保持、交戦権の否認", "戦争の放棄 戦力の不保持 交戦権の否認"], "text"),
  q("基本原理", "日本国憲法が『恒久の平和を念願』し、『平和のうちに生存する権利』を確認する原理は何か。", ["平和主義"], "fill"),
  q("最高法規", "憲法に反する法律・命令・詔勅などは効力を持たない。この性質を何というか。", ["最高法規性", "最高法規"], "fill"),
  q("最高法規", "天皇、国務大臣、国会議員、裁判官などの公務員には何の義務があるか。", ["憲法尊重擁護義務", "尊重擁護義務"], "fill"),
  q("最高法規", "通常の法律より改正手続が厳しい憲法を何というか。", ["硬性憲法"], "choice", ["軟性憲法", "硬性憲法", "欽定憲法", "不文憲法"]),
  q("最高法規", "憲法改正原案を審査し、憲法改正発議に関わる国会の機関は何か。", ["憲法審査会"], "fill")
];

function q(category, prompt, answers, type, choices = []) {
  return { category, prompt, answers, type, choices };
}

const state = {
  results: new Map(),
  zoom: 100,
  cardIndex: 0,
  cardRevealed: false,
  filter: "all"
};

const elements = {
  scoreText: document.querySelector("#scoreText"),
  summaryList: document.querySelector("#summaryList"),
  questionList: document.querySelector("#questionList"),
  categoryFilter: document.querySelector("#categoryFilter"),
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
    .replace(/[（）]/g, "")
    .toLowerCase();
}

function isCorrect(value, answers) {
  const normalized = normalize(value);
  return answers.some((answer) => {
    const expected = normalize(answer);
    return normalized === expected || normalized.includes(expected) || expected.includes(normalized);
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
