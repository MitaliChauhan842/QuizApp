import PropTypes from "prop-types";
//lodash
import _size from "lodash/size";

// styles
import "../QuizApp.css";

const ProgressBar = ({ currentQuestionIndex, questions }) => {
  const percentage = ((currentQuestionIndex + 1) / _size(questions)) * 100;
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  return (
    <div className="progress-container">
      <div className="outer">
        <div className="inner">
          <p>
            {currentQuestionIndex + 1} / {_size(questions)}
          </p>
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
  );
};

ProgressBar.propTypes = {
  currentQuestionIndex: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

ProgressBar.defaultProps = {
  currentQuestionIndex: 0,
  questions: [],
};

export default ProgressBar;
