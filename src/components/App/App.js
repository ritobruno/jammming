import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Spotify from '../../util/Spotify';

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
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track){
    if(this.state.playlistTracks.indexOf(track) === -1){
      this.setState({playlistTracks: this.state.playlist.concat(track)});
    }
  }

  removeTrack(track){
    let tracks = this.state.playlistTracks;
    //the filter updates the array leaving out the removed tracks
    tracks = tracks.filter(currentTrack => track.id != currentTrack.id);
    this.setState({playlistTracks: tracks});
  }

  updatePlaylistName(name){
    this.setState({playlistName: name});
  }

  savePlaylist(){
    let trackURIs = this.state.playlistTracks.map(track => {
        return track.uri;
    });
    Spotify.savePlaylist(this.state.playlistName, trackURIs);
  }

  search(searchTerm) {
    Spotify.search(searchTerm).then(tracks => this.setState({searchResults: tracks}));
  }

  render() {
    return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={this.search} />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
