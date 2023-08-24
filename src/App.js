import React, { useState, useEffect} from "react";
import "./App.css"
import Result from "./Result";
import Popup from "./Popup";

function App (){
  const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];


  const [questionNum, setQuestionNum] = useState(0);
  const [isResultShow, setResultShow] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedOptionIsCorrect, setSelectedOptionIsCorrect] = useState(false);
  const [showDelayedPopup, setShowDelayedPopup] = useState(false);
  const [countCorrectOption , setCountCorrectOption] = useState(0);


  const questionAnsText = questions[questionNum].answerOptions;

  const nextQues = (selectedOption) => {
    const nextNum = questionNum + 1;
    if (nextNum < questions.length) {
      setQuestionNum(nextNum);
    } else {
      setResultShow(true);
    }
    const checkCorrect = selectedOption.isCorrect;
    setSelectedOptionIsCorrect(checkCorrect);
    if(checkCorrect === true){
      console.log("true")
      setCountCorrectOption(countCorrectOption + 1);
    }
    setShowPopup(true);
    setShowDelayedPopup(true);
  };

  const backToHome = () => {
    setResultShow(false);
    setQuestionNum(0);
    setCountCorrectOption(0);
  }


  useEffect(() => {
    
    if (showDelayedPopup) {
      const timeoutId = setTimeout(() => {
        setShowDelayedPopup(false); 
        setShowPopup(false); 
      }, 700); 

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [showDelayedPopup]);

  return (
    <div className="App">
      <div className="quiz-container">
        {isResultShow  ? (
          <Result correctCount = {countCorrectOption} question = {questions.length} backtohome= {backToHome}/>
        ) : (
          <div>
            <h1>{questions[questionNum].questionText}</h1>
            <div className="options-container">
              <ul>
                {questionAnsText.map((text, index) => {
                  const ansText = text.answerText;
                  return (
                    <li key={index} onClick={() => nextQues(text)}>
                      {ansText}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
        {showPopup && <Popup isCorrect={selectedOptionIsCorrect} />}
      </div>
    </div>
  );
}

export default App;

