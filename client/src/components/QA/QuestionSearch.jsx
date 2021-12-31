import React from 'react';

class QuestionSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onSearch(e.target.value);
  }


  render() {
    return (
      <div>
        <input type='text' placeholder='Have a question? Search for answers...' onChange={this.onChange}/>
      </div>
    );
  }
}

export default QuestionSearch;