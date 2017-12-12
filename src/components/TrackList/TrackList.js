import React, { Component } from 'react';
import Track from '../Track/Track.js';
import './TrackList.css';
import Preloader from '../preloader/preloader.js';

class TrackList extends Component {
  render() {
    return(
      <div className="TrackList" >
        {this.props.tracks.map(track => {
          return <Track track={track} key={track.id} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval}/>
        })}
        <Preloader />
      </div>

    );
  }
}

export default TrackList;
