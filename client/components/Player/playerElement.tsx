import React, { useContext, useState, useEffect } from 'react';

const PlayerElement = ({onVolume, onPlayChange, playing, trackInfo, seek})=>{
    let {currentTime, duration}  = trackInfo;
    let value = (currentTime / duration);
    return(
        <div>
            <button className="button is-secondary" onClick={onPlayChange}>{playing ? 'Stop' : 'Start'}</button>
            <input type="range" onChange={onVolume}  className="slider"></input>
            <span id="seekObjContainer">
                {currentTime} : {duration}
                <progress onClick={seek} id="seekObj" value={value} ></progress>
			</span>
        </div>
    )
}

export {PlayerElement};
