import React from 'react';
// render a button that will always be available
// when clicked, render a modal window (focus)
  // title it Write Your Review, with subtitle About the {Product Name Here}
  // if mandatory, include an asterisk
  // Overall rating Mandatory - click on 5 stars (no partial). Fill appropriately
  // Recommend Product Mandatory - Yes or No
  // Characteristics Mandatory - Check mandatory chart
  // Review Summary text input - Paragraph with a placeholder text 'Example: Best purchase ever!' up to 60 chars
  // Review Body Mandatory - Paragraph with placeholder text 'Why did you like the product or not?' Allows up to 1000 chars. Review must be 50 chars long. If tries to submit, it sohuld fail, similar to a blank mandatory field. Create a counter to let how many characters are needed to reach
  // Photo upload utility
  // Nickname Mandaotry - text input allowing up to 60 chars. Put text below 'For Privacy reasons, do not use your full name or email address'
  // Your email mandatory - your email example, 'For authentication reasons, you will not be emailed'
  // Submit review - A button that will submit
    // if invalid the submission should be prevented with a warning.
      // If mandatory fields are blank
      // review body is < 50 chars
      // email address is not proper email format
      // images selected are invalid or unable to be uploaded
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