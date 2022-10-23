const choice1 = document.getElementById("choice-1");
const choice2 = document.getElementById("choice-2");
const choice3 = document.getElementById("choice-3");
const feedbacks = document.getElementById("feedback");

const quiz = {
  text: "マンドリンはどれでしょう？",
  choices: [
    {
      text: "左",
      feedback: "残念！これはバラライカでロシアの代表的な弦楽器です！",
    },
    {
      text: "中",
      feedback:
        "残念！これはチャランゴで、南米アンデス地方の民族音楽に使われる弦楽器です！",
    },
    {
      text: "右",
      feedback: "正解！マンドリンはイタリア生まれの弦楽器です！",
    },
  ],
};

const reloadQuiz = function () {
  choice1.textContent = quiz.choices[0].text;
  choice2.textContent = quiz.choices[1].text;
  choice3.textContent = quiz.choices[2].text;
};

const choose = function (choiceNumber) {
  feedbacks.textContent = quiz.choices[choiceNumber].feedback;
};
choice1.onclick = function () {
  choose(0);
};

choice2.onclick = function () {
  choose(1);
};
choice3.onclick = function () {
  choose(2);
};

reloadQuiz();
