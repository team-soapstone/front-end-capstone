import React from 'react';
import axios from 'axios';
import QuestionList from './QuestionList.jsx';
import QuestionSearch from './QuestionSearch.jsx';
import AddQuestion from './AddQuestion.jsx';
import AddAnswer from './AddAnswer.jsx';
import API_KEY from '../../../../config.js';

class QuestionView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProductId: 0,
      currentProductQuestions: null,
      searchedQuestions: null,
      currentProductAnswers: '',
      shownAnswers: 2,
    };

    this.searchQuestionList = this.searchQuestionList.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.productId !== prevProps.productId) {
      this.setState({
        currentProductId: this.props.productId
      });

      this.getCurrentQuestions(this.props.productId);
    }
  }


  getCurrentQuestions(id) {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/qa/questions', { headers: {Authorization: API_KEY}, params: {product_id: id, count: this.state.shownQuestions}})
      .then((response) => {
        this.setState({
          currentProductQuestions: response.data.results,
          searchedQuestions: response.data.results
        })
      })
      .catch((err) => {
        throw err;
      });
  }

  searchQuestionList(term) {
      let questionListCopy = this.state.currentProductQuestions.filter((question) => {
        return question.question_body.toLowerCase().includes(term.toLowerCase());
      })

      if (term === '') {
        this.setState({
          searchedQuestions: this.state.currentProductQuestions
        })
      } else {
        this.setState({
          searchedQuestions: questionListCopy
        });
      }
  }


  render() {
    if (!this.state.currentProductQuestions) {
      return <div></div>
    }

    return (
      <div data-testid='question-view'>
      <QuestionSearch onClick={this.searchQuestionList}/>
      <QuestionList questions={this.state.searchedQuestions} answerLimit={this.state.shownAnswers}/>
      <AddQuestion />
      <AddAnswer />
      </div>
    );
  }
}

export default QuestionView;