import React from 'react';

const QuestionItem = ({ question, answerLimit }) => {
  return (
    <div>
      <div>Q: {question.question_body}</div>
      <div>
        {Object.keys(question.answers)
          .slice(0, answerLimit)
          .map((answerId) => {
            return (
              <p style={{ fontSize: "13px" }} key={answerId}>
                A: {question.answers[answerId].body}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default QuestionItem;