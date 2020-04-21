import React, { Component, useState, useContext } from 'react';

import Track from '../../models/track';
import { PlayerContext } from '../../contexts/playerContext';

const TrackElem = ({track})=>{

  const {playingTrack,setPlayingTrack} = useContext(PlayerContext);

  const playTrack = () =>{
    setPlayingTrack(track);
  }

  return(
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
      <nav className="level is-mobile">
        <div className="level-left">
          <a className="level-item" aria-label="reply">
            <span className="icon is-small">
              <i className="fa fa-reply" aria-hidden="true"></i>
            </span>
          </a>
          <a className="level-item" aria-label="retweet">
            <span className="icon is-small">
              <i className="fa fa-retweet" aria-hidden="true"></i>
            </span>
          </a>
          <a className="level-item" aria-label="like">
            <span className="icon is-small">
              <i className="fa fa-heart" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </nav>
    </div>
  </article>
    );
}

interface trackState{
    track: Track;
}

interface trackProps{
    track: Track;
}

export default TrackElem;