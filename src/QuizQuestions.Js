import React from "react";

function QuizQuestion({ questions }) {
  return (
    <div className="quiz-questions">
      {questions.map((question, index) => (
        <div key={index}>
          <h2>{question.questionText}</h2>
          {/* Render answer options here */}
        </div>
      ))}
    </div>
  );
}

export default QuizQuestion;
