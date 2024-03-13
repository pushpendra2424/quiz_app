import { useState } from "react";
import "./App.css";
import question from "./constant/question.json";
import Question from "./Components/question";
import Result from "./Components/Result";
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleNextQuestion = (isCurrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswers([...userAnswers, isCurrect]);
  };
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };
  // keep all of the logic in App.jsx

  return (
    <div>
      <h1>World quiz</h1>

      {/* Question component */}
      {currentQuestion < question.length && (
        <Question
          question={question[currentQuestion]}
          onAnswerClick={handleNextQuestion}
        />
      )}
      {/* Result Component */}
      {currentQuestion === question.length && (
        <Result
          userAnswers={userAnswers}
          questions={question}
          resetQuiz={resetQuiz}
        />
      )}
    </div>
  );
}

export default App;
