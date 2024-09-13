import PropTypes from "prop-types";
// styles
import "./Question.css";

const Question = ({ question, userAnswers, handleAnswerChange }) => {
  const renderOptions = (question) => {
    return question.options.map((option) => (
      <div key={option.id} className="option-container">
        <input
          type={question.type === "single" ? "radio" : "checkbox"}
          name={question.id}
          checked={userAnswers[question.id]?.includes(option.id) || false}
          onChange={(e) =>
            handleAnswerChange(question.id, option.id, e.target.checked)
          }
        />
        <label>{option.text}</label>
      </div>
    ));
  };

  return (
    <div className="question">
      <h2>{question.text}</h2>
      {question.image && (
        <div className="image-container">
          <img
            src={question.image}
            alt="Question Visual"
            className="question-image"
          />
        </div>
      )}
      <div className="options-container">{renderOptions(question)}</div>
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
    correctAnswer: PropTypes.arrayOf(PropTypes.string).isRequired,
    type: PropTypes.oneOf(["single", "multi"]).isRequired,
    image: PropTypes.string,
  }).isRequired,
  userAnswers: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
    .isRequired,
  handleAnswerChange: PropTypes.func.isRequired,
};

export default Question;
