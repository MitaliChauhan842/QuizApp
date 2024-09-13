import PropTypes from "prop-types";
import _size from "lodash/size";

// components
import ProgressBar from "./ProgressBar";
import Question from "./Question/Questions";
import NextButton from "./NextButton";

// styles
import "../QuizApp.css";

const Questionnaire = ({
  questions,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  setUserAnswers,
  setQuizCompleted,
  userAnswers,
}) => {
  const dataLength = _size(questions);
  const currentQuestion = questions[currentQuestionIndex];

  const handleNext = () => {
    if (currentQuestionIndex < dataLength - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleAnswerChange = (questionId, optionId, checked) => {
    setUserAnswers((prevAnswers) => {
      const updatedAnswers = { ...prevAnswers };
      if (!updatedAnswers[questionId]) {
        updatedAnswers[questionId] = [];
      }
      if (checked) {
        if (!updatedAnswers[questionId].includes(optionId)) {
          updatedAnswers[questionId].push(optionId);
        }
      } else {
        updatedAnswers[questionId] = updatedAnswers[questionId].filter(
          (id) => id !== optionId
        );
      }
      return updatedAnswers;
    });
  };

  return (
    <div className="skill">
      <ProgressBar
        currentQuestionIndex={currentQuestionIndex}
        questions={questions}
      />
      <Question
        question={currentQuestion}
        userAnswers={userAnswers}
        handleAnswerChange={handleAnswerChange}
      />
      <NextButton handleNext={handleNext} />
    </div>
  );
};

Questionnaire.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
        })
      ).isRequired,
      correctAnswer: PropTypes.arrayOf(PropTypes.string).isRequired,
      type: PropTypes.oneOf(["single", "multiple"]).isRequired,
    })
  ).isRequired,
  currentQuestionIndex: PropTypes.number.isRequired,
  setCurrentQuestionIndex: PropTypes.func.isRequired,
  setUserAnswers: PropTypes.func.isRequired,
  setQuizCompleted: PropTypes.func.isRequired,
  userAnswers: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
    .isRequired,
};

Questionnaire.defaultProps = {
  questions: [],
  currentQuestionIndex: 0,
  userAnswers: {},
};

export default Questionnaire;
