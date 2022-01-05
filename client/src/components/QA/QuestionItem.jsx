import React from "react";
import moment from "moment";
import AddAnswer from './AddAnswer.jsx';

const QuestionItem = ({
  question,
  answerLimit,
  questionId,
  markQuestionHelpful,
  markAnswerHelpful,
  reportAnswer,
  answerReported,
  productName,
  addAnswerTo,
  showAddAnswer,
  closeAddAnswer,
  handleSubmitAnswer,
  showMoreAnswers,
  showLessAnswers
}) => {
  let container = [];

  for (let answerId in question.answers) {
    container.push([answerId, question.answers[answerId]]);
  }

  let sortedContainer = container.sort((a, b) => {
    return b[1].helpfulness - a[1].helpfulness;
  });


  return (
    <div className="questionItem">
      <div id="questionHeader">
        <div className="questionText">Q: {question.question_body}</div>
        <div className="questionStats">
          Helpful? &nbsp;{" "}
          <span
            id={questionId}
            onClick={markQuestionHelpful}
            className="clickable"
            style={{ textDecoration: "underline" }}
          >
            Yes
          </span>
          ({question.question_helpfulness})&nbsp; | &nbsp;
          <span id={questionId} className="clickable" style={{ textDecoration: "underline" }} onClick={showAddAnswer}>
            Add Answer
          </span>
        </div>
      </div>
      <div>
        {sortedContainer.slice(0, answerLimit).map((answer) => {
          return (
            <p
              style={{ fontSize: "13px" }}
              key={answer[1].id}
              className="answer"
            >
              A: {answer[1].body}
              <br />
              by {answer[1].answerer_name},{" "}
              {moment(answer[1].date).format("MMM Do YYYY")}
              &nbsp; | &nbsp; Helpful? &nbsp;{" "}
              <span
                className="clickable"
                style={{ textDecoration: "underline" }}
                onClick={markAnswerHelpful}
                id={answer[1].id}
              >
                Yes
              </span>
              ({answer[1].helpfulness}) &nbsp; | &nbsp;{" "}
              <span
                id={answer[1].id}
                className={answerReported.includes(answer[1].id) ? "x" : "clickable"}
                style={{ textDecoration: "underline" }}
                onClick={answerReported.includes(answer[1].id) ? null : reportAnswer}
              >
                {answerReported.includes(answer[1].id) ? "Reported" : "Report"}
              </span>
            </p>
          );
        })}
      </div>
      <span style={ {fontWeight: '550', textDecoration: 'underline'} } className='clickable' onClick={sortedContainer.slice(0, answerLimit).length < sortedContainer.length ? () => { showMoreAnswers(sortedContainer.length) } : showLessAnswers }>{sortedContainer.slice(0, answerLimit).length < sortedContainer.length ? 'See More Answers' : sortedContainer.slice(0, answerLimit).length > 2 ? 'Collapse Answers' : ''}</span>
      <AddAnswer questionId={questionId} productName={productName} questionBody={question.question_body} addAnswerTo={addAnswerTo} onClick={closeAddAnswer} onSubmit={handleSubmitAnswer}/>
    </div>
  );
};

export default QuestionItem;
