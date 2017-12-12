import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.enterSubmit = this.enterSubmit.bind(this);
  }

  search(){
    if(this.state.searchTerm) {
      this.props.onSearch(this.state.searchTerm);
      console.log('Searching...');
    }

  }

  handleTermChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }


  enterSubmit(e) {
    if (e.keyCode === 13) {
      /* Start searching */
      this.search();
    }
  }

  render(){
    return(
      <div className="SearchBar">
        <input onKeyUp={this.enterSubmit} className="searchArtist" placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
        <a className="searchBtn" onClick={this.search}>SEARCH</a>
      </div>

    );
  }
}

export default SearchBar;
