import React, { useState } from 'react';

const Survey = ({ onComplete }) => {
  // Leadership questions with 5-point Likert scale
  const questions = [
    {
      id: 1,
      question: "I inspire and motivate others to achieve common goals",
      category: "Leadership"
    },
    {
      id: 2,
      question: "I make decisions quickly and confidently when needed",
      category: "Leadership"
    },
    {
      id: 3,
      question: "I actively seek feedback to improve my leadership skills",
      category: "Leadership"
    },
    {
      id: 4,
      question: "I communicate my vision clearly to team members",
      category: "Leadership"
    },
    {
      id: 5,
      question: "I adapt my leadership style to different situations",
      category: "Leadership"
    },
    {
      id: 6,
      question: "I build strong relationships with team members",
      category: "Leadership"
    },
    {
      id: 7,
      question: "I encourage innovation and creative thinking in my team",
      category: "Leadership"
    },
    {
      id: 8,
      question: "I take responsibility for both successes and failures",
      category: "Leadership"
    },
    {
      id: 9,
      question: "I resolve conflicts effectively within my team",
      category: "Leadership"
    },
    {
      id: 10,
      question: "I continuously develop my leadership capabilities",
      category: "Leadership"
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const options = [
    { label: "Strongly Agree", value: 5, color: "#10B981" },
    { label: "Agree", value: 4, color: "#3B82F6" },
    { label: "Neutral", value: 3, color: "#F59E0B" },
    { label: "Disagree", value: 2, color: "#EF4444" },
    { label: "Strongly Disagree", value: 1, color: "#DC2626" }
  ];

  const handleAnswerSelect = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
    const maxScore = questions.length * 5;
    const percentage = Math.round((totalScore / maxScore) * 100);

    return {
      total: totalScore,
      max: maxScore,
      percentage: percentage,
      average: Math.round((totalScore / questions.length) * 10) / 10
    };
  };

  const getScoreInterpretation = (percentage) => {
    if (percentage >= 90) return "Exceptional Leader";
    if (percentage >= 80) return "Strong Leader";
    if (percentage >= 70) return "Good Leader";
    if (percentage >= 60) return "Developing Leader";
    return "Emerging Leader";
  };

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="survey-container">
        <div className="results-container">
          <h2>Survey Complete!</h2>
          <div className="score-summary">
            <div className="score-circle">
              <span className="score-percentage">{score.percentage}%</span>
              <span className="score-label">{getScoreInterpretation(score.percentage)}</span>
            </div>
            <div className="score-details">
              <p>Total Score: {score.total}/{score.max}</p>
              <p>Average Score: {score.average}/5</p>
            </div>
          </div>
          <div className="answers-summary">
            <h3>Your Responses:</h3>
            {questions.map((q) => (
              <div key={q.id} className="answer-item">
                <span className="question-text">{q.question}</span>
                <span className="answer-score">
                  {answers[q.id]}/5 - {options.find(opt => opt.value === answers[q.id])?.label}
                </span>
              </div>
            ))}
          </div>
          <div className="action-buttons">
            <button
              className="btn-secondary"
              onClick={() => {
                setCurrentQuestionIndex(0);
                setAnswers({});
                setShowResults(false);
              }}
            >
              Take Survey Again
            </button>
            <button
              className="btn-primary"
              onClick={onComplete}
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="survey-container">
      <div className="survey-header">
        <h2>Category 1: Leadership Assessment</h2>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <span className="progress-text">
          Question {currentQuestionIndex + 1} of {questions.length}
        </span>
      </div>

      <div className="question-container">
        <h3>{currentQuestion.question}</h3>

        <div className="options-container">
          {options.map((option) => (
            <button
              key={option.value}
              className={`option-button ${
                answers[currentQuestion.id] === option.value ? 'selected' : ''
              }`}
              style={{
                borderColor: answers[currentQuestion.id] === option.value ? option.color : '#DEDEDE',
                backgroundColor: answers[currentQuestion.id] === option.value ? `${option.color}20` : 'transparent'
              }}
              onClick={() => handleAnswerSelect(currentQuestion.id, option.value)}
            >
              <span className="option-label">{option.label}</span>
              <span className="option-value">({option.value})</span>
            </button>
          ))}
        </div>
      </div>

      <div className="navigation-buttons">
        <button
          className="btn-secondary"
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>

        <button
          className="btn-primary"
          onClick={handleNext}
          disabled={answers[currentQuestion.id] === undefined}
        >
          {currentQuestionIndex === questions.length - 1 ? 'Complete Survey' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default Survey;
