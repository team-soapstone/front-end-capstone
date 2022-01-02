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
      shownQuestions: 4,
      shownAnswers: 2
    };

    this.handleAddQuestion = this.handleAddQuestion.bind(this);
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

  handleAddQuestion(question) {
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/qa/questions', { body: question.question, name: question.nickname, email: question.email, product_id: this.state.currentProductId}, { headers: {Authorization: API_KEY}})
    .then(res => { console.log(res) })
    .catch(err => { throw err; });
  }

  searchQuestionList(term) {
      let questionListCopy = this.state.currentProductQuestions.filter((question) => {
        return question.question_body.toLowerCase().includes(term.toLowerCase());
      })

      if (term.length < 3) {
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
      return <div data-testid='question-view'></div>
    }

    return (
      <div data-testid='question-view'>
      <QuestionSearch onSearch={this.searchQuestionList}/>
      <QuestionList questions={this.state.searchedQuestions} answerLimit={this.state.shownAnswers}/>
      <AddQuestion addQuestion={this.handleAddQuestion}/>
      <AddAnswer />
      </div>
    );
  }
}

export default QuestionView;