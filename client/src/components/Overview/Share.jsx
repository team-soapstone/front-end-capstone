import React from 'react';

class Share extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <div className="ShareComponent">
        <i 
          className="fab fa-facebook fa-2x" 
          onClick={() => window.open(`https://www.facebook.com/sharer.php?u=${this.props.currentUrl}`, '_blank')}
        />
        <i 
          className="fab fa-instagram fa-2x"
          onClick={() => window.open(`https://www.instagram.com/hackreactor`, '_blank')}
        />
        <i 
          className="fab fa-pinterest fa-2x"
          onClick={() => window.open(`https://pinterest.com/pin/create/bookmarklet/?media=${this.props.currentPhoto}&url=${this.props.currentUrl}`, '_blank')}
        />
        <i 
          className="fab fa-creative-commons-share fa-2x"
          onClick={() => navigator.clipboard.writeText(this.props.currentUrl)}
        />
      </div>
    );
  }
}

export default Share;