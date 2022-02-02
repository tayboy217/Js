const quiz = [
  {
    question: 'リンゴは英語で？',
    answers: [
      'Apple',
      'Banana',
      'Cherry',
      'Durian'
    ],
    correct: 'Apple'
  }, {
    question: '好きは英語で？',
    answers: [
      'hate',
      'drink',
      'like',
      'eat'
    ],
    correct: 'like'
  }, {
    question: 'リンゴが好きは英語で？',
    answers: [
      'I hate an apple',
      'I want a banana',
      'I like an apple',
      'I eat a durian'
    ],
    correct: 'I like an apple'
  },
]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解!');
  }

  quizIndex++;

  if(quizIndex < quizLength) {
    //問題数がまだあればこちらを実行
    setupQuiz();
  }　else　{
    //問題数がもうなければこちらを実行
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
