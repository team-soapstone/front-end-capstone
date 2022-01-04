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
      shownAnswers: 2,
      addQuestionVisisble: 'hidden',
      moreQuestionsVisible: 'visible'
    };

    this.handleAddQuestion = this.handleAddQuestion.bind(this);
    this.searchQuestionList = this.searchQuestionList.bind(this);
    this.loadMoreQuestions = this.loadMoreQuestions.bind(this);
    this.showAddQuestion = this.showAddQuestion.bind(this);
    this.closeAddQuestion = this.closeAddQuestion.bind(this);
    this.getCurrentQuestions = this.getCurrentQuestions.bind(this);
    this.markQuestionHelpful = this.markQuestionHelpful.bind(this);
    this.markAnswerHelpful = this.markAnswerHelpful.bind(this);
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
        if ((response.data.results.length !== 4) && (JSON.stringify(response.data.results) === JSON.stringify(this.state.currentProductQuestions))) {
          this.setState({
            moreQuestionsVisible: 'hidden'
          })
        } else {
          this.setState({
            currentProductQuestions: response.data.results,
            searchedQuestions: response.data.results
          })
          }
        }
      )
      .catch((err) => {
        throw err;
      });
  }

  handleAddQuestion(question) {
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/qa/questions', { body: question.question, name: question.nickname, email: question.email, product_id: this.state.currentProductId}, { headers: {Authorization: API_KEY}})
    .then(res => { console.log(res) })
    .catch(err => { throw err; });

    this.setState({
      addQuestionVisisble: 'hidden',
    })
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

  showAddQuestion() {
    this.setState({
      addQuestionVisisble: 'visible'
    });
  }

  closeAddQuestion() {
    this.setState({
      addQuestionVisisble: 'hidden'
    })
  }

  markQuestionHelpful(event) {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/qa/questions/${event.target.id}/helpful`, { question_id: event.target.id}, { headers: {Authorization: API_KEY}})
    .then((res) => console.log(res))
    .then(() => {
      this.getCurrentQuestions(this.props.productId);
    })
    .catch((err) => { throw err; });
  }

  markAnswerHelpful(event) {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/qa/answers/${event.target.id}/helpful`, { question_id: event.target.id}, { headers: {Authorization: API_KEY}})
    .then((res) => console.log(res))
    .then(() => {
      this.getCurrentQuestions(this.props.productId);
    })
    .catch((err) => { throw err; });
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
          <QuestionList questions={this.state.searchedQuestions} answerLimit={this.state.shownAnswers} onClick={this.loadMoreQuestions} showQuestion={this.showAddQuestion} markQuestionHelpful={this.markQuestionHelpful} markAnswerHelpful={this.markAnswerHelpful} visible={this.state.moreQuestionsVisible}/>
          <AddQuestion addQuestion={this.handleAddQuestion} visible={this.state.addQuestionVisisble} onClick={this.closeAddQuestion}/>
          <AddAnswer />
        </div>
      </div>
    );
  }
}

export default QuestionView;