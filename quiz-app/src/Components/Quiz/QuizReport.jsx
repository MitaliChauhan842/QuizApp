import PropTypes from "prop-types";

// lodash
import _size from "lodash/size";

// styles
import "../QuizApp.css";

const QuizReport = ({ questions, userAnswers, handleRestart }) => {
  const totalQuestions = _size(questions);

  const scores = (() => {
    return questions.reduce(
      (scores, question) => {
        const userAnswer = userAnswers[question.id] || [];
        if (
          JSON.stringify(userAnswer.sort()) ===
          JSON.stringify(question.correctAnswer.sort())
        ) {
          scores.correct++;
        } else {
          scores.incorrect++;
        }
        return scores;
      },
      {
        incorrect: 0,
        correct: 0,
      }
    );
  })();

  const percentage = totalQuestions
    ? (scores.correct / totalQuestions) * 100
    : 0;

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="container progress">
      <div className="title">Your Result</div>
      {totalQuestions === 0 ? (
        <p>Loading....</p>
      ) : (
        <>
          <div className="progress-container">
            <div className="outer">
              <div className="inner">
                <p>{Math.floor(percentage)}%</p>
              </div>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px">
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stopColor="#e91e63" />
                  <stop offset="100%" stopColor="#673ab7" />
                </linearGradient>
              </defs>
              <circle
                cx="80"
                cy="80"
                r="70"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
              />
            </svg>
          </div>
          <div className="score-container">
            <div className="score incorrect">
              <div className="circle red"></div>
              {`${scores.incorrect} Incorrect`}
            </div>
            <div className="score correct">
              <div className="circle green"></div>
              {`${scores.correct} Correct`}
            </div>
            <button className="restart-button" onClick={handleRestart}>
              Start Again
            </button>
          </div>
        </>
      )}
    </div>
  );
};

QuizReport.defaultProps = {
  questions: [],
  userAnswers: {},
  handleRestart: () => {},
};

QuizReport.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      correctAnswer: PropTypes.array.isRequired,
    })
  ).isRequired,
  userAnswers: PropTypes.objectOf(PropTypes.array).isRequired,
  handleRestart: PropTypes.func.isRequired,
};

export default QuizReport;
