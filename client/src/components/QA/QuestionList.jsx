import React from "react";
import QuestionItem from "./QuestionItem.jsx";

const QuestionList = (props) => {
  let sorted = props.questions.sort((a, b) => {
    return b.question_helpfulness - a.question_helpfulness;
  });


  return (
    <div>
      {sorted.map((question) => (
        <QuestionItem
          question={question}
          answerLimit={props.answerLimit}
          key={question.question_id}
          questionId={question.question_id}
          markQuestionHelpful={props.markQuestionHelpful}
          markAnswerHelpful={props.markAnswerHelpful}
          reportAnswer= {props.reportAnswer}
          answerReported={props.answerReported}
          productName={props.productName}
          addAnswerTo={props.addAnswerTo}
          showAddAnswer={props.showAddAnswer}
          closeAddAnswer={props.closeAddAnswer}
          handleSubmitAnswer={props.handleSubmitAnswer}
          showMoreAnswers={props.showMoreAnswers}
          showLessAnswers={props.showLessAnswers}
        />
      ))}
      <div className="questionButtons">
        <button className="reviewButtons" id="questionButton" onClick={props.showQuestion}>Add A Question</button>
        <button className="reviewButtons" id="questionButton" onClick={props.onClick} style={ {visibility: props.visible} }>
          More Answered Questions
        </button>
      </div>
    </div>
  );
};

export default QuestionList;
