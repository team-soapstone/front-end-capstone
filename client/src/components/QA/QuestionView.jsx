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
      currentProductQuestions: [],
      showQuestions: 2
    };
  }

  componentDidUpdate() {
    if (this.state.currentProductId !== this.props.productId) {
      this.setState({
        currentProductId: this.props.productId
      });

      this.getCurrentQuestions(this.props.productId);
    }
  }

  getCurrentQuestions(id) {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/qa/questions', { headers: {Authorization: API_KEY}, params: {product_id: id, count: this.state.showQuestions}})
      .then((response) => {
        this.setState({
          currentProductQuestions: response.data.results
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }




  render() {
    return (
      <div data-testid='question-view'>
      <QuestionSearch />
      <QuestionList questions={this.state.currentProductQuestions}/>
      <AddQuestion />
      <AddAnswer />
      </div>
    );
  }
}

export default QuestionView;