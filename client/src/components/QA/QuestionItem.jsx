import React from "react";

const QuestionItem = ({ question, answerLimit }) => {
  return (
    <div className="questionItem">
      <div className="questionText">Q: {question.question_body}</div>
      <div>
        {Object.keys(question.answers)
          .slice(0, answerLimit)
          .map((answerId) => {
            return (
              <p style={{ fontSize: "13px" }} key={answerId} className='answer'>
                A: {question.answers[answerId].body}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default QuestionItem;
