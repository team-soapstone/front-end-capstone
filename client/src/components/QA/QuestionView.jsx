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
      currentProductAnswers: '',
      shownQuestions: 4,
      shownAnswers: 2
    };

    this.handleAddQuestion = this.handleAddQuestion.bind(this);
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
          currentProductQuestions: response.data.results
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




  render() {
    if (!this.state.currentProductQuestions) {
      return <div></div>
    }

    return (
      <div data-testid='question-view'>
      <QuestionSearch />
      <QuestionList questions={this.state.currentProductQuestions} answerLimit={this.state.shownAnswers} questionLimit={this.state.shownQuestions}/>
      <AddQuestion addQuestion={this.handleAddQuestion}/>
      <AddAnswer />
      </div>
    );
  }
}

export default QuestionView;