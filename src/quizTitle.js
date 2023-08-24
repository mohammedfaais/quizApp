import React from "react";

function QuizTitle({ title, onClick }) {
  return (
    <div className="quiz-title" onClick={onClick}>
      {title}
    </div>
  );
}

export default QuizTitle;
