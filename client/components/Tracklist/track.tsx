import React, { Component, useState, useContext } from 'react';

import Track from '../../models/track';
import { PlayerContext } from '../../contexts/playerContext';

const TrackElem = ({track})=>{

  const {playingTrack,setPlayingTrack, queueDispatch, queue} = useContext(PlayerContext);

  const inQueue = ()=>{
    let index = queue.findIndex(t => t.id == track.id)
    return index != -1;
  }

  const playTrack = () =>{
    setPlayingTrack(track);
    if(!inQueue())
      queueDispatch({type:'ADD_TO_QUEUE', track})
  }

  return(
    <div>
  <article onClick={playTrack} className="media track">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={track.imgUrl} alt="Image"/>
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{track.name}</strong> <small>@{track.artist.name}</small> <small>{track.releaseYear}</small>
            <br/>
            {track.description}
          </p>
        </div>
      </div>
    </article>
    <button className="button is-primary" disabled={!(queue.length > 0)}
    onClick={()=> queue.findIndex(t => t.id == track.id) == -1 ? queueDispatch({type:'ADD_TO_NEXT',track, playingTrack: playingTrack}) : null}>Add To Next</button>
    </div>
    
    );
}

interface trackState{
    track: Track;
}

interface trackProps{
    track: Track;
}

export default TrackElem;