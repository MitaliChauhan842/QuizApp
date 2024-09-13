import PropTypes from "prop-types";
import QuizIcon from "../../assets/quizicon.svg";
// styles
import "../QuizApp.css";

const QuizStart = ({ handleClickStart }) => {
  return (
    <div className="container">
      <h1>Upraised</h1>
      <div className="tag">
        <img src={QuizIcon} alt="QUIZ" width="100" height="100" />
      </div>
      <button className="start-button" onClick={handleClickStart}>
        Start Quiz
      </button>
    </div>
  );
};

QuizStart.propTypes = {
  handleClickStart: PropTypes.func.isRequired,
};

export default QuizStart;
