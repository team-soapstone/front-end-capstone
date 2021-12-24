import React from 'react';

class NewReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newReview: {}
    };
  }

  render() {
    return (
      <div>
        New Review Button
      </div>
    );
  }
}

export default NewReview;