// import Start from './components/Start';
// import Quiz from './components/Quiz';
// import Result from './components/Result';


const [quizs, setQuizs] = useState([]);
const [question, setQuesion] = useState({});
const [questionIndex, setQuestionIndex] = useState(0);
const [correctAnswer, setCorrectAnswer] = useState('');
const [selectedAnswer, setSelectedAnswer] = useState('');
const [marks, setMarks] = useState(0);


//startQuiz
const startQuiz = () => {
    setShowStart(false);
    setShowQuiz(true);
  }


//nextQuestion
  const nextQuestion = () => {
    setCorrectAnswer('');
    setSelectedAnswer('');
    const wrongBtn = document.querySelector('button.bg-danger');
    wrongBtn?.classList.remove('bg-danger');
    const rightBtn = document.querySelector('button.bg-success');
    rightBtn?.classList.remove('bg-success');
    setQuestionIndex(questionIndex + 1);
  }

//showTheResult
  const showTheResult = () => {
    setShowResult(true);
    setShowStart(false);
    setShowQuiz(false);
  }

//startOver
  const startOver = () => {
    setShowStart(false);
    setShowResult(false);
    setShowQuiz(true);
    setCorrectAnswer('');
    setSelectedAnswer('');
    setQuestionIndex(0);
    setMarks(0);
    const wrongBtn = document.querySelector('button.bg-danger');
    wrongBtn?.classList.remove('bg-danger');
    const rightBtn = document.querySelector('button.bg-success');
    rightBtn?.classList.remove('bg-success');
  }


