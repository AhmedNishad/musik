import React, { Component } from 'react';

import Track from '../../models/track';
import TrackElem from './track';
import {trackList} from '../../testdata'

class TrackList extends Component {

    state:trackListState;

    constructor(props){
        super(props);
        this.state = {
            tracks:trackList
        }
    }

  render() { 
    let trackId = 0;
    let tracks = this.state.tracks.map((t:Track) => {
      trackId++;
      return (
      <TrackElem key={trackId} track={t} />
     )
    }
        
    );

    return ( 
      <div className="book-list">
      <div className="box">
          {tracks}
        </div>   
      </div>
    );
  }
}

interface trackListState{
  tracks: Track[]
}
 
export default  TrackList;