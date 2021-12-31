import React from 'react';
import QuestionItem from './QuestionItem.jsx'

const QuestionList = (props) => {
  return (
    <div>
      <QuestionItem questions={props.questions} answerLimit={props.answerLimit} questionLimit={props.questionLimit}/>
    </div>
  );
}

export default QuestionList;