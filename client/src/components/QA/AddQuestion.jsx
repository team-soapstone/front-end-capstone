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
    console.log(this.state);
  }



  render() {
    return(
      <form style={{ display: "inline-block", border: "1px solid black", width: "20%"}} onSubmit={this.handleSubmit}>
        <h3>Add Question</h3>
        <textarea onChange={this.onChangeQuestion} value={this.state.question}/>
        <input type="text" className="nickname" placeholder="Nickname..." value={this.state.nickname} onChange={this.onChangeNickname}/>
        <input type="email" className="email" placeholder="Email..." value={this.state.email} onChange={this.onChangeEmail}/>
        <input type="submit" />
      </form>
    );
  }
}

export default AddQuestion;