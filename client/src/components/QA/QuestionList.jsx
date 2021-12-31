import React from 'react';
import QuestionItem from './QuestionItem.jsx'

const QuestionList = (props) => {
  return (
    <div>
      {
        props.questions.map(question => {
          return (
            <QuestionItem question={question} answerLimit={props.answerLimit} key={question.question_id}/>
          );
        })
      }
    </div>
  );
}

export default QuestionList;