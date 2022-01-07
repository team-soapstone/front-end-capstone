import React from 'react';

class StyleSelector extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  
  render() {
    return(
      <div>
        <div className="StyleName">{this.props.selectedStyle.name}</div>
        <div className="StyleSelectorContainer">
          {this.props.styles.map((style, index) => (
            <img 
              style={{ 
                background: this.props.selectedStyle.style_id === style.style_id ? "radial-gradient(green 60%, white 70%) border-box" : ""
              }}
              key={style.style_id} 
              className="StyleImage"
              src={style.photos[0].thumbnail_url}
              alt={this.props.selectedStyle.name}
              onClick={() => this.props.changeStyle(index)}/>
          ))}
        </div>
      </div>
    );
  }
}

export default StyleSelector;