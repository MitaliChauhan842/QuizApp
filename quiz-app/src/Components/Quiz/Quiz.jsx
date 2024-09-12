import { useState } from "react";

// hooks
import useFetchData from "../hooks/useFetchData";

import QuizStart from "./QuizStart";
import Questionnaire from "./Questionnaire";

//styles
import '../QuizApp.css';
import { EMPTY_OBJECT } from "../constants/quiz.constants";

const Quiz = () => {
    const [isStarted, setQuizStarted] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState(EMPTY_OBJECT);
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

    return (
        <div>
            {!isStarted ? (
                <QuizStart handleClickStart={handleQuizStart} />
            ) : (
                <Questionnaire
                 questions={questions}
                 currentQuestionIndex={currentQuestionIndex}
                 setCurrentQuestionIndex={setCurrentQuestionIndex}
                 setUserAnswers={setUserAnswers}
                  />
            )}
        </div>
    );
};

export default Quiz;
