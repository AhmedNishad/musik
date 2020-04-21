import React, { Component, useContext } from 'react';

import Track from '../../models/track';
import {trackList} from '../../testdata'
import { PlayerContext } from '../../contexts/playerContext';


const Player = ()=>{
    const {playingTrack} = useContext(PlayerContext);

    return playingTrack == null ? (
        <h2>No track playing</h2>
    ) : (
        <div>
            <img src={playingTrack.imgUrl} />
            <audio controls>
                <source src={playingTrack.songUrl} type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio>
            <h2>Now playing {playingTrack.name} by {playingTrack.artist.name}</h2>
        </div>
    )
}

enum PlayerStatus{
    Playing,
    Pause
}

interface PlayerState{
    status: PlayerStatus,
    track: Track
}


export default Player;