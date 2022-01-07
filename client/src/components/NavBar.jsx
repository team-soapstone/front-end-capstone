import React from "react";
import logo from '../../dist/Soapstone.png'

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: ''
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleSearchInput(e) {
    this.setState({searchInput: e.target.value});
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleSearch();
    }
  }

  handleSearch() {
    if (this.state.searchInput) {
      this.props.search(this.state.searchInput);
    }
  }
  
  render() {
    return (
      <div className="NavBar">
        <div className="LogoContainer">
          <img className="Logo" alt="Soapstone Logo" src={logo}/>
        </div>
        <div className="SearchBar">
          <label className="visually-hidden" htmlFor="NavSearchInput">Search</label>
          <input 
            className="SearchInput"
            id="NavSearchInput"  
            value={this.state.searchInput}
            onChange={this.handleSearchInput}
            onKeyPress={this.handleKeyPress}
          />
          <i className="fas fa-search fa-2x" onClick={this.handleSearch} />
        </div>
      </div>
    );
  }
}

export default NavBar;