import React from 'react';

class ImageGallery extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedImage: this.props.currentPhoto,
      selectedImageIndex: 0,
      showModal: false,
      nOfStylePhotos: this.props.selectedStylePhotos.length
    }

    this.handleCarouselNext = this.handleCarouselNext.bind(this);
    this.handleCarouselPrevious = this.handleCarouselPrevious.bind(this);
    this.handleNextImage = this.handleNextImage.bind(this);
    this.handlePreviousImage = this.handlePreviousImage.bind(this);
    this.handleSelectImage = this.handleSelectImage.bind(this);
    this.handleExpandImage = this.handleExpandImage.bind(this);
    this.handleCloseExpandedImage = this.handleCloseExpandedImage.bind(this);
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.currentPhoto !== prevProps.currentPhoto) {
      this.setState({selectedImage: this.props.currentPhoto, nOfStylePhotos: this.props.selectedStylePhotos.length});
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

  handleExpandImage() {
    this.setState({ showModal: true});
  }

  handleCloseExpandedImage() {
    this.setState({ showModal: false});
  }

  render() {
    return(
      <div className="ImageGalleryContainer">
        <div className="ImageContainer">
          <i className="fas fa-angle-left fa-3x" onClick={this.handlePreviousImage} style={{ display: this.state.nOfStylePhotos > 2 ? 'block' : 'none' }}/>
          <div className="SelectedImageContainer">
            <img className="SelectedImage" src={this.state.selectedImage} alt={this.props.selectedStyle.name} onClick={this.handleExpandImage}/>
            <div className="ImageModal" style={{ display: this.state.showModal ? 'flex' : 'none' }}>
              <img className="SelectedImageModal" src={this.state.selectedImage} alt={this.props.selectedStyle.name} onClick={this.handleCloseExpandedImage}/>
            </div>
          </div>
          <i className="fas fa-angle-right fa-3x" onClick={this.handleNextImage} style={{ display: this.state.nOfStylePhotos > 2 ? 'block' : 'none' }}/>
        </div>
        <div className="ThumbnailContainer">
          <div className="ThumbnailCarouselContainer">
            <div className="ThumbnailCarouselTrack">
            {this.props.selectedStylePhotos.map((photo, i) => (
              <img
                style={{ 
                  border: this.state.selectedImage === photo.url ? "2px solid rgb(194, 0, 0)" : "",
                  boxShadow: this.state.selectedImage === photo.url ? "0px 0px 5px 3px rgb(194, 0, 0)" : ""
                }}
                key={i}
                className="ThumbnailImage"
                src={photo.thumbnail_url}
                alt={this.props.selectedStyle.name}
                onClick={() => this.handleSelectImage(photo.url, i)}
              />
            ))}
            </div>
          </div>
          <div className="CarouselNav" style={{ display: this.state.nOfStylePhotos > 6 ? 'block' : 'none' }}>
            <i className="fas fa-angle-left fa-2x" onClick={this.handleCarouselPrevious} />
            <i className="fas fa-angle-right fa-2x" onClick={this.handleCarouselNext} />
          </div>
        </div>
      </div>
    );
  }
}


export default ImageGallery;