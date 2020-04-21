import React, { Component, createContext, useState } from 'react'

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const [playingTrack, setPlayingTrack] = useState(null);

    return(
        <PlayerContext.Provider value={{playingTrack, setPlayingTrack}}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;