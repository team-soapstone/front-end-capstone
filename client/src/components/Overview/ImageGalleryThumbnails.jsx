import React from 'react';

class ImageGalleryThumbnails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <img className="ImageMaxWidth" src={this.props.thumbnail} />
      </div>
    );
  }
}

export default ImageGalleryThumbnails;