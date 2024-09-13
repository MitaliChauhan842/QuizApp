import { useState } from "react";

// Hooks
import useFetchData from "../hooks/useFetchData";

// Components
import QuizStart from "./QuizStart";
import Questionnaire from "./Questionnaire";
import QuizReport from "./QuizReport";

// Styles
import "../QuizApp.css";
import { EMPTY_OBJECT } from "../constants/quiz.constants";

const Quiz = () => {
  const [isStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(EMPTY_OBJECT);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const { questions, loading, error } = useFetchData();

  const handleQuizStart = () => {
    setQuizStarted(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setQuizCompleted(false);
    setQuizStarted(true);
  };

  return (
    <div>
      {quizCompleted ? (
        <QuizReport
          questions={questions}
          userAnswers={userAnswers}
          handleRestart={handleRestart}
        />
      ) : !isStarted ? (
        <QuizStart handleClickStart={handleQuizStart} />
      ) : (
        <Questionnaire
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
          quizCompleted={quizCompleted}
          setQuizCompleted={setQuizCompleted}
        />
      )}
    </div>
  );
};

export default Quiz;
