import React from 'react';
import QuestionItem from './QuestionItem.jsx'

const QuestionList = (props) => {
  let sorted = props.questions.sort((a, b) => {
    return b.question_helpfulness - a.question_helpfulness;
  });

  return (
    <div>
      {
        sorted.map(question => {
          return (
            <QuestionItem question={question} answerLimit={props.answerLimit} key={question.question_id}/>
          );
        })
      }
      <button onClick={props.showQuestion}>Add A Question</button>
      <button className="moreQuestionButton" onClick={props.onClick}>More Answered Questions</button>
    </div>
  );
}

export default QuestionList;