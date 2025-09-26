import React, { useState } from 'react';
import Survey from './Survey';
import './App.css';

const App = () => {
  const [currentView, setCurrentView] = useState('landing'); // 'landing', 'survey', 'results'

  const handleStartSurvey = () => {
    setCurrentView('survey');
  };

  const handleSurveyComplete = () => {
    setCurrentView('results');
  };

  const handleBackToHome = () => {
    setCurrentView('landing');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'survey':
        return <Survey onComplete={handleSurveyComplete} />;

      case 'results':
        return (
          <div className="app">
            <main className="hero-section">
              <div className="hero-content">
                <h1 className="hero-title">Survey Complete!</h1>
                <p className="completion-message">
                  Thank you for completing the 21st Century Leadership Assessment.
                  Your results have been calculated and saved.
                </p>
                <div className="image-banner">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                    alt="Success and achievement"
                    className="banner-image"
                  />
                </div>
                <div className="action-buttons">
                  <button
                    className="start-survey-btn"
                    onClick={handleBackToHome}
                  >
                    Take Another Survey
                  </button>
                </div>
              </div>
            </main>
          </div>
        );

      default:
        return (
          <div className="app">
            <main className="hero-section">
              <div className="hero-content">
                <h1 className="hero-title">21st Century Leadership</h1>

                <div className="image-banner">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Leadership and teamwork"
                    className="banner-image"
                  />
                </div>

                <button
                  className="start-survey-btn"
                  onClick={handleStartSurvey}
                >
                  Start Survey
                </button>

                <div className="survey-preview">
                  <h3>What to Expect:</h3>
                  <ul>
                    <li>10 leadership assessment questions</li>
                    <li>5-point rating scale (Strongly Agree to Strongly Disagree)</li>
                    <li>Instant results and scoring</li>
                    <li>Approximately 5 minutes to complete</li>
                  </ul>
                </div>
              </div>
            </main>
          </div>
        );
    }
  };

  return renderCurrentView();
};

export default App;
