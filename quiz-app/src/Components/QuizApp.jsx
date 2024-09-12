import React, { useState, useEffect } from 'react';
import './QuizApp.css'; // Import the CSS file for styling

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    // Simulate API call
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setQuestions(data.questions))
      .catch(error => console.error('Error fetching quiz data:', error));
  }, []);

  const startQuiz = () => setQuizStarted(true);

  const handleAnswerChange = (questionId, optionId, isChecked) => {
    setUserAnswers(prevAnswers => {
      const answers = { ...prevAnswers };
      if (questions.find(q => q.id === questionId).type === 'single') {
        answers[questionId] = isChecked ? [optionId] : [];
      } else {
        if (!answers[questionId]) answers[questionId] = [];
        if (isChecked) {
          answers[questionId].push(optionId);
        } else {
          answers[questionId] = answers[questionId].filter(id => id !== optionId);
        }
      }
      return answers;
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setQuizCompleted(false);
    setQuizStarted(true);
  };

  const calculateScore = () => {
    return questions.reduce((score, question) => {
      const userAnswer = userAnswers[question.id] || [];
      if (JSON.stringify(userAnswer.sort()) === JSON.stringify(question.correctAnswer.sort())) {
        score++;
      }
      return score;
    }, 0);
  };

  const renderOptions = (question) => {
    return question.options.map(option => (
      <li key={option.id}>
        <label>
          <input
            type={question.type === 'single' ? 'radio' : 'checkbox'}
            name={question.id}
            checked={userAnswers[question.id]?.includes(option.id) || false}
            onChange={(e) => handleAnswerChange(question.id, option.id, e.target.checked)}
          />
          {option.text}
        </label>
      </li>
    ));
  };

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  if (!quizStarted) {
    return (
      <div className="quiz-container">
        <div className="header">
          <h1>Company Name</h1>
        </div>
        <div className="circle">
          <h2>Quiz</h2>
        </div>
        <button className="start-button" onClick={startQuiz}>Start Quiz</button>
      </div>
    );
  }

  if (quizCompleted) {
    const score = calculateScore();
    return (
      <div className="quiz-container">
        <div className="header">
          <h1>Company Name</h1>
        </div>
        <div className="circle">
          <h2>Quiz Completed</h2>
          <p>Score: {score} / {questions.length}</p>
          <button className="restart-button" onClick={handleRestart}>Restart Quiz</button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="header">
        <h1>Company Name</h1>
        <div className="progress-circle">
          <svg viewBox="0 0 100 100" className="progress-svg">
            <circle cx="50" cy="50" r="45" className="progress-background" />
            <circle
              cx="50"
              cy="50"
              r="45"
              className="progress-foreground"
              strokeDasharray={`${progress} ${100 - progress}`}
            />
          </svg>
          <div className="progress-text">
            <p>{currentQuestionIndex + 1} / {questions.length}</p>
          </div>
        </div>
      </div>
      <div className="question">
        <h2>{currentQuestion.text}</h2>
        <ul>
          {renderOptions(currentQuestion)}
        </ul>
      </div>
      <button className="next-button" onClick={handleNext}>Next</button>
    </div>
  );
};

export default Quiz;
