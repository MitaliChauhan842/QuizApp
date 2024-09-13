import PropTypes from "prop-types";
// styles
import "../QuizApp.css";

const NextButton = ({ handleNext }) => {
  return (
    <button className="next-button" onClick={handleNext}>
      Next
    </button>
  );
};

NextButton.propTypes = {
  handleNext: PropTypes.func.isRequired,
};

export default NextButton;
