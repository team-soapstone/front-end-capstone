import React from 'react';

import ImageGalleryThumbnails from './ImageGalleryThumbnails.jsx';

class ImageGallery extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <div className="SelectedImageContainer">
          <img className="ImageMaxWidth" src={this.props.currentPhoto}/>
        </div>
        <div className="ThumbnailContainer">
          {this.props.selectedStylePhotos.map((photo, i) => {
            return <ImageGalleryThumbnails key={i} thumbnail={photo.thumbnail_url} />;
          })}
        </div>
      </div>
    );
  }
}

export default ImageGallery;