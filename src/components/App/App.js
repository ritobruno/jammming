import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{name},{artist},{album}],
      playlistName: "BR Playlist",
      playlistTracks: [
        {name: "coiso"},
        {artist: "Marco Paulo"},
        {album: "Siga"}
      ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);

  }

  addTrack(track){
    if(this.state.playlistTracks.indexOf(track) === -1){
      this.setState({playlistTracks: this.state.playlist.concat(track)});
    }
  }

  removeTrack(track){
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => track.id != currentTrack.id);
    this.setState({playlistTracks: tracks});
  }

  render() {
    return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack}/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
