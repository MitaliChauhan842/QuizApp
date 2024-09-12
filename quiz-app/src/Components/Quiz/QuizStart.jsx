import QuizIcon from "../../assets/quizicon.svg";
import '../QuizApp.css';

// eslint-disable-next-line react/prop-types
const QuizStart = ({ handleClickStart }) => {
return(
    <div className="container">
        <h1>Upraised</h1>
         <div className="circle">
        <img
        src={QuizIcon}
        alt="QUIZ" width="50" height="50"
        />
        </div>
        <button className="start-button" onClick={handleClickStart}>Start Quiz</button>
    </div>
)
};

export default QuizStart;