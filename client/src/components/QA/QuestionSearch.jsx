import React from 'react';

class QuestionSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    this.setState({
      term: e.target.value
    })
  }

  onClick() {
    this.props.onClick(this.state.term);
  }

  render() {
    return (
      <div>
        <input type='text' placeholder='Search Questions...' value={this.state.term} onChange={this.onChange}/>
        <button onClick={this.onClick}>Search</button>
      </div>
    );
  }
}

export default QuestionSearch;