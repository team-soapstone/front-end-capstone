import React from "react";
import moment from 'moment';

const QuestionItem = ({ question, answerLimit, questionId, markQuestionHelpful, markAnswerHelpful }) => {
  let container = [];

  for (let answerId in question.answers) {
    container.push([answerId, question.answers[answerId]])
  }

  let sortedContainer = container.sort((a, b) => {
    return b[1].helpfulness - a[1].helpfulness;
  });
  return (
    <div className="questionItem">
      <div id="questionHeader">
        <div className="questionText">Q: {question.question_body}</div>
        <div className="questionStats">Helpful? &nbsp; <span id={questionId} onClick={markQuestionHelpful} className="clickable" style={ {textDecoration: 'underline'} }>Yes</span>({question.question_helpfulness})&nbsp; | &nbsp;<span className="clickable" style={ {textDecoration: 'underline'} }>Add Answer</span></div>
      </div>
      <div>
        {sortedContainer
          .slice(0, answerLimit)
          .map((answer) => {
            return (
              <p style={{ fontSize: "13px" }} key={answer[1].id} className='answer'>
                A: {answer[1].body}
                <br/>
                by {answer[1].answerer_name}, {moment(answer[1].date).format('MMM Do YYYY')}
                &nbsp; | &nbsp; Helpful? &nbsp; <span className="clickable" style={ {textDecoration: 'underline'} } onClick={markAnswerHelpful} id={answer[1].id}>Yes</span>({answer[1].helpfulness}) &nbsp; | &nbsp; <span style={ {textDecoration: 'underline'} }>{answer[1].reported ? 'Reported' : 'Report'}</span>
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default QuestionItem;
