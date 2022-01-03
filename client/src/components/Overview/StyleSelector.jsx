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
        <div>{this.props.selectedStyle.name}</div>
        <div className="StyleSelectorContainer">
          {this.props.styles.map((style, index) => (
            <img 
              style={{ border: this.props.selectedStyle.style_id === style.style_id ? "4px solid red" : ""}}
              key={style.style_id} 
              className="StyleImage"
              src={style.photos[0].thumbnail_url}
              onClick={() => this.props.changeStyle(index)}/>
          ))}
        </div>
      </div>
    );
  }
}

export default StyleSelector;