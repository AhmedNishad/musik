import React, { useState, useContext } from 'react'
import { render } from 'react-dom';
import { PlayerContext } from '../../contexts/playerContext';

const TrackQueue = ({visible})=>{
    const {queue, queueDispatch, playingTrack, setPlayingTrack} = useContext(PlayerContext)
    let queueCount = 0; 
    if(!visible || queue.length == 0)
        return <div></div>
    return(
        <div className="track-queue">
            {queue.map(track => {
                queueCount++;
                return(
                    <div key={queueCount} className={`card queue-element  ${playingTrack.id == track.id ? "active": ""}`}>
                        <span onClick={()=> setPlayingTrack(track)} className={`card-content `}>
                            <img src={track.imgUrl}/>
                            <p>{track.name} {track.artist.name} {playingTrack.id == track.id ? " - playing" : ""}</p>
            
                        </span>
                        <button className="button is-danger" onClick={()=> queueDispatch({type: 'REMOVE_FROM_QUEUE', trackId: track.id})}>Remove</button>
                    </div>
                )
            })}
        </div>
    )

}

export {TrackQueue};