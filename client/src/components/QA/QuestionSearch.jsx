import React from 'react';

const QuestionSearch = (props) => {
  return (
    <div>
      <input type='text' placeholder='Have a question? Search for answers...' onChange={(e) => { props.onSearch(e.target.value); }}/>
    </div>
  );
}

export default QuestionSearch;