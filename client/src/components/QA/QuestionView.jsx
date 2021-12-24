import React from 'react';
import QuestionList from './QuestionList.jsx';
import QuestionSearch from './QuestionSearch.jsx';
import AddQuestion from './AddQuestion.jsx';
import AddAnswer from './AddAnswer.jsx';

class QuestionView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }


  render() {
    return (
      <div>
      <QuestionSearch />
      <QuestionList />
      <AddQuestion />
      <AddAnswer />
      </div>
    );
  }
}

export default QuestionView;