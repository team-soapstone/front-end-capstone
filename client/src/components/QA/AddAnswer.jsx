import React from 'react';

class AddAnswer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: '',
      username: '',
      email: '',
      images: [],
      questionId: props.questionId
    };

    this.onChangeAnswer = this.onChangeAnswer.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeAnswer(e) {
    this.setState({
      answer: e.target.value
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state)
  }



  render() {
    return (
      <form id="modal" className="addQuestionForm" onSubmit={this.onSubmit} style={ {visibility: Number(this.props.addAnswerTo) === Number(this.props.questionId) ? 'visible' : 'hidden' }}>
        <h3 className="addQuestionTitle">Submit Your Answer</h3>
        <h2 style={ {fontSize: '12px'} }>{this.props.productName}: &nbsp; {this.props.questionBody}</h2>
        <span className="closeForm" onClick={this.props.onClick}>x</span>
        <label htmlFor="answer">Answer:</label>
        <textarea name="answer" maxLength="1000" value={this.state.answer} onChange={this.onChangeAnswer}required/>
        <label htmlFor="username">Username: </label>
        <input type="text" value={this.state.username} onChange={this.onChangeUsername} name="username" maxLength="60" placeholder="Example: jack543!" required />
        <p className="addQuestionInput" style={{ fontSize: "8px", marginTop: '0', color: 'white', position: 'relative', marginLeft: '0',}}>For privacy reasons, do not use your full name or email address within nickname.</p>
        <label htmlFor="username">Email: </label>
        <input type="email" value={this.state.email} onChange={this.onChangeEmail} name="email" maxLength="60" placeholder="Example: jack@email.com" required />
        <input type="file" accept="image/png, image/jpeg"/>
        <input type="submit" />
      </form>
    );
  }
}

export default AddAnswer;