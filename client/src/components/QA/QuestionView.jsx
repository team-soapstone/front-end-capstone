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
      shownQuestions: 2,
      shownAnswers: 2
    };

    this.handleAddQuestion = this.handleAddQuestion.bind(this);
    this.searchQuestionList = this.searchQuestionList.bind(this);
    this.loadMoreQuestions = this.loadMoreQuestions.bind(this);
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

  loadMoreQuestions() {
    this.setState({
      shownQuestions: this.state.shownQuestions + 2
    });

    this.getCurrentQuestions(this.props.productId);
  }


  render() {
    if (!this.state.currentProductQuestions) {
      return <div data-testid='question-view'></div>
    }

    return (
      <div>
        <div data-testid='question-view' className="qaComponent">
          <h2>Questions & Answers</h2>
          <QuestionSearch onSearch={this.searchQuestionList}/>
          <QuestionList questions={this.state.searchedQuestions} answerLimit={this.state.shownAnswers} onClick={this.loadMoreQuestions}/>
          <AddQuestion addQuestion={this.handleAddQuestion}/>
          <AddAnswer />
        </div>
      </div>
    );
  }
}

export default QuestionView;