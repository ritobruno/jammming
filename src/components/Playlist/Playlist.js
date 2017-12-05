import React from 'react';
import './Playlist.css';

import TrackList from '../TrackList/TrackList.js';

class Playlist extends Component{
  constructor(props) {
    super(props);
    this.onNameChange = this.onNameChange.bind(this);
  }

  handleNameChange(e){
    this.props.onNameChange(e.target.value);
  }

  render() {
    return(
      <div className="Playlist">
        <input defaultValue={'New Playlist'} onChange={this.handleNameChange}/>
        <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} />
        <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>

    );
  }
}

export default Playlist;
