import React from 'react';

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      question: '',
      nickname: '',
      email: ''
    };


    this.onChangeQuestion = this.onChangeQuestion.bind(this);
    this.onChangeNickname = this.onChangeNickname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChangeQuestion(e) {
    this.setState({
      question: e.target.value
    });
  }

  onChangeNickname(e) {
    this.setState({
      nickname: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addQuestion(this.state);
  }



  render() {
    return(
      <form className="addQuestionForm" onSubmit={this.handleSubmit}>
        <h3 className="addQuestionTitle">Add Question</h3>
        <textarea className="addQuestionInput" onChange={this.onChangeQuestion} value={this.state.question}/>
        <input className="addQuestionInput" type="text" placeholder="Nickname..." value={this.state.nickname} onChange={this.onChangeNickname}/>
        <p className="addQuestionInput" style={{ fontSize: "8px", marginTop: '0' }}>For privacy reasons, do not use your full name or email address within nickname.</p>
        <input className="addQuestionInput" type="email"  placeholder="Email..." value={this.state.email} onChange={this.onChangeEmail}/>
        <input className="addQuestionInput" id="addQuestionSubmit" type="submit" />
      </form>
    );
  }
}

export default AddQuestion;