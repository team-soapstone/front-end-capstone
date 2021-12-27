import React from 'react';

const QuestionItem = (props) => {
  return (
    <div>
      {
        props.questions.map((question) => {
          return (
            <div key={question.question_id}>
              <div>Q: {question.question_body}</div>
              <div>
                {
                  Object.keys(question.answers).slice(0, props.answerLimit).map((answerId) => {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <p style={ {fontSize: '13px'} }>A: {question.answers[answerId].body}</p>
                    );
                  })
                }
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default QuestionItem;