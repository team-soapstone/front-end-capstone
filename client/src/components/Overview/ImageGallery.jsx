import React from 'react';

class ImageGallery extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedImage: this.props.currentPhoto,
      selectedImageIndex: 0
    }
    this.handleCarouselNext = this.handleCarouselNext.bind(this);
    this.handleCarouselPrevious = this.handleCarouselPrevious.bind(this);
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.currentPhoto !== prevProps.currentPhoto) {
      this.setState({selectedImage: this.props.currentPhoto});
    }
  }

  handleNextImage() {
    if (this.state.selectedImageIndex < this.props.selectedStylePhotos.length - 1) {
      this.setState({selectedImage: this.props.selectedStylePhotos[this.state.selectedImageIndex+1].url, selectedImageIndex: this.state.selectedImageIndex+1})
    } else {
      this.setState({selectedImage: this.props.selectedStylePhotos[0].url, selectedImageIndex: 0})
    }
  }

  handlePreviousImage() {
    if (this.state.selectedImageIndex === 0) {
      this.setState({selectedImage: this.props.selectedStylePhotos[this.props.selectedStylePhotos.length - 1].url, selectedImageIndex: this.props.selectedStylePhotos.length - 1})
    } else {
      this.setState({selectedImage: this.props.selectedStylePhotos[this.state.selectedImageIndex-1].url, selectedImageIndex: this.state.selectedImageIndex-1})
    }
  }

  handleSelectImage(image, i) {
    this.setState({selectedImage: image, selectedImageIndex: i})
  }

  handleCarouselNext() {
    if (this.props.selectedStylePhotos.length > 6) {
      const track = document.querySelector('.ThumbnailCarouselTrack');
      const carouselWidth = document.querySelector('.ThumbnailContainer').offsetWidth;
      track.style.transform = `translateX(-${carouselWidth}px)`;
    }
  }

  handleCarouselPrevious() {
    const track = document.querySelector('.ThumbnailCarouselTrack');
    track.style.transform = `translateX(0)`;
  }

  render() {
    return(
      <div className="ImageGalleryContainer">
        <div className="ImageContainer">
          <button onClick={this.handlePreviousImage.bind(this)}>&lt;</button>
          <div className="SelectedImageContainer">
            <img className="SelectedImage" src={this.state.selectedImage}/>
          </div>
          <button onClick={this.handleNextImage.bind(this)}>&gt;</button>
        </div>
        <div className="ThumbnailContainer">
          <div className="ThumbnailCarouselContainer">
            <div className="ThumbnailCarouselTrack">
            {this.props.selectedStylePhotos.map((photo, i) => (
              <img
                style={{ border: this.state.selectedImage === photo.url ? "4px solid red" : ""}}
                key={i}
                className="ThumbnailImage"
                src={photo.thumbnail_url}
                onClick={() => this.handleSelectImage(photo.url, i)}
              />
            ))}
            </div>
          </div>
          <div className="CarouselNav">
            <i className="fas fa-angle-left fa-2x" onClick={this.handleCarouselPrevious} />
            <i className="fas fa-angle-right fa-2x" onClick={this.handleCarouselNext} />
          </div>
        </div>
      </div>
    );
  }
}


export default ImageGallery;