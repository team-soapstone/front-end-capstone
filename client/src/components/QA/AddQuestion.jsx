import React from 'react';

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      question: '',
      nickname: '',
      email: '',
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
      <form id="modal" className="addQuestionForm" onSubmit={this.handleSubmit} style={ {visibility: this.props.visible} }>
        <span className="closeForm" onClick={this.props.onClick}>x</span>
        <h3 className="addQuestionTitle">Add Question</h3>
        <textarea className="addQuestionInput" placeholder="Your question..." maxLength="1000" onChange={this.onChangeQuestion} value={this.state.question}required/>
        <input className="addQuestionInput" type="text" placeholder="Nickname..." value={this.state.nickname} onChange={this.onChangeNickname} required/>
        <p className="addQuestionInput" style={{ fontSize: "8px", marginTop: '0' }}>For privacy reasons, do not use your full name or email address within nickname.</p>
        <input className="addQuestionInput" type="email"  placeholder="Email..." value={this.state.email} onChange={this.onChangeEmail} required/>
        <input className="addButton" id="addQuestionSubmit" type="submit"/>
      </form>
    );
  }
}

export default AddQuestion;