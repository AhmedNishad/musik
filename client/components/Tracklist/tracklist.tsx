import React, { Component } from 'react';

import Track from '../../models/track';
import TrackElem from './track';
import {trackList} from '../../testdata'
import {AuthContext} from '../../contexts/authContext';

class TrackList extends Component {
    static contextType = AuthContext;
    state:trackListState;

    constructor(props){
        super(props);
        this.state = {
            tracks:trackList
        }
    }

  render() { 
    let tracks = this.state.tracks.map((t:Track) => {
      return (
      <TrackElem key={t.id} track={t} />
     )
    });

    const {isAdmin, toggleAdmin } = this.context;

    return ( 
      <div className="song-list">
        <div onClick={toggleAdmin}>{isAdmin ? 'logged in' : 'logged out'}</div>
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