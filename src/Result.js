import React from "react";


function Result (props) {
  
 return (
    <div>
        <h1>Result Page</h1>
        {props.correctCount >= props.question ? (  <p>Impressive! 😲🎉 You've earned 4 marks. Keep challenging yourself!</p>) : (<p> You've earned {props.correctCount} marks. Keep challenging yourself! 🎉</p>)}
        
        <button onClick={props.backtohome}>Back to Quiz</button>
    </div>
 )
}


export default Result;